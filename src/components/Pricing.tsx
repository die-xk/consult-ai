const Pricing = () => {
  const features = [
    "Full access to AI proposal generator",
    "Custom branding",
    "Export to PDF/Word",
    "Email support"
  ]

  return (
    <div className="bg-[#1B2B27] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Launch Special -{' '}
            <span className="text-[#7CFF9B] relative">
              Limited Time Offer
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#7CFF9B]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Be one of the first 10 users to get lifetime access at our special launch price
          </p>
        </div>

        {/* Pricing Boxes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Early Access Plan - Highlighted */}
          <div className="relative bg-gradient-to-b from-[#2B3B37] to-[#1B2B27] rounded-2xl p-1">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <div className="bg-[#2B3B37] rounded-2xl p-8 h-full">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Early Access Plan</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-[#7CFF9B]">$49</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <p className="text-[#7CFF9B] font-medium">First 10 users only</p>
                </div>

                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-[#7CFF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-[#7CFF9B] text-[#1B2B27] py-4 rounded-xl font-medium hover:bg-[#6ee889] transition-all duration-300">
                  Claim Your Early Access Spot
                </button>

                <p className="text-center text-sm text-gray-400">
                  7 spots remaining
                </p>
              </div>
            </div>
          </div>

          {/* Regular Price - Greyed out */}
          <div className="bg-gray-800/30 rounded-2xl p-8 opacity-75">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Regular Price</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">$97</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <p className="text-gray-400 font-medium">Coming soon</p>
              </div>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gray-700 text-gray-400 py-4 rounded-xl font-medium cursor-not-allowed" disabled>
                Available Soon
              </button>

              <p className="text-center text-sm text-gray-500">
                Regular pricing after launch
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All plans include a 14-day money-back guarantee
          </p>
        </div>

        {/* FAQ Link */}
        <div className="mt-8 text-center">
          <a href="#faq" className="text-[#7CFF9B] hover:text-[#6ee889] inline-flex items-center gap-2">
            Have questions? Check our FAQ
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
} 

export default Pricing
