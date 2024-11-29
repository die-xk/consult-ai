import { HiDocumentText } from "react-icons/hi";
import { BsRobot } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
import Link from 'next/link';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Enter Client Details",
      description: "Basic project information and client needs",
      icon: <HiDocumentText className="w-8 h-8 text-[#7CFF9B] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: "02",
      title: "AI Does the Heavy Lifting",
      description: "Our AI crafts a professional proposal using proven frameworks",
      icon: <BsRobot className="w-8 h-8 text-[#7CFF9B] group-hover:scale-110 transition-transform duration-300" />
    },
    {
      number: "03",
      title: "Review & Send",
      description: "Make quick edits and send to your client in minutes",
      icon: <IoSendSharp className="w-8 h-8 text-[#7CFF9B] group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  return (
    <div className="bg-[#1B2B27] py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It <span className="text-[#7CFF9B]">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create winning proposals in minutes, not hours. Our AI-powered platform streamlines 
            the entire process from start to finish.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-[#2B3B37] rounded-xl p-6 hover:bg-[#2F413C] transition-all duration-300"
            >
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-[#7CFF9B]/20" />
              )}
              
              {/* Step Number */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1B2B27] rounded-lg p-3">
                  {step.icon}
                </div>
                <span className="text-[#7CFF9B] text-xl font-bold opacity-50">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-white text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">
                {step.description}
              </p>

              {/* Features for Step 2 */}
              {index === 1 && (
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-[#7CFF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Value-based pricing suggestions</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-[#7CFF9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Industry-specific language</span>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/get-started"
            className="inline-flex items-center gap-2 bg-[#7CFF9B] text-[#1B2B27] px-6 py-3 rounded-lg hover:bg-[#6ee889] transition-all duration-300 font-medium"
          >
            Try It Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
