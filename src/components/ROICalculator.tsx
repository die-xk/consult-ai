'use client'

import { useState, useEffect } from 'react'

const ROICalculator = () => {
  const [values, setValues] = useState({
    hoursPerProposal: 4, // Default values
    proposalsPerMonth: 5,
    hourlyRate: 100
  })

  const [results, setResults] = useState({
    hoursSaved: 0,
    moneySaved: 0,
    additionalClients: 0
  })

  // Calculate results whenever inputs change
  useEffect(() => {
    const timeWithAI = 0.5 // Assuming 30 minutes per proposal with AI
    const hoursSaved = (values.hoursPerProposal - timeWithAI) * values.proposalsPerMonth
    const moneySaved = hoursSaved * values.hourlyRate
    const additionalClients = Math.floor(hoursSaved / values.hoursPerProposal)

    setResults({
      hoursSaved,
      moneySaved,
      additionalClients
    })
  }, [values])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }))
  }

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#1B2B27] mb-4">
            Calculate Your{' '}
            <span className="relative">
              Time Savings
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#7CFF9B]"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            See how much time and money you could save by automating your proposal process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Input Section */}
          <div className="bg-[#1B2B27] p-8 rounded-2xl shadow-xl">
            <div className="space-y-6">
              {/* Hours per Proposal */}
              <div className="space-y-2">
                <label className="text-[#7CFF9B] block">
                  Average hours spent per proposal
                </label>
                <input
                  type="number"
                  name="hoursPerProposal"
                  value={values.hoursPerProposal}
                  onChange={handleInputChange}
                  className="w-full bg-[#2B3B37] text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#7CFF9B] focus:outline-none"
                  min="0"
                  step="0.5"
                />
              </div>

              {/* Proposals per Month */}
              <div className="space-y-2">
                <label className="text-[#7CFF9B] block">
                  Number of proposals per month
                </label>
                <input
                  type="number"
                  name="proposalsPerMonth"
                  value={values.proposalsPerMonth}
                  onChange={handleInputChange}
                  className="w-full bg-[#2B3B37] text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#7CFF9B] focus:outline-none"
                  min="0"
                />
              </div>

              {/* Hourly Rate */}
              <div className="space-y-2">
                <label className="text-[#7CFF9B] block">
                  Your hourly rate ($)
                </label>
                <input
                  type="number"
                  name="hourlyRate"
                  value={values.hourlyRate}
                  onChange={handleInputChange}
                  className="w-full bg-[#2B3B37] text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#7CFF9B] focus:outline-none"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-8">
            {/* Hours Saved */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-[#1B2B27] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#7CFF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">Hours saved per month</p>
                  <p className="text-3xl font-bold text-[#1B2B27]">
                    {results.hoursSaved.toFixed(1)} hours
                  </p>
                </div>
              </div>
            </div>

            {/* Money Saved */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-[#1B2B27] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#7CFF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">Money saved per month</p>
                  <p className="text-3xl font-bold text-[#1B2B27]">
                    ${results.moneySaved.toFixed(0)}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Clients */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-[#1B2B27] p-3 rounded-lg">
                  <svg className="w-6 h-6 text-[#7CFF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">Additional clients possible</p>
                  <p className="text-3xl font-bold text-[#1B2B27]">
                    {results.additionalClients} clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Start saving time and money today
          </p>
          <button className="bg-[#1B2B27] text-white px-8 py-4 rounded-xl hover:bg-[#2B3B37] transition-all duration-300">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  )
}

export default ROICalculator 