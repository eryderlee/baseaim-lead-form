'use client'

import { useState } from 'react'
import QuestionPage from './QuestionPage'
import MultipleChoiceButtons from './MultipleChoiceButtons'
import ProgressDots from './ProgressDots'
import CostRevealPage from './CostRevealPage'
import CalendarBooking from './CalendarBooking'

interface FormData {
  businessType: string
  teamSize: string
  adminHours: string
  name: string
  email: string
  phone: string
}

export default function SuperQuickForm() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 7

  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    teamSize: '',
    adminHours: '',
    name: '',
    email: '',
    phone: ''
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [leadId, setLeadId] = useState<string | null>(null) // Track the created lead ID

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  const handleBack = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleMultipleChoice = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Auto-advance after selection
    setTimeout(() => {
      handleNext()
    }, 300)
  }

  const handleNameEmailSubmit = async () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Save initial data (name, email, business info) immediately
      try {
        const response = await fetch('/api/submit-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: '', // Not collected in this form
            business_type: formData.businessType,
            team_size: formData.teamSize,
            admin_hours: formData.adminHours,
            form_type: 'super-quick',
          }),
        })

        const result = await response.json()

        if (response.ok && result.success) {
          // Store the lead ID so we can update it later with phone
          setLeadId(result.data?.id || null)
          console.log('✅ Lead saved with ID:', result.data?.id)
        } else {
          console.error('Failed to save initial lead data:', result.message)
        }
      } catch (error) {
        console.error('Error saving initial lead data:', error)
      }

      // Continue to next page regardless of save success
      handleNext()
    }
  }

  const handlePhoneSubmit = async () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // Update existing lead record with phone number
      if (leadId) {
        try {
          const response = await fetch('/api/update-lead', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: leadId,
              phone: formData.phone,
            }),
          })

          const result = await response.json()

          if (response.ok && result.success) {
            console.log('✅ Lead updated with phone number')
          } else {
            console.error('Failed to update lead with phone:', result.message)
          }
        } catch (error) {
          console.error('Error updating lead with phone:', error)
        }
      } else {
        // If we don't have a lead ID (shouldn't happen), create a new record
        console.warn('No lead ID found, creating new record')
        try {
          const response = await fetch('/api/submit-lead', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              company: '',
              business_type: formData.businessType,
              team_size: formData.teamSize,
              admin_hours: formData.adminHours,
              form_type: 'super-quick',
            }),
          })

          const result = await response.json()
          if (response.ok && result.success) {
            setLeadId(result.data?.id || null)
          }
        } catch (error) {
          console.error('Error creating lead:', error)
        }
      }

      // Continue to calendar regardless
      handleNext()
    }
  }

  return (
    <div className="w-full flex flex-col">
      {/* Progress Dots */}
      <div style={{ paddingTop: '8px' }}>
        <ProgressDots currentPage={currentPage} totalPages={totalPages} />
      </div>

      {/* Page 1: Business Type */}
      {currentPage === 1 && (
        <QuestionPage questionNumber={1} totalQuestions={totalPages} showBack={false}>
          <h1 className="text-2xl md:text-5xl font-montserrat font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            What type of business do you run?
          </h1>
          <p className="text-base md:text-xl text-gray-600 font-inter mb-2">
            This helps us personalize your automation strategy
          </p>
          <MultipleChoiceButtons
            options={[
              'Professional Services',
              'E-commerce',
              'Agency',
              'Manufacturing',
              'Technology/SaaS',
              'Other'
            ]}
            selectedValue={formData.businessType}
            onSelect={(value) => handleMultipleChoice('businessType', value)}
          />
        </QuestionPage>
      )}

      {/* Page 2: Team Size */}
      {currentPage === 2 && (
        <QuestionPage questionNumber={2} totalQuestions={totalPages} onBack={handleBack}>
          <h1 className="text-2xl md:text-5xl font-montserrat font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            How many people work in your business?
          </h1>
          <p className="text-base md:text-xl text-gray-600 font-inter mb-2">
            Understanding your team size helps us estimate potential savings
          </p>
          <MultipleChoiceButtons
            options={[
              'Just me (solo)',
              '2-5 employees',
              '6-15 employees',
              '16-50 employees',
              '50+ employees'
            ]}
            selectedValue={formData.teamSize}
            onSelect={(value) => handleMultipleChoice('teamSize', value)}
          />
        </QuestionPage>
      )}

      {/* Page 3: Admin Hours */}
      {currentPage === 3 && (
        <QuestionPage questionNumber={3} totalQuestions={totalPages} onBack={handleBack}>
          <h1 className="text-2xl md:text-5xl font-montserrat font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            How many hours per week does your team spend on manual, repetitive tasks?
          </h1>
          <p className="text-base md:text-xl text-gray-600 font-inter mb-2">
            Think: data entry, report generation, follow-ups, scheduling, etc.
          </p>
          <MultipleChoiceButtons
            options={[
              '5-10 hours/week',
              '10-20 hours/week',
              '20-30 hours/week',
              '30+ hours/week'
            ]}
            selectedValue={formData.adminHours}
            onSelect={(value) => handleMultipleChoice('adminHours', value)}
          />
        </QuestionPage>
      )}

      {/* Page 4: Cost Revelation */}
      {currentPage === 4 && (
        <QuestionPage onBack={handleBack} showBack={true}>
          <CostRevealPage
            adminHours={formData.adminHours}
            onContinue={handleNext}
          />
        </QuestionPage>
      )}

      {/* Page 5: Name and Email */}
      {currentPage === 5 && (
        <QuestionPage questionNumber={5} totalQuestions={totalPages} onBack={handleBack}>
          <h1 className="text-xl md:text-4xl font-montserrat font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Where should we send your personalized AI automation roadmap?
          </h1>
          <p className="text-sm md:text-lg text-gray-600 font-inter mb-6 md:mb-8">
            Free 30-minute consultation • No commitment • Custom ROI analysis
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            {/* Name */}
            <div className="text-left">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className={`w-full px-4 py-4 rounded-xl border-2 font-inter text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Your Name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600 font-inter">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="text-left">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className={`w-full px-4 py-4 rounded-xl border-2 font-inter text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Your Email"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600 font-inter">{errors.email}</p>}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleNameEmailSubmit}
              className="w-full px-8 py-4 bg-gradient-to-r from-bright-blue to-azure-blue text-white font-inter font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Continue →
            </button>

            <p className="text-xs text-gray-500 font-inter text-center mt-4">
              We respect your privacy. Your information is never shared.
            </p>
          </div>
        </QuestionPage>
      )}

      {/* Page 6: Phone Number */}
      {currentPage === 6 && (
        <QuestionPage questionNumber={6} totalQuestions={totalPages} onBack={handleBack}>
          <h1 className="text-xl md:text-4xl font-montserrat font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Last step! What's the best number to reach you?
          </h1>
          <p className="text-sm md:text-lg text-gray-600 font-inter mb-6 md:mb-8">
            We'll only use this to confirm your consultation time
          </p>

          <div className="space-y-4 max-w-md mx-auto">
            {/* Phone */}
            <div className="text-left">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className={`w-full px-4 py-4 rounded-xl border-2 font-inter text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Your Phone Number"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600 font-inter">{errors.phone}</p>}
            </div>

            {/* Submit Button */}
            <button
              onClick={handlePhoneSubmit}
              className="w-full px-8 py-4 bg-gradient-to-r from-bright-blue to-azure-blue text-white font-inter font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Continue to Booking →
            </button>

            <p className="text-xs text-gray-500 font-inter text-center mt-4">
              We respect your privacy. Your information is never shared.
            </p>
          </div>
        </QuestionPage>
      )}

      {/* Page 7: Calendar Booking */}
      {currentPage === 7 && (
        <QuestionPage onBack={handleBack}>
          <div className="mb-6 md:mb-8">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <svg className="w-7 h-7 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-xl md:text-4xl font-montserrat font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
              Perfect! Let's Schedule Your Free Consultation
            </h1>
            <p className="text-sm md:text-lg text-gray-600 font-inter">
              Thanks {formData.name}! Pick a time that works best for you.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <CalendarBooking formData={formData} leadId={leadId} />
          </div>
        </QuestionPage>
      )}
    </div>
  )
}
