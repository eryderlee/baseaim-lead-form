'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  company?: string
  message?: string
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/
    return phoneRegex.test(phone)
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

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your needs'
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
      // Submit to API
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          form_type: 'original',
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed')
      }

      setSubmitStatus('success')

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
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
            Email Address <span className="text-brand-red">*</span>
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

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-inter font-medium text-gray-900 mb-2">
            Phone Number <span className="text-brand-red">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
              errors.phone ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="+61 468 047 436"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 font-inter">{errors.phone}</p>
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

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-inter font-medium text-gray-900 mb-2">
            How can we help? <span className="text-brand-red">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="Tell us about your business needs and how AI automation can help..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 font-inter">{errors.message}</p>
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
                Sending...
              </span>
            ) : (
              'Get Started with AI Automation'
            )}
          </button>
        </div>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border-2 border-green-500 rounded-lg">
            <p className="text-green-800 font-inter font-medium text-center">
              🎉 Thank you! We'll be in touch within 24 hours.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg">
            <p className="text-red-800 font-inter font-medium text-center">
              Something went wrong. Please try again or email us at contact@baseaim.com
            </p>
          </div>
        )}

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 font-inter text-center">
          By submitting this form, you agree to our privacy policy. We'll never share your information.
        </p>
      </form>
    </div>
  )
}
