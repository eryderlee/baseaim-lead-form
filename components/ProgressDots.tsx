'use client'

interface ProgressDotsProps {
  currentPage: number
  totalPages: number
}

export default function ProgressDots({ currentPage, totalPages }: ProgressDotsProps) {
  return (
    <div className="flex items-center justify-center gap-1.5 md:gap-2" style={{ marginBottom: '8px' }}>
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1
        const isCompleted = pageNumber < currentPage
        const isCurrent = pageNumber === currentPage

        return (
          <div
            key={pageNumber}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              isCompleted
                ? 'w-6 md:w-8 bg-bright-blue'
                : isCurrent
                ? 'w-6 md:w-8 bg-bright-blue'
                : 'w-1.5 md:w-2 bg-gray-300'
            }`}
          />
        )
      })}
    </div>
  )
}
