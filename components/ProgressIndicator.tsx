'use client'

interface ProgressIndicatorProps {
  currentStep: number
  totalSteps: number
  stepLabels?: string[]
}

export default function ProgressIndicator({
  currentStep,
  totalSteps,
  stepLabels = []
}: ProgressIndicatorProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="w-full mb-8">
      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-bright-blue to-azure-blue transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-r from-transparent to-white opacity-30 animate-pulse"></div>
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1
          const isCompleted = stepNumber < currentStep
          const isCurrent = stepNumber === currentStep
          const label = stepLabels[index] || `Step ${stepNumber}`

          return (
            <div key={stepNumber} className="flex flex-col items-center flex-1">
              {/* Circle Indicator */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-inter font-semibold text-sm mb-2 transition-all duration-300 ${
                  isCompleted
                    ? 'bg-bright-blue text-white shadow-lg scale-110'
                    : isCurrent
                    ? 'bg-bright-blue text-white ring-4 ring-blue-100 shadow-lg scale-110'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>

              {/* Step Label */}
              <span
                className={`text-xs font-inter text-center transition-colors duration-300 ${
                  isCompleted || isCurrent
                    ? 'text-deep-blue font-semibold'
                    : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </div>
          )
        })}
      </div>

      {/* Step Counter */}
      <div className="text-center mt-4">
        <span className="text-sm font-inter text-gray-600">
          Step <span className="font-bold text-bright-blue">{currentStep}</span> of {totalSteps}
        </span>
      </div>
    </div>
  )
}
