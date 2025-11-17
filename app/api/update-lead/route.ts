import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

interface UpdateLeadRequest {
  id: string
  phone?: string
  booking_completed?: boolean
  cal_com_booking_id?: string
}

interface UpdateLeadResponse {
  success: boolean
  message: string
  data?: {
    id: string
  }
  error?: string
}

export async function PATCH(request: NextRequest) {
  try {
    console.log('=== Lead Update Started ===')

    const body: UpdateLeadRequest = await request.json()
    console.log('Update request:', { id: body.id, fields: Object.keys(body) })

    if (!body.id) {
      return NextResponse.json<UpdateLeadResponse>(
        {
          success: false,
          message: 'Lead ID is required',
        },
        { status: 400 }
      )
    }

    // Build the update object dynamically based on what fields are provided
    const updateData: Record<string, any> = {}

    if (body.phone !== undefined) {
      updateData.phone = body.phone
    }

    if (body.booking_completed !== undefined) {
      updateData.booking_completed = body.booking_completed
    }

    if (body.cal_com_booking_id !== undefined) {
      updateData.cal_com_booking_id = body.cal_com_booking_id
    }

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json<UpdateLeadResponse>(
        {
          success: false,
          message: 'No fields to update',
        },
        { status: 400 }
      )
    }

    console.log('Updating lead with data:', updateData)

    // Update the lead in Supabase
    const { data, error } = await supabaseAdmin
      .from('baseaim_lead_form')
      .update(updateData)
      .eq('id', body.id)
      .select('id')
      .single()

    if (error) {
      console.error('❌ Supabase Error:', error)
      return NextResponse.json<UpdateLeadResponse>(
        {
          success: false,
          message: 'Failed to update lead',
          error: error.message,
        },
        { status: 500 }
      )
    }

    console.log('✅ Successfully updated lead:', data.id)

    return NextResponse.json<UpdateLeadResponse>(
      {
        success: true,
        message: 'Lead updated successfully',
        data: {
          id: data.id,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json<UpdateLeadResponse>(
      {
        success: false,
        message: 'An unexpected error occurred',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
