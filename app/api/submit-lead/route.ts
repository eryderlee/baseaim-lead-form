import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { LeadFormData, LeadSubmissionResponse } from '@/types/lead'

export async function POST(request: NextRequest) {
  try {
    console.log('=== Lead Form Submission Started ===')
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)

    // Parse the request body
    const body: LeadFormData = await request.json()
    console.log('Form data received:', {
      name: body.name,
      email: body.email,
      form_type: body.form_type
    })

    // Validate required fields
    if (!body.name || !body.email) {
      return NextResponse.json<LeadSubmissionResponse>(
        {
          success: false,
          message: 'Missing required fields: name and email are required',
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json<LeadSubmissionResponse>(
        {
          success: false,
          message: 'Invalid email format',
        },
        { status: 400 }
      )
    }

    console.log('Attempting to insert into Supabase...')

    // Insert the lead into Supabase (using admin client to bypass RLS)
    const { data, error } = await supabaseAdmin
      .from('baseaim_lead_form')
      .insert([
        {
          name: body.name,
          email: body.email,
          phone: body.phone || null,
          company: body.company || 'Not provided',
          message: body.message || null,
          industry: body.industry || null,
          company_size: body.company_size || null,
          role: body.role || null,
          challenge: body.challenge || null,
          timeline: body.timeline || null,
          budget: body.budget || null,
          business_type: body.business_type || null,
          team_size: body.team_size || null,
          admin_hours: body.admin_hours || null,
          form_type: body.form_type,
          metadata: body.metadata || null,
        },
      ])
      .select('id')
      .single()

    if (error) {
      console.error('❌ Supabase Error Details:')
      console.error('  - Message:', error.message)
      console.error('  - Code:', error.code)
      console.error('  - Details:', error.details)
      console.error('  - Hint:', error.hint)
      console.error('  - Full Error:', JSON.stringify(error, null, 2))

      return NextResponse.json<LeadSubmissionResponse>(
        {
          success: false,
          message: 'Failed to save lead data',
          error: error.message,
        },
        { status: 500 }
      )
    }

    console.log('✅ Successfully inserted lead with ID:', data?.id)

    return NextResponse.json<LeadSubmissionResponse>(
      {
        success: true,
        message: 'Lead submitted successfully',
        data: {
          id: data.id,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json<LeadSubmissionResponse>(
      {
        success: false,
        message: 'An unexpected error occurred',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
