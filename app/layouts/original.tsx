import GradientBG from '@/components/GradientBG'
import Header from '@/components/Header'
import LeadForm from '@/components/LeadForm'

export default function OriginalLayout() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Gradient Background */}
        <GradientBG />

        {/* Content Layer */}
        <div className="relative z-10">
          <Header />

          <div className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-6xl mx-auto">
              {/* Hero Content */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">
                  Transform Your Business with{' '}
                  <span className="font-dm-serif italic bg-gradient-to-r from-deep-blue via-bright-blue to-azure-blue bg-clip-text text-transparent">
                    AI Automation
                  </span>
                </h1>
                <p className="text-lg md:text-xl font-inter text-gray-700 max-w-3xl mx-auto mb-8">
                  Partner with Baseaim to deploy intelligent AI agents, automate workflows, and scale your operations. Join businesses achieving{' '}
                  <span className="font-semibold text-deep-blue">95% automation</span> and{' '}
                  <span className="font-semibold text-deep-blue">300% growth</span> in appointments.
                </p>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-inter font-medium text-gray-900">24/7 AI Support</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-inter font-medium text-gray-900">2-4 Week Setup</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-inter font-medium text-gray-900">Melbourne Based</span>
                  </div>
                </div>
              </div>

              {/* Lead Form Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-3">
                    Ready to Automate Your Business?
                  </h2>
                  <p className="text-base md:text-lg font-inter text-gray-600">
                    Fill out the form below and we'll contact you within 24 hours to discuss your AI automation needs.
                  </p>
                </div>

                <LeadForm />
              </div>

              {/* Additional Info Section */}
              <div className="mt-16 text-center">
                <p className="text-sm font-inter text-gray-700 mb-4">
                  Prefer to call? Reach our AI assistant 24/7 at{' '}
                  <a href="tel:+61468047436" className="font-semibold text-bright-blue hover:text-deep-blue transition-colors">
                    0468 047 436
                  </a>
                </p>
                <p className="text-sm font-inter text-gray-600">
                  Or email us at{' '}
                  <a href="mailto:contact@baseaim.com" className="font-semibold text-bright-blue hover:text-deep-blue transition-colors">
                    contact@baseaim.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 text-center mb-12">
              What AI Automation Can Do for Your Business
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-bright-blue to-azure-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-600 font-inter">Easily expand operations by automating more processes as you grow</p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-deep-blue to-bright-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">Always On</h3>
                <p className="text-gray-600 font-inter">24/7 automation with no breaks or downtime for consistent performance</p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-azure-blue to-sky-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">Seamless Integration</h3>
                <p className="text-gray-600 font-inter">Connects with your existing tools, CRM, and workflows effortlessly</p>
              </div>

              {/* Benefit 4 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">Efficiency at Scale</h3>
                <p className="text-gray-600 font-inter">Reduce repetitive admin and wasted hours by 40-60% in first 3 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-inter text-gray-400 text-sm">
              © {new Date().getFullYear()} Baseaim. All rights reserved. |{' '}
              <a href="https://baseaim.co" target="_blank" rel="noopener noreferrer" className="text-bright-blue hover:text-azure-blue transition-colors">
                Visit baseaim.co
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
