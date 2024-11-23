'use client'

import { useState } from 'react'

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to generate a proposal?",
      answer: "Most proposals are generated in under 5 minutes."
    },
    {
      question: "Can I customize the generated proposals?",
      answer: "Yes, you have full editing capability after AI generation."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "No, our interface is designed to be intuitive and user-friendly."
    },
    {
      question: "Will the proposals look professional?",
      answer: "Yes, all proposals follow industry best practices and are fully branded."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="bg-white py-24" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B2B27] mb-4">
            Common{' '}
            <span className="relative">
              Questions
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#7CFF9B]"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our AI proposal generator
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-[#1B2B27]">
                  {faq.question}
                </span>
                <span className="ml-6">
                  <svg
                    className={`w-6 h-6 text-[#1B2B27] transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`
                  transition-all duration-200 ease-in-out
                  ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                  overflow-hidden
                `}
              >
                <div className="p-6 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <div className="flex items-center justify-center gap-4">
            <a 
              href="mailto:support@example.com"
              className="inline-flex items-center gap-2 text-[#1B2B27] hover:text-[#2B3B37] font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="#demo"
              className="inline-flex items-center gap-2 text-[#1B2B27] hover:text-[#2B3B37] font-medium"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ 