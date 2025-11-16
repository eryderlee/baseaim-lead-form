import GradientBG from '@/components/GradientBG'
import Header from '@/components/Header'
import SuperQuickForm from '@/components/SuperQuickForm'

export default function SuperQuickLayout() {
  return (
    <main>
      {/* Section with Gradient Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Gradient Background */}
        <GradientBG />

        {/* Content Layer */}
        <div className="relative z-10">
          <Header />

          <div className="container mx-auto px-4 py-8">
            {/* Super Quick Form */}
            <SuperQuickForm />
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
