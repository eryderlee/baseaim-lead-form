import GradientBG from '@/components/GradientBG'
import Header from '@/components/Header'
import LeadFormShort from '@/components/LeadFormShort'

export default function VideoLayout() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient */}
      <section className="relative min-h-screen overflow-hidden">
        <GradientBG />

        <div className="relative z-10">
          <Header />

          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-5xl mx-auto">
              {/* Hero Content */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">
                  See{' '}
                  <span className="font-dm-serif italic bg-gradient-to-r from-deep-blue via-bright-blue to-azure-blue bg-clip-text text-transparent">
                    AI Automation
                  </span>{' '}
                  in Action
                </h1>
                <p className="text-lg md:text-xl font-inter text-gray-700 max-w-3xl mx-auto">
                  Watch how businesses like yours are saving 20+ hours weekly with custom AI automation
                </p>
              </div>

              {/* Video Container */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 mb-12">
                {/* Video Player Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-deep-blue to-bright-blue rounded-xl overflow-hidden mb-6">
                  {/* Replace this with your actual video embed */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-24 h-24 mx-auto mb-4 opacity-90" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                      <p className="text-xl font-poppins font-semibold mb-2">AI Automation Demo Video</p>
                      <p className="text-sm text-blue-100 max-w-md mx-auto">
                        See how we automated a professional services firm's lead qualification process, saving 25 hours per week
                      </p>
                    </div>
                  </div>

                  {/* Actual Video Embed - Replace with your video URL */}
                  {/* <iframe
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    title="AI Automation Demo"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe> */}
                </div>

                {/* Video Highlights */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-ice-blue rounded-lg">
                    <div className="w-10 h-10 bg-bright-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-jetbrains font-bold text-deep-blue">2-4 weeks</div>
                      <div className="text-xs text-gray-600 font-inter">Implementation</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-ice-blue rounded-lg">
                    <div className="w-10 h-10 bg-bright-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-jetbrains font-bold text-deep-blue">95%</div>
                      <div className="text-xs text-gray-600 font-inter">Automation Rate</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-ice-blue rounded-lg">
                    <div className="w-10 h-10 bg-bright-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-jetbrains font-bold text-deep-blue">40-60%</div>
                      <div className="text-xs text-gray-600 font-inter">Cost Reduction</div>
                    </div>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-4">
                    What You'll Learn:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-inter">How AI agents handle complex tasks like lead qualification and appointment scheduling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-inter">Real examples of workflow automation saving businesses 20+ hours per week</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-inter">How seamless integration works with your existing CRM and tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-inter">The 4-step process from discovery to full automation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Form Section */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-3">
                    Ready to Automate Your Business?
                  </h2>
                  <p className="text-base md:text-lg font-inter text-gray-600">
                    Book your free consultation to discover how much time and money you can save
                  </p>
                </div>

                <div className="max-w-xl mx-auto">
                  <LeadFormShort />
                </div>

                {/* Trust Signals Below Form */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-inter text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Free 30-min consultation</span>
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
                      <span>Custom automation roadmap</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Logos */}
              <div className="mt-12 text-center">
                <p className="text-sm font-inter text-gray-600 mb-6">
                  Trusted by 200+ businesses across Australia
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                  <div className="text-gray-400 font-poppins font-semibold text-lg">OpenAI</div>
                  <div className="text-gray-400 font-poppins font-semibold text-lg">Claude</div>
                  <div className="text-gray-400 font-poppins font-semibold text-lg">ElevenLabs</div>
                  <div className="text-gray-400 font-poppins font-semibold text-lg">Make.com</div>
                  <div className="text-gray-400 font-poppins font-semibold text-lg">n8n</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-16 text-center">
                <p className="text-sm font-inter text-gray-700 mb-2">
                  Questions? Call our AI assistant 24/7 at{' '}
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
