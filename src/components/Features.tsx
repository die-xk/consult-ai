import { HiCurrencyDollar } from "react-icons/hi";
import { BsClockHistory } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { IoCheckmarkCircle } from "react-icons/io5";

const Features = () => {
  const features = [
    {
      title: "Higher Close Rates",
      description: "Our users report 75% higher proposal acceptance rates with AI-optimized value propositions and pricing strategies.",
      icon: <HiCurrencyDollar className="w-8 h-8 sm:w-6 sm:h-6" />,
      metrics: "75% increase in acceptance rates"
    },
    {
      title: "Time Reclaimed",
      description: "Save 4+ hours per proposal. Focus on client relationships instead of document formatting and writing.",
      icon: <BsClockHistory className="w-8 h-8 sm:w-6 sm:h-6" />,
      metrics: "4+ hours saved per proposal"
    },
    {
      title: "Consistent Wins",
      description: "Land more high-value clients with proposals that highlight your unique value proposition every time.",
      icon: <TbTargetArrow className="w-8 h-8 sm:w-6 sm:h-6" />,
      metrics: "3x more high-value clients"
    },
    {
      title: "Professional Impact",
      description: "Deliver polished, professional proposals that position you as a premium service provider worth top rates.",
      icon: <IoCheckmarkCircle className="w-8 h-8 sm:w-6 sm:h-6" />,
      metrics: "2x higher perceived value"
    }
  ]

  return (
    <div className="bg-[#1B2B27] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your 
            <span className="text-[#7CFF9B] relative ml-2">
              Business Outcomes
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#7CFF9B]/30"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just send proposals - close deals. See how our users are transforming their business metrics with AI-powered proposals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-[#2B3B37] to-[#243530] rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:shadow-[#7CFF9B]/5 transition-all duration-300"
            >
              {/* Icon & Metrics Stack */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                {/* Icon Container */}
                <div className="bg-[#1B2B27] p-5 sm:p-4 rounded-xl text-[#7CFF9B] group-hover:scale-110 transition-transform duration-300 self-start">
                  {feature.icon}
                </div>
                {/* Metrics Badge */}
                <div className="text-[#7CFF9B] text-sm font-medium bg-[#7CFF9B]/10 px-5 py-3 sm:px-4 sm:py-2 rounded-full self-start">
                  {feature.metrics}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl sm:text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#2B3B37] to-[#243530] rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-[#7CFF9B] font-medium mb-2">Ready to transform your business?</p>
          <p className="text-white text-xl sm:text-2xl font-bold mb-6">
            Join hundreds of successful freelancers and agencies
          </p>
          <button className="bg-[#7CFF9B] text-[#1B2B27] px-8 py-3 rounded-xl font-medium hover:bg-[#6ee889] transition-colors duration-300 w-full sm:w-auto">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Features