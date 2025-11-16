import GradientBG from '@/components/GradientBG'
import Header from '@/components/Header'
import MultiStepForm from '@/components/MultiStepForm'

export default function HybridLayout() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ice-blue to-white">
        <GradientBG />

        <div className="relative z-10">
          <Header />

          {/* Hero Content */}
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">
                Losing 20+ Hours Weekly to{' '}
                <span className="font-dm-serif italic bg-gradient-to-r from-deep-blue via-bright-blue to-azure-blue bg-clip-text text-transparent">
                  Manual Processes?
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-inter text-gray-700 mb-8 max-w-3xl mx-auto">
                Transform your business with custom AI automation that eliminates repetitive work, scales effortlessly, and delivers measurable ROI—without replacing your team.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-inter font-medium text-gray-900">95% Automation Rate</span>
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
                  <span className="text-sm font-inter font-medium text-gray-900">40-60% Cost Reduction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Two-Column Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Left Column: Long-Form Content (2/3 width) */}
            <div className="lg:col-span-2 space-y-16">
              {/* The Problem Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-6">
                  The Hidden Cost of Manual Work
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 font-inter mb-4">
                    Your team spends <span className="font-bold text-deep-blue">20+ hours every week</span> on tasks that could be automated:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red text-xl flex-shrink-0">✗</span>
                      <span className="text-gray-700">Manual data entry between systems, copying information that should flow automatically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red text-xl flex-shrink-0">✗</span>
                      <span className="text-gray-700">Following up leads slowly, losing opportunities to faster competitors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red text-xl flex-shrink-0">✗</span>
                      <span className="text-gray-700">Generating reports manually when data should update in real-time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-red text-xl flex-shrink-0">✗</span>
                      <span className="text-gray-700">Answering the same customer questions repeatedly instead of handling complex issues</span>
                    </li>
                  </ul>
                  <p className="text-lg text-gray-700 font-inter">
                    Meanwhile, your competitors are automating these processes and scaling faster. <span className="font-bold">The cost of inaction compounds daily.</span>
                  </p>
                </div>
              </div>

              {/* The Solution Section */}
              <div className="bg-gradient-to-br from-ice-blue to-white p-8 rounded-2xl border border-sky-tint">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-6">
                  How Baseaim Transforms Your Operations
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-bright-blue to-azure-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">Discover & Analyze</h3>
                      <p className="text-gray-700 font-inter">We map your current processes, identify bottlenecks, and calculate exactly how much time and money AI automation can save you.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-deep-blue to-bright-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">AI Blueprint</h3>
                      <p className="text-gray-700 font-inter">We design a custom automation roadmap prioritized by ROI, showing you exactly what to automate first for maximum impact.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-azure-blue to-sky-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">Build & Implement</h3>
                      <p className="text-gray-700 font-inter">We develop and deploy AI agents that integrate seamlessly with your existing tools—typically ready in 2-4 weeks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-orange rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-2">Refine & Optimize</h3>
                      <p className="text-gray-700 font-inter">We continuously monitor and improve your AI systems, ensuring they adapt as your business evolves.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-8">
                  Real Results from Real Businesses
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-bright-blue transition-colors">
                    <div className="text-4xl font-jetbrains font-bold text-bright-blue mb-2">95%</div>
                    <p className="text-lg font-poppins font-semibold text-gray-900 mb-2">Call Automation Rate</p>
                    <p className="text-gray-600 font-inter text-sm">Professional services firm automated initial client consultations, freeing their team for high-value work</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-bright-blue transition-colors">
                    <div className="text-4xl font-jetbrains font-bold text-bright-blue mb-2">300%</div>
                    <p className="text-lg font-poppins font-semibold text-gray-900 mb-2">Increase in Appointments</p>
                    <p className="text-gray-600 font-inter text-sm">Healthcare provider tripled bookings with 24/7 AI scheduling and instant confirmation system</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-bright-blue transition-colors">
                    <div className="text-4xl font-jetbrains font-bold text-bright-blue mb-2">45%</div>
                    <p className="text-lg font-poppins font-semibold text-gray-900 mb-2">Better Lead Conversion</p>
                    <p className="text-gray-600 font-inter text-sm">E-commerce business increased sales with instant lead follow-up and personalized automation</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-bright-blue transition-colors">
                    <div className="text-4xl font-jetbrains font-bold text-bright-blue mb-2">60%</div>
                    <p className="text-lg font-poppins font-semibold text-gray-900 mb-2">Time Savings (First 3 Months)</p>
                    <p className="text-gray-600 font-inter text-sm">Marketing agency eliminated 25+ hours weekly of report generation and data entry tasks</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-8">
                  Common Questions
                </h2>
                <div className="space-y-4">
                  <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-bright-blue transition-colors group">
                    <summary className="font-poppins font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      How long does implementation take?
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-gray-700 font-inter">Most clients see their first automation live within 2-4 weeks. We start with quick wins that deliver immediate ROI, then expand to more complex workflows over time.</p>
                  </details>

                  <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-bright-blue transition-colors group">
                    <summary className="font-poppins font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      Will AI replace my team?
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-gray-700 font-inter">No. We automate repetitive tasks so your team can focus on high-value work that requires human creativity, strategy, and relationship-building. Our clients typically redeploy saved time to growth activities.</p>
                  </details>

                  <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-bright-blue transition-colors group">
                    <summary className="font-poppins font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      What if our processes change?
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-gray-700 font-inter">Our AI systems are designed to adapt. We include ongoing optimization and updates to ensure your automation evolves with your business. Plus, you'll have direct access to our team for modifications.</p>
                  </details>

                  <details className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-bright-blue transition-colors group">
                    <summary className="font-poppins font-semibold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                      How much does it cost?
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-gray-700 font-inter">Investment varies based on scope, but most clients see positive ROI within 3-6 months. During your free consultation, we'll calculate your specific time/cost savings and provide transparent pricing tailored to your needs.</p>
                  </details>
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-deep-blue to-bright-blue p-8 md:p-12 rounded-2xl text-white text-center">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                  Ready to Reclaim 20+ Hours Every Week?
                </h2>
                <p className="text-lg md:text-xl mb-6 text-blue-50">
                  Book your free consultation to discover exactly how much time and money you can save with AI automation.
                </p>
                <div className="flex justify-center">
                  <a href="#form" className="inline-block px-8 py-4 bg-white text-bright-blue font-inter font-bold text-lg rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                    Book Free Consultation →
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Form (1/3 width) */}
            <div className="lg:col-span-1">
              <div className="sticky top-8" id="form">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-gray-100">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-poppins font-bold text-gray-900 mb-2">
                      Get Your Free AI Audit
                    </h3>
                    <p className="text-sm text-gray-600 font-inter">
                      Discover your automation opportunities
                    </p>
                  </div>

                  <MultiStepForm />
                </div>
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
