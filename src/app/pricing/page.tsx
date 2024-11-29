'use client'

import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import PricingTable from '@/components/PricingTable'

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Regular',
      monthlyPrice: '$97',
      yearlyPrice: '$970', // $97 * 10 months (2 months free)
      period: isYearly ? '/year' : '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 team members',
        'Basic analytics',
        '24/7 support',
        '10GB storage',
        'API access',
        'Basic integrations'
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
      highlighted: false
    },
    {
      name: 'Pro',
      monthlyPrice: '$150',
      yearlyPrice: '$1,500', // $150 * 10 months (2 months free)
      period: isYearly ? '/year' : '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 team members',
        'Advanced analytics',
        'Priority 24/7 support',
        '50GB storage',
        'Full API access',
        'Advanced integrations',
        'Custom workflows'
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
      highlighted: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Enterprise analytics',
        'Dedicated support',
        'Unlimited storage',
        'Custom API solutions',
        'Enterprise integrations',
        'Custom workflows',
        'SLA guarantees'
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/contact',
      highlighted: false
    }
  ]

  return (
    <div className="min-h-screen bg-[#1B2B27] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Choose the plan that's right for your business
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#2B3B37] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7CFF9B] focus:ring-offset-2 focus:ring-offset-[#1B2B27]"
            >
              <span
                className={`${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-[#7CFF9B] transition-transform`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs text-[#7CFF9B] font-medium ml-2">
                Save 2 months
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-[#2B3B37] border-2 border-[#7CFF9B]'
                  : 'bg-[#1B2B27] border border-[#7CFF9B]/10'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl font-bold text-white">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-300 ml-1">{plan.period}</span>
                </div>
                {isYearly && plan.monthlyPrice !== 'Custom' && (
                  <p className="text-sm text-gray-400 mb-2">
                    ${parseInt(plan.monthlyPrice.replace('$', ''))} per month
                  </p>
                )}
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-[#7CFF9B] mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.buttonLink}
                className={`block text-center py-3 px-6 rounded-full font-medium transition-colors ${
                  plan.highlighted
                    ? 'bg-[#7CFF9B] text-[#1B2B27] hover:bg-[#6ee889]'
                    : 'bg-[#2B3B37] text-white hover:bg-[#344440]'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>

        {/* Add the pricing table */}
        <PricingTable />
      </div>
    </div>
  )
}

export default PricingPage 