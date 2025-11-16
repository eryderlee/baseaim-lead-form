'use client'

import { useState, FormEvent } from 'react'
import ProgressIndicator from './ProgressIndicator'
import CalendarBooking from './CalendarBooking'

interface FormData {
  // Step 1: Contact Info
  name: string
  email: string
  company: string

  // Step 2: Company Details
  industry: string
  companySize: string
  role: string

  // Step 3: Needs Assessment
  challenge: string
  timeline: string
  budget: string
}

interface FormErrors {
  [key: string]: string
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4 // 3 form steps + 1 calendar step

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    industry: '',
    companySize: '',
    role: '',
    challenge: '',
    timeline: '',
    budget: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Name is required'
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email'
      }
      if (!formData.company.trim()) newErrors.company = 'Company name is required'
    }

    if (step === 2) {
      if (!formData.industry) newErrors.industry = 'Please select your industry'
      if (!formData.companySize) newErrors.companySize = 'Please select company size'
      if (!formData.role) newErrors.role = 'Please select your role'
    }

    if (step === 3) {
      if (!formData.challenge) newErrors.challenge = 'Please select your primary challenge'
      if (!formData.timeline) newErrors.timeline = 'Please select your timeline'
      // Budget is optional
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const stepLabels = ['Contact', 'Company', 'Needs', 'Schedule']

  return (
    <div className={`w-full mx-auto transition-all duration-500 ${currentStep === 4 ? 'max-w-6xl' : 'max-w-2xl'}`}>
      {/* Progress Indicator */}
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={totalSteps}
        stepLabels={stepLabels}
      />

      {/* Form Container */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
        {/* Step 1: Contact Information */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-2">
                Let's Get Started
              </h2>
              <p className="text-base text-gray-600 font-inter">
                Tell us a bit about yourself so we can personalize your consultation
              </p>
            </div>

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
                onBlur={() => handleBlur('name')}
                className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.name && touched.name ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="John Smith"
              />
              {errors.name && touched.name && (
                <p className="mt-1 text-sm text-red-600 font-inter">{errors.name}</p>
              )}
            </div>

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
                onBlur={() => handleBlur('email')}
                className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.email && touched.email ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="john@company.com"
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-sm text-red-600 font-inter">{errors.email}</p>
              )}
            </div>

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
                onBlur={() => handleBlur('company')}
                className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.company && touched.company ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Your Company Pty Ltd"
              />
              {errors.company && touched.company && (
                <p className="mt-1 text-sm text-red-600 font-inter">{errors.company}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Company Details */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-2">
                About Your Company
              </h2>
              <p className="text-base text-gray-600 font-inter">
                This helps us understand your specific needs and challenges
              </p>
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-inter font-medium text-gray-900 mb-2">
                Industry <span className="text-brand-red">*</span>
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                onBlur={() => handleBlur('industry')}
                className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.industry && touched.industry ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="">Select your industry</option>
                <option value="ecommerce">E-commerce & Retail</option>
                <option value="professional-services">Professional Services</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="technology">Technology & SaaS</option>
                <option value="financial">Financial Services</option>
                <option value="real-estate">Real Estate</option>
                <option value="education">Education</option>
                <option value="marketing">Marketing & Advertising</option>
                <option value="other">Other</option>
              </select>
              {errors.industry && touched.industry && (
                <p className="mt-1 text-sm text-red-600 font-inter">{errors.industry}</p>
              )}
            </div>

            <div>
              <label htmlFor="companySize" className="block text-sm font-inter font-medium text-gray-900 mb-2">
                Company Size <span className="text-brand-red">*</span>
              </label>
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                onBlur={() => handleBlur('companySize')}
                className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.companySize && touched.companySize ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-1000">201-1,000 employees</option>
                <option value="1000+">1,000+ employees</option>
              </select>
              {errors.companySize && touched.companySize && (
                <p className="mt-1 text-sm text-red-600 font-inter">{errors.companySize}</p>
              )}
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-inter font-medium text-gray-900 mb-2">
                Your Role <span className="text-brand-red">*</span>
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                onBlur={() => handleBlur('role')}
                className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.role && touched.role ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="">Select your role</option>
                <option value="owner">Business Owner / CEO</option>
                <option value="executive">C-Level Executive</option>
                <option value="director">Director / VP</option>
                <option value="manager">Manager</option>
                <option value="operations">Operations Lead</option>
                <option value="it">IT / Tech Lead</option>
                <option value="other">Other</option>
              </select>
              {errors.role && touched.role && (
                <p className="mt-1 text-sm text-red-600 font-inter">{errors.role}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Needs Assessment */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-2">
                Your Automation Needs
              </h2>
              <p className="text-base text-gray-600 font-inter">
                Help us understand your challenges so we can provide the best solution
              </p>
            </div>

            <div>
              <label htmlFor="challenge" className="block text-sm font-inter font-medium text-gray-900 mb-2">
                Primary Challenge <span className="text-brand-red">*</span>
              </label>
              <select
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                onBlur={() => handleBlur('challenge')}
                className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.challenge && touched.challenge ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="">What's your biggest challenge?</option>
                <option value="manual-data-entry">Too much manual data entry</option>
                <option value="repetitive-tasks">Repetitive tasks consuming team time</option>
                <option value="integration">Disconnected systems / Integration issues</option>
                <option value="scaling">Scaling operations efficiently</option>
                <option value="cost-reduction">Need to reduce operational costs</option>
                <option value="customer-response">Slow customer response times</option>
                <option value="lead-management">Lead follow-up and management</option>
                <option value="reporting">Time-consuming reporting / analytics</option>
                <option value="other">Other automation need</option>
              </select>
              {errors.challenge && touched.challenge && (
                <p className="mt-1 text-sm text-red-600 font-inter">{errors.challenge}</p>
              )}
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-inter font-medium text-gray-900 mb-2">
                Implementation Timeline <span className="text-brand-red">*</span>
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                onBlur={() => handleBlur('timeline')}
                className={`w-full px-4 py-3 rounded-lg border-2 font-inter text-gray-900 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all ${
                  errors.timeline && touched.timeline ? 'border-red-500' : 'border-gray-200'
                }`}
              >
                <option value="">When do you need this?</option>
                <option value="immediate">Immediately (this month)</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="exploring">Just exploring options</option>
              </select>
              {errors.timeline && touched.timeline && (
                <p className="mt-1 text-sm text-red-600 font-inter">{errors.timeline}</p>
              )}
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-inter font-medium text-gray-900 mb-2">
                Monthly Budget Range <span className="text-gray-500">(Optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 font-inter text-gray-900 focus:outline-none focus:ring-2 focus:ring-bright-blue focus:border-transparent transition-all"
              >
                <option value="">Prefer not to say</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-5k">$1,000 - $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-20k">$10,000 - $20,000</option>
                <option value="20k+">$20,000+</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 4: Calendar Booking */}
        {currentStep === 4 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-2">
                Perfect! Let's Schedule Your Call
              </h2>
              <p className="text-base text-gray-600 font-inter max-w-xl mx-auto">
                Thanks {formData.name}! Based on your needs, we'll prepare a custom automation strategy for {formData.company}. Choose a time that works for you.
              </p>
            </div>

            <CalendarBooking formData={formData} />
          </div>
        )}

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-inter font-medium rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            ) : (
              <div></div>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-8 py-3 bg-bright-blue text-white font-inter font-semibold rounded-lg hover:bg-deep-blue transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {currentStep === 3 ? 'Continue to Booking' : 'Next Step'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Back to Form Button (Only on Calendar Step) */}
        {currentStep === 4 && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-6 py-2 text-gray-600 hover:text-gray-900 font-inter font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to edit information
            </button>
          </div>
        )}
      </div>

      {/* Privacy Notice */}
      {currentStep < 4 && (
        <p className="text-xs text-gray-500 font-inter text-center mt-6">
          By continuing, you agree to our privacy policy. We'll never share your information.
        </p>
      )}

      {/* Add fadeIn animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}
