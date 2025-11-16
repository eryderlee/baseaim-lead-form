'use client'

import { ReactNode } from 'react'

interface QuestionPageProps {
  children: ReactNode
  questionNumber?: number
  totalQuestions?: number
  onBack?: () => void
  showBack?: boolean
}

export default function QuestionPage({
  children,
  questionNumber,
  totalQuestions,
  onBack,
  showBack = true
}: QuestionPageProps) {
  return (
    <div className="flex justify-center px-4 animate-fadeIn">
      <div className="w-full max-w-2xl">
        {/* Page indicator */}
        {questionNumber && totalQuestions && (
          <div className="text-center" style={{ marginBottom: '8px' }}>
            <span className="text-xs md:text-sm font-inter text-gray-500">
              Question {questionNumber} of {totalQuestions}
            </span>
          </div>
        )}

        {/* Main content */}
        <div className="text-center">
          {children}
        </div>

        {/* Back button */}
        {showBack && onBack && (
          <div className="mt-8 md:mt-12 text-center">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-inter font-medium transition-colors text-sm md:text-base py-2 px-4 active:scale-95"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          </div>
        )}
      </div>

      {/* Fade-in animation */}
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
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
