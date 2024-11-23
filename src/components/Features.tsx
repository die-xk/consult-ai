const Features = () => {
  const features = [
    {
      title: "5-Minute Proposals",
      description: "What used to take hours now takes minutes. More time for client work.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15" stroke="#7CFF9B" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="9" stroke="#7CFF9B" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Professional Templates",
      description: "AI-powered templates based on winning $50k+ proposals.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V8L16 4H5C4.44772 4 4 4.44772 4 4Z" stroke="#7CFF9B" strokeWidth="2"/>
          <path d="M16 4V8H20" stroke="#7CFF9B" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Custom Branding",
      description: "Maintain your unique brand identity across all proposals.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V7Z" stroke="#7CFF9B" strokeWidth="2"/>
          <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#7CFF9B" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Value-Based Pricing",
      description: "AI helps articulate your value proposition clearly.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6M12 18V22M4 12H2M6.31412 6.31412L3.51472 3.51472M17.6859 6.31412L20.4853 3.51472M6.31412 17.6859L3.51472 20.4853M17.6859 17.6859L20.4853 20.4853M22 12H20" stroke="#7CFF9B" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ]

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-[#1B2B27] mb-6">
            Craft Winning Proposals,{' '}
            <span className="text-[#1B2B27] relative">
              Effortlessly
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#7CFF9B]"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our AI-powered platform streamlines every aspect of proposal creation, 
            helping you win more clients without the usual hassle.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-[#1B2B27] p-10 rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="space-y-6">
                <div className="bg-[#2B3B37] w-20 h-20 rounded-xl flex items-center justify-center group-hover:bg-[#344440] transition-colors duration-300 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-[#7CFF9B] text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features