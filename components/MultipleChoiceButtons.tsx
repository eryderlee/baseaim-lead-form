'use client'

interface MultipleChoiceButtonsProps {
  options: string[]
  onSelect: (option: string) => void
  selectedValue?: string
}

export default function MultipleChoiceButtons({
  options,
  onSelect,
  selectedValue
}: MultipleChoiceButtonsProps) {
  return (
    <div className="space-y-3 mt-6 md:mt-8">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className={`w-full px-4 md:px-6 py-3 md:py-4 text-left rounded-lg md:rounded-xl border-2 font-inter font-medium text-base md:text-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] ${
            selectedValue === option
              ? 'border-bright-blue bg-bright-blue text-white shadow-lg'
              : 'border-gray-200 bg-white text-gray-900 hover:border-bright-blue'
          }`}
          style={{ minHeight: '56px' }}
        >
          <div className="flex items-center justify-between gap-3">
            <span className="leading-tight">{option}</span>
            {selectedValue === option && (
              <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
