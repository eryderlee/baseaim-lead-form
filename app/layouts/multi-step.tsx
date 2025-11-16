import GradientBG from '@/components/GradientBG'
import Header from '@/components/Header'
import MultiStepForm from '@/components/MultiStepForm'

export default function MultiStepLayout() {
  return (
    <main className="min-h-screen">
      {/* Section with Gradient Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Gradient Background */}
        <GradientBG />

        {/* Content Layer */}
        <div className="relative z-10">
          <Header />

          <div className="container mx-auto px-4 py-12 md:py-16">
            {/* Brief Header */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-900 mb-4">
                Start Your{' '}
                <span className="font-dm-serif italic bg-gradient-to-r from-deep-blue via-bright-blue to-azure-blue bg-clip-text text-transparent">
                  AI Automation
                </span>{' '}
                Journey
              </h1>
              <p className="text-lg font-inter text-gray-700">
                Answer a few quick questions and book your free consultation in minutes
              </p>
            </div>

            {/* Multi-Step Form */}
            <MultiStepForm />
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-6">
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
