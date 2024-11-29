'use client'

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'

interface Feature {
  name: string
  description: string
  regular: boolean
  pro: boolean
  enterprise: boolean
  category: string
}

const features: Feature[] = [
  // Core Features
  {
    name: 'Team Members',
    description: 'Number of users who can access the platform',
    regular: true,
    pro: true,
    enterprise: true,
    category: 'Core Features'
  },
  {
    name: 'Storage',
    description: 'Available storage for your files and data',
    regular: true,
    pro: true,
    enterprise: true,
    category: 'Core Features'
  },
  {
    name: 'API Access',
    description: 'Access to our API for custom integrations',
    regular: true,
    pro: true,
    enterprise: true,
    category: 'Core Features'
  },
  
  // Analytics
  {
    name: 'Basic Analytics',
    description: 'Essential metrics and reporting',
    regular: true,
    pro: true,
    enterprise: true,
    category: 'Analytics'
  },
  {
    name: 'Advanced Analytics',
    description: 'Deep insights and custom reports',
    regular: false,
    pro: true,
    enterprise: true,
    category: 'Analytics'
  },
  {
    name: 'Custom Analytics',
    description: 'Tailored analytics solutions',
    regular: false,
    pro: false,
    enterprise: true,
    category: 'Analytics'
  },

  // Support
  {
    name: 'Email Support',
    description: 'Standard email support',
    regular: true,
    pro: true,
    enterprise: true,
    category: 'Support'
  },
  {
    name: 'Priority Support',
    description: 'Faster response times and priority queue',
    regular: false,
    pro: true,
    enterprise: true,
    category: 'Support'
  },
  {
    name: 'Dedicated Support',
    description: 'Dedicated support team',
    regular: false,
    pro: false,
    enterprise: true,
    category: 'Support'
  },
]

const PricingTable = () => {
  const categories = Array.from(new Set(features.map(feature => feature.category)))

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Compare Features
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#7CFF9B]/10">
              <th className="text-left p-4 text-gray-300">Features</th>
              <th className="p-4 text-gray-300">Regular</th>
              <th className="p-4 text-gray-300">Pro</th>
              <th className="p-4 text-gray-300">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <>
                <tr key={`category-${category}`}>
                  <td 
                    colSpan={4} 
                    className="bg-[#2B3B37]/50 text-white font-medium p-4"
                  >
                    {category}
                  </td>
                </tr>
                {features
                  .filter(feature => feature.category === category)
                  .map((feature, index) => (
                    <tr 
                      key={feature.name}
                      className="border-b border-[#7CFF9B]/10 hover:bg-[#2B3B37]/30 transition-colors"
                    >
                      <td className="p-4">
                        <div className="text-white">{feature.name}</div>
                        <div className="text-gray-400 text-sm">{feature.description}</div>
                      </td>
                      <td className="p-4 text-center">
                        {feature.regular ? (
                          <CheckIcon className="h-5 w-5 text-[#7CFF9B] mx-auto" />
                        ) : (
                          <XMarkIcon className="h-5 w-5 text-gray-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.pro ? (
                          <CheckIcon className="h-5 w-5 text-[#7CFF9B] mx-auto" />
                        ) : (
                          <XMarkIcon className="h-5 w-5 text-gray-500 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.enterprise ? (
                          <CheckIcon className="h-5 w-5 text-[#7CFF9B] mx-auto" />
                        ) : (
                          <XMarkIcon className="h-5 w-5 text-gray-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PricingTable