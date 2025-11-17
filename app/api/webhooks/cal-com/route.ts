import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

/**
 * Cal.com Webhook Handler
 *
 * This endpoint receives webhooks from Cal.com when a booking is created.
 * It updates the lead record to mark that the booking was completed.
 *
 * Setup in Cal.com:
 * 1. Go to Cal.com Settings > Webhooks
 * 2. Add new webhook: https://your-domain.com/api/webhooks/cal-com
 * 3. Select trigger: "Booking Created"
 * 4. (Optional) Add secret for verification
 */

interface CalComWebhookPayload {
  triggerEvent: string
  createdAt: string
  payload: {
    uid: string
    bookingId: number
    title: string
    startTime: string
    endTime: string
    attendees: Array<{
      email: string
      name: string
      timeZone: string
    }>
    metadata?: {
      leadId?: string
    }
    responses?: {
      email?: string
      name?: string
      [key: string]: any
    }
  }
}

// Verify webhook signature (optional but recommended)
async function verifyWebhookSignature(
  request: NextRequest,
  body: string
): Promise<boolean> {
  const webhookSecret = process.env.CAL_COM_WEBHOOK_SECRET

  // If no secret is configured, skip verification
  if (!webhookSecret) {
    console.warn('⚠️  No webhook secret configured - skipping verification')
    return true
  }

  const signature = request.headers.get('x-cal-signature')
  if (!signature) {
    console.error('❌ No signature header found')
    return false
  }

  try {
    // Cal.com uses HMAC SHA256
    const crypto = require('crypto')
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex')

    const isValid = signature === expectedSignature
    if (!isValid) {
      console.error('❌ Invalid webhook signature')
    }
    return isValid
  } catch (error) {
    console.error('Error verifying signature:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('=== Cal.com Webhook Received ===')

    // Read the body as text first for signature verification
    const bodyText = await request.text()

    // Verify signature if secret is configured
    const isValid = await verifyWebhookSignature(request, bodyText)
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid webhook signature' },
        { status: 401 }
      )
    }

    const body: CalComWebhookPayload = JSON.parse(bodyText)
    console.log('Webhook event:', body.triggerEvent)

    // Only process booking.created events
    if (body.triggerEvent !== 'BOOKING_CREATED') {
      console.log('Ignoring non-booking event:', body.triggerEvent)
      return NextResponse.json({ message: 'Event ignored' }, { status: 200 })
    }

    const { payload } = body
    console.log('Booking created:', {
      uid: payload.uid,
      bookingId: payload.bookingId,
      email: payload.attendees[0]?.email,
    })

    // Try to find the lead by email
    const attendeeEmail = payload.attendees[0]?.email || payload.responses?.email

    if (!attendeeEmail) {
      console.error('No email found in booking payload')
      return NextResponse.json(
        { error: 'No email found in payload' },
        { status: 400 }
      )
    }

    // Find the lead by email
    const { data: leads, error: findError } = await supabaseAdmin
      .from('baseaim_lead_form')
      .select('id')
      .eq('email', attendeeEmail)
      .order('created_at', { ascending: false })
      .limit(1)

    if (findError) {
      console.error('Error finding lead:', findError)
      return NextResponse.json(
        { error: 'Failed to find lead' },
        { status: 500 }
      )
    }

    if (!leads || leads.length === 0) {
      console.log('No lead found for email:', attendeeEmail)
      // Not an error - they might have booked without filling the form
      return NextResponse.json(
        { message: 'No lead found for this email' },
        { status: 200 }
      )
    }

    const leadId = leads[0].id
    console.log('Found lead:', leadId)

    // Update the lead to mark booking as completed
    const { error: updateError } = await supabaseAdmin
      .from('baseaim_lead_form')
      .update({
        booking_completed: true,
        cal_com_booking_id: payload.uid,
        booking_completed_at: new Date().toISOString(),
      })
      .eq('id', leadId)

    if (updateError) {
      console.error('Error updating lead:', updateError)
      return NextResponse.json(
        { error: 'Failed to update lead' },
        { status: 500 }
      )
    }

    console.log('✅ Successfully marked booking as completed for lead:', leadId)

    return NextResponse.json(
      {
        message: 'Booking tracked successfully',
        leadId,
        bookingUid: payload.uid,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
