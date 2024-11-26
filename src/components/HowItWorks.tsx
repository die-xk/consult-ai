import Image from 'next/image'
import Link from 'next/link'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Client Details",
      description: "Basic project information and client needs",
      image: "/step1.png" // You'll need to add appropriate images
    },
    {
      number: "02",
      title: "AI Does the Heavy Lifting",
      description: "Our AI crafts a professional proposal using proven frameworks",
      image: "/step2.png"
    },
    {
      number: "03",
      title: "Review & Send",
      description: "Make quick edits and send to your client in minutes",
      image: "/step3.png"
    }
  ]

  return (
    <div className="bg-[#1B2B27] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-white mb-4">
            3 Steps to{' '}
            <span className="text-[#7CFF9B] relative">
              Perfect Proposals
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#7CFF9B]"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our streamlined process takes the complexity out of proposal creation. 
            No more staring at blank pages or spending hours formatting documents. 
            Just follow these simple steps and get ready to impress your clients.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              {/* Content Side */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[#7CFF9B] text-7xl font-bold opacity-50">
                      {step.number}
                    </span>
                    <div className="h-[2px] w-12 bg-[#7CFF9B] opacity-50"></div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>

                  {/* Optional: Step-specific features */}
                  <div className="pt-6">
                    <ul className="space-y-3">
                      {index === 1 && (
                        <>
                          <li className="flex items-center gap-2 text-gray-300">
                            <svg className="w-5 h-5 text-[#7CFF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Value-based pricing suggestions</span>
                          </li>
                          <li className="flex items-center gap-2 text-gray-300">
                            <svg className="w-5 h-5 text-[#7CFF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Industry-specific language</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <div className="bg-[#2B3B37] rounded-2xl p-6 shadow-lg">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link 
            href="/get-started"
            className="inline-flex items-center gap-2 bg-[#7CFF9B] text-[#1B2B27] px-8 py-4 rounded-xl hover:bg-[#6ee889] transition-all duration-300 font-medium"
          >
            Start Creating Proposals
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
