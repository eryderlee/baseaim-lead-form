'use client'

import { useState, useEffect } from 'react'

export type LayoutType = 'original' | 'hybrid' | 'multi-step' | 'video' | 'super-quick'

interface LayoutSwitcherProps {
  currentLayout: LayoutType
  onLayoutChange: (layout: LayoutType) => void
}

export default function LayoutSwitcher({ currentLayout, onLayoutChange }: LayoutSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const layouts = [
    {
      id: 'original' as LayoutType,
      name: 'Original',
      description: 'Current design with inline form',
      icon: '📄'
    },
    {
      id: 'hybrid' as LayoutType,
      name: 'Hybrid Authority',
      description: 'Long-form content + sticky form',
      icon: '📊',
      recommended: true
    },
    {
      id: 'multi-step' as LayoutType,
      name: 'Quick Qualifier',
      description: 'Multi-step progressive form',
      icon: '📋',
      recommended: true
    },
    {
      id: 'video' as LayoutType,
      name: 'Video Showcase',
      description: 'Demo video + simple form',
      icon: '🎥'
    },
    {
      id: 'super-quick' as LayoutType,
      name: 'Super Quick',
      description: 'One question per page, conversational',
      icon: '⚡',
      recommended: true
    }
  ]

  return (
    <>
      {/* Hidden Toggle Button - only visible when you know where to click */}
      <div className="fixed bottom-0 left-0 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-2 h-2 opacity-0 hover:opacity-10 transition-opacity"
          aria-label="Switch Layout"
        >
          <svg
            className={`w-2 h-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Layout Selection Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fadeIn"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden animate-slideUp">
            {/* Header */}
            <div className="bg-gradient-to-r from-bright-blue to-azure-blue px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-poppins font-bold text-white">
                    Layout Selector
                  </h3>
                  <p className="text-sm text-blue-50 font-inter">
                    Compare different designs
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Layout Options */}
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="space-y-2">
                {layouts.map((layout) => (
                  <button
                    key={layout.id}
                    onClick={() => {
                      onLayoutChange(layout.id)
                      setIsOpen(false)
                    }}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md ${
                      currentLayout === layout.id
                        ? 'border-bright-blue bg-blue-50 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className="text-3xl flex-shrink-0">{layout.icon}</div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-poppins font-semibold text-gray-900">
                            {layout.name}
                          </h4>
                          {layout.recommended && (
                            <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-inter font-medium rounded">
                              Recommended
                            </span>
                          )}
                          {currentLayout === layout.id && (
                            <svg className="w-5 h-5 text-bright-blue ml-auto flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 font-inter mt-1">
                          {layout.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer Info */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-600 font-inter">
                💡 <span className="font-semibold">Tip:</span> Test different layouts to see which converts better for your traffic
              </p>
            </div>
          </div>
        </>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
