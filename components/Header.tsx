'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="relative z-20 w-full">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="https://baseaim.co" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Image
                src="/baseaim-logo.png"
                alt="Baseaim Logo"
                width={120}
                height={35}
                priority
                className="h-auto w-auto"
              />
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="https://baseaim.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-bright-blue text-white font-inter font-medium text-sm rounded-lg hover:bg-deep-blue transition-colors duration-200"
            >
              Visit Main Site
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
