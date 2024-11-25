'use client'

import { useState } from 'react';
import { IoArrowBack, IoDocumentTextOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function CreateProposal() {
  const [step, setStep] = useState(1);

  return (
    <div className="py-6 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/dashboard"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <IoArrowBack className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-semibold text-white">Create New Proposal</h1>
        </div>

        {/* Main Content */}
        <div className="bg-[#1B2B27] rounded-xl shadow-2xl px-6 py-8">
          {/* Progress Steps */}
          <div className="flex justify-between mb-8 px-4">
            {['Project Details', 'Scope & Timeline', 'Pricing', 'Review'].map((label, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                  ${step > index + 1 ? 'bg-[#7CFF9B] text-[#1B2B27]' : 
                    step === index + 1 ? 'bg-[#2B3B37] text-[#7CFF9B] border-2 border-[#7CFF9B]' : 
                    'bg-[#2B3B37] text-gray-400'}`}>
                  {step > index + 1 ? '✓' : index + 1}
                </div>
                <span className={`text-sm ${step === index + 1 ? 'text-[#7CFF9B]' : 'text-gray-400'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="space-y-6 px-4">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Client Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B] transition-colors duration-200"
                    placeholder="Enter client name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B] transition-colors duration-200"
                    placeholder="Enter project title"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Project Overview
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B] transition-colors duration-200"
                    placeholder="Describe the project overview"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                className={`px-6 py-3 rounded-lg text-white border border-[#3C4C47] hover:bg-[#2B3B37] transition-colors duration-200
                  ${step === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={step === 1}
              >
                Previous
              </button>
              <button
                onClick={() => setStep(Math.min(4, step + 1))}
                className="px-6 py-3 rounded-lg bg-[#7CFF9B] text-[#1B2B27] font-medium hover:bg-[#6ee889] transition-colors duration-200"
              >
                {step === 4 ? 'Create Proposal' : 'Next'}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Templates */}
        <div className="mt-8">
          <h2 className="text-xl font-medium text-white mb-4">Quick Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Web Development', 'Digital Marketing', 'Consulting'].map((template, index) => (
              <button
                key={index}
                className="p-6 bg-[#2B3B37] rounded-xl border border-[#3C4C47] hover:bg-[#344440] transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#1B2B27] p-3 rounded-lg group-hover:bg-[#2B3B37] transition-colors duration-200">
                    <IoDocumentTextOutline className="w-6 h-6 text-[#7CFF9B]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium group-hover:text-[#7CFF9B] transition-colors duration-200">
                      {template}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      Use template
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 