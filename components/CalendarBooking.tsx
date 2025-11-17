'use client'

interface CalendarBookingProps {
  formData?: {
    name?: string
    email?: string
    company?: string
    [key: string]: any
  }
  leadId?: string | null
}

export default function CalendarBooking({ formData, leadId }: CalendarBookingProps) {
  // Cal.com team event URL for Baseaim
  const calcomUrl = 'https://cal.com/team/baseaim/ai-consultation'

  // Pre-fill URL parameters with form data
  const getBookingUrl = () => {
    const params = new URLSearchParams()

    if (formData?.name) {
      params.append('name', formData.name)
    }
    if (formData?.email) {
      params.append('email', formData.email)
    }
    if (formData?.company) {
      params.append('guests', formData.company) // Can use guests or notes
    }

    // Add additional context as notes
    const notes = []
    if (leadId) notes.push(`Lead ID: ${leadId}`) // Include lead ID for tracking
    if (formData?.industry) notes.push(`Industry: ${formData.industry}`)
    if (formData?.companySize) notes.push(`Company Size: ${formData.companySize}`)
    if (formData?.challenge) notes.push(`Challenge: ${formData.challenge}`)
    if (formData?.timeline) notes.push(`Timeline: ${formData.timeline}`)

    if (notes.length > 0) {
      params.append('notes', notes.join(' | '))
    }

    return params.toString() ? `${calcomUrl}?${params.toString()}` : calcomUrl
  }

  return (
    <div className="w-full">
      {/* Calendar Embed Container */}
      <div className="bg-white rounded-lg shadow-sm border-2 border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-bright-blue to-azure-blue px-6 py-4">
          <h3 className="text-xl font-poppins font-bold text-white">
            Choose Your Consultation Time
          </h3>
          <p className="text-sm font-inter text-blue-50 mt-1">
            Select a time that works best for you. We'll send a confirmation email immediately.
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="p-4 bg-gray-50">
          {/* Inline Calendar Embed */}
          <div className="bg-white rounded-lg overflow-hidden" style={{ minHeight: '700px' }}>
            <iframe
              src={getBookingUrl()}
              width="100%"
              height="700"
              frameBorder="0"
              title="Book Consultation"
              className="rounded-lg"
            />
          </div>

          {/* Alternative: External Link Option */}
          <div className="mt-4 text-center">
            <p className="text-sm font-inter text-gray-600 mb-2">
              Prefer to book in a new window?
            </p>
            <a
              href={getBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-bright-blue hover:text-deep-blue font-inter font-semibold text-sm transition-colors"
            >
              Open calendar in new tab
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div className="px-6 py-4 bg-ice-blue border-t border-gray-100">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-bright-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-inter text-gray-700">
                <span className="font-semibold">What to expect:</span> Your 30-minute consultation will cover your automation needs, potential time savings, and next steps. No sales pressure—just valuable insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals Below Calendar */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm font-inter text-gray-600">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Free consultation</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>No commitment required</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Instant confirmation</span>
        </div>
      </div>
    </div>
  )
}
