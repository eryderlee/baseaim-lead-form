'use client'

interface CostRevealPageProps {
  adminHours: string
  onContinue: () => void
}

export default function CostRevealPage({ adminHours, onContinue }: CostRevealPageProps) {
  // Calculate actual metrics from user's answer
  const getCalculations = (hours: string) => {
    let minHours = 0
    let maxHours = 0
    let displayRange = hours

    // Parse the hour range from user's selection
    if (hours === '5-10 hours/week') {
      minHours = 5
      maxHours = 10
    } else if (hours === '10-20 hours/week') {
      minHours = 10
      maxHours = 20
    } else if (hours === '20-30 hours/week') {
      minHours = 20
      maxHours = 30
    } else if (hours === '30+ hours/week') {
      minHours = 30
      maxHours = 40
    }

    // Calculate averages
    const avgHoursPerWeek = (minHours + maxHours) / 2
    const hoursPerYear = avgHoursPerWeek * 52
    const workDaysPerYear = Math.round(hoursPerYear / 8)
    const monthsLost = (workDaysPerYear / 20).toFixed(1) // Assuming 20 work days per month

    // Calculate costs at $30/hour
    const minCost = minHours * 52 * 30
    const maxCost = maxHours * 52 * 30
    const avgCost = Math.round((minCost + maxCost) / 2)

    // Calculate potential savings (60-80%)
    const minSavings = Math.round(avgCost * 0.6)
    const maxSavings = Math.round(avgCost * 0.8)

    return {
      displayRange,
      avgHoursPerWeek: Math.round(avgHoursPerWeek),
      hoursPerYear: Math.round(hoursPerYear),
      workDaysPerYear,
      monthsLost,
      minCost,
      maxCost,
      avgCost,
      minSavings,
      maxSavings
    }
  }

  const calc = getCalculations(adminHours)

  // Format currency
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num)
  }

  return (
    <div className="text-center max-w-4xl mx-auto px-4 py-4">
      {/* Single unified card design */}
      <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-lg p-6 md:p-12">

        {/* Header */}
        <div className="mb-6 md:mb-8">
          <p className="text-xs md:text-sm font-inter font-semibold text-bright-blue uppercase tracking-wide mb-2 md:mb-3">
            Your Cost Analysis
          </p>
          <h2 className="text-xl md:text-3xl font-montserrat font-semibold text-gray-900 leading-tight">
            Based on your answer of <span className="text-bright-blue">{calc.displayRange}</span>
          </h2>
        </div>

        {/* Metrics Grid - 2 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10 max-w-2xl mx-auto">

          {/* Hours per year */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-5 md:p-6 border border-blue-100">
            <div className="text-2xl md:text-3xl font-montserrat font-bold text-bright-blue mb-1 md:mb-2">
              {calc.hoursPerYear.toLocaleString()}
            </div>
            <p className="text-xs md:text-sm font-inter text-gray-700">
              Hours lost per year
            </p>
          </div>

          {/* Work days */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-5 md:p-6 border border-blue-100">
            <div className="text-2xl md:text-3xl font-montserrat font-bold text-bright-blue mb-1 md:mb-2">
              {calc.workDaysPerYear}
            </div>
            <p className="text-xs md:text-sm font-inter text-gray-700">
              Work days wasted
            </p>
          </div>

        </div>

        {/* Annual cost highlight */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8 mb-8 border border-gray-200">
          <p className="text-sm md:text-base font-inter text-gray-700 mb-3">
            At an average rate of <span className="font-semibold text-gray-900">$30/hour</span>, this equals:
          </p>
          <div className="text-3xl md:text-5xl font-montserrat font-bold text-gray-900 mb-2">
            {formatCurrency(calc.minCost)} - {formatCurrency(calc.maxCost)}
          </div>
          <p className="text-sm md:text-base font-inter text-gray-600">
            in lost productivity annually
          </p>
        </div>

        {/* Automation opportunity */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-5 md:p-6 mb-6 md:mb-8 border border-green-200">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <h3 className="text-lg md:text-xl font-montserrat font-semibold text-gray-900">
              Automation Potential
            </h3>
          </div>
          <p className="text-sm md:text-base font-inter text-gray-700 mb-2 md:mb-3">
            We can help you recover <span className="font-semibold text-green-700">60-80%</span> of these costs through AI automation
          </p>
          <div className="text-xl md:text-2xl font-montserrat font-bold text-green-700">
            {formatCurrency(calc.minSavings)} - {formatCurrency(calc.maxSavings)} savings
          </div>
        </div>

        {/* CTA - More Prominent with Animation */}
        <div className="my-8">
          <button
            onClick={onContinue}
            className="w-full px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-bright-blue to-azure-blue text-white font-inter font-bold text-lg md:text-xl rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] animate-pulse-gentle"
          >
            Get Your Custom Automation Roadmap →
          </button>
          <p className="text-xs md:text-sm text-gray-500 font-inter text-center mt-3">
            Click to continue • No credit card required
          </p>
        </div>

        <style jsx>{`
          @keyframes pulse-gentle {
            0%, 100% {
              box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3), 0 4px 6px -4px rgba(59, 130, 246, 0.3);
            }
            50% {
              box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.5), 0 4px 6px -4px rgba(59, 130, 246, 0.5);
            }
          }
          .animate-pulse-gentle {
            animation: pulse-gentle 2s ease-in-out infinite;
          }
        `}</style>

        {/* Trust signals */}
        <div className="pt-4 md:pt-6 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm font-inter text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-bright-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-bright-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">2-4 Week Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-bright-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Dedicated Support</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
