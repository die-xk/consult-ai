'use client'

import { IoArrowBack, IoDocumentTextOutline, IoFlashOutline, IoPersonOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function SelectCreationMethod() {
  const methods = [
    {
      title: 'Start from Template',
      description: 'Choose from our library of proven proposal templates',
      icon: <IoDocumentTextOutline className="w-12 h-12" />,
      href: '/dashboard/create/template',
      color: '#7CFF9B',
      disabled: false
    },
    {
      title: 'Prompt the AI',
      description: 'Let AI generate a proposal from your description',
      icon: <IoFlashOutline className="w-12 h-12" />,
      href: '/dashboard/create/prompt',
      color: '#7CFF9B',
      disabled: false
    },
    {
      title: 'Work with the AI',
      description: 'Build your proposal step by step with AI assistance',
      icon: <IoPersonOutline className="w-12 h-12" />,
      href: '/dashboard/create/guided',
      color: '#7CFF9B',
      disabled: true,
      badge: 'Coming Soon'
    }
  ];

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

        {/* Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div key={index} className={method.disabled ? 'cursor-not-allowed' : ''}>
              <Link
                href={method.disabled ? '#' : method.href}
                className={`block ${!method.disabled && 'transform hover:-translate-y-2'} transition-all duration-300`}
                onClick={(e) => method.disabled && e.preventDefault()}
              >
                <div className={`relative bg-[#1B2B27] rounded-xl shadow-2xl p-8 h-full border border-[#3C4C47] 
                  ${!method.disabled && 'hover:border-[#7CFF9B]'} 
                  ${method.disabled && 'opacity-50'} 
                  group`}
                >
                  {method.badge && (
                    <div className="absolute -top-3 right-4">
                      <span className="bg-[#7CFF9B] text-[#1B2B27] px-3 py-1 rounded-full text-sm font-medium">
                        {method.badge}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className={`bg-[#2B3B37] rounded-2xl p-6 
                      ${!method.disabled && 'group-hover:bg-[#344440]'} 
                      transition-colors duration-200`}
                    >
                      <div className="text-[#7CFF9B]">
                        {method.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-2xl font-semibold text-white mb-3 
                        ${!method.disabled && 'group-hover:text-[#7CFF9B]'} 
                        transition-colors duration-200`}
                      >
                        {method.title}
                      </h3>
                      <p className={`text-gray-400 
                        ${!method.disabled && 'group-hover:text-gray-300'} 
                        transition-colors duration-200`}
                      >
                        {method.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Help Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Not sure which to choose? Start with a template - you can always customize it later.
          </p>
        </div>
      </div>
    </div>
  );
} 