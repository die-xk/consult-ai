'use client'

import { 
  ChartBarIcon, 
  CogIcon, 
  UserGroupIcon, 
  ShieldCheckIcon, 
  CloudArrowUpIcon, 
  BoltIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Advanced Analytics',
    description: 'Get deep insights into your data with our powerful analytics tools. Track performance, monitor trends, and make data-driven decisions.',
    icon: ChartBarIcon,
    color: 'from-emerald-400 to-cyan-400',
  },
  {
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team in real-time. Share resources, communicate effectively, and boost productivity.',
    icon: UserGroupIcon,
    color: 'from-purple-400 to-pink-400',
  },
  {
    title: 'Enterprise Security',
    description: 'Rest easy knowing your data is protected with enterprise-grade security features and compliance standards.',
    icon: ShieldCheckIcon,
    color: 'from-blue-400 to-indigo-400',
  },
  {
    title: 'Cloud Storage',
    description: 'Access your files anywhere with secure cloud storage. Automatic backups and version control included.',
    icon: CloudArrowUpIcon,
    color: 'from-orange-400 to-pink-400',
  },
  {
    title: 'API Integration',
    description: 'Connect with your favorite tools through our robust API. Custom integrations and webhooks available.',
    icon: CogIcon,
    color: 'from-green-400 to-teal-400',
  },
  {
    title: 'High Performance',
    description: 'Experience lightning-fast performance with our optimized infrastructure and efficient processing.',
    icon: BoltIcon,
    color: 'from-yellow-400 to-orange-400',
  },
]

const FeaturePage = () => {
  return (
    <div className="min-h-screen bg-[#1B2B27]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Your Success
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to manage, analyze, and grow your business in one powerful platform.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-[#2B3B37] rounded-2xl p-8 hover:bg-[#344440] transition-all duration-300"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${feature.color} rounded-2xl transition-opacity duration-300`} />
              <div className="relative">
                <div className="h-12 w-12 mb-6 rounded-lg bg-[#1B2B27] flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-[#7CFF9B]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-[#2B3B37] rounded-2xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 mb-8">
                Join thousands of businesses that trust our platform for their needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/signup"
                  className="bg-[#7CFF9B] text-[#1B2B27] px-8 py-3 rounded-full font-medium hover:bg-[#6ee889] transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="/contact"
                  className="bg-[#344440] text-white px-8 py-3 rounded-full font-medium hover:bg-[#3f524d] transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#7CFF9B]/5 to-transparent" />
        </div>
      </div>
    </div>
  )
}

export default FeaturePage