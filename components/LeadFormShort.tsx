'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  company: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
}

export default function LeadFormShort() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - Replace with your actual API endpoint or Cal.com redirect
      await new Promise(resolve => setTimeout(resolve, 1500))

      console.log('Form submitted:', formData)

      // Redirect to Cal.com with pre-filled data
      const calcomUrl = new URL('https://cal.com/team/baseaim/ai-consultation')
      calcomUrl.searchParams.append('name', formData.name)
      calcomUrl.searchParams.append('email', formData.email)
      calcomUrl.searchParams.append('notes', `Company: ${formData.company}`)

      window.open(calcomUrl.toString(), '_blank')

      setSubmitStatus('success')

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        company: ''
      })
      setErrors({})

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)

    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-inter font-medium text-gray-900 mb-2">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
              errors.name ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 font-inter">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-900 mb-2">
            Business Email <span className="text-brand-red">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 font-inter">{errors.email}</p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-inter font-medium text-gray-900 mb-2">
            Company Name <span className="text-brand-red">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
              errors.company ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="Your Company Pty Ltd"
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-600 font-inter">{errors.company}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-8 py-4 bg-bright-blue text-white font-inter font-semibold text-lg rounded-lg transition-all duration-200 ${
              isSubmitting
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-deep-blue hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Book Free Consultation'
            )}
          </button>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
            <p className="text-green-800 font-inter font-medium text-center">
              🎉 Opening booking calendar in a new window...
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg">
            <p className="text-red-800 font-inter font-medium text-center">
              Something went wrong. Please try again or call us at 0468 047 436
            </p>
          </div>
        )}

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 font-inter text-center">
          By submitting, you agree to our privacy policy. We'll never share your information.
        </p>
      </form>
    </div>
  )
}
