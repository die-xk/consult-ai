'use client'

import { useAuth } from '@/context/AuthContext';
import { 
  IoCreateOutline, 
  IoEyeOutline, 
  IoGridOutline,
  IoPeopleOutline,
  IoFolderOutline,
  IoSettingsOutline 
} from 'react-icons/io5';
import Link from 'next/link';

export default function Dashboard() {
  const { user } = useAuth();

  const actionButtons = [
    {
      title: 'Create',
      description: 'Create a new proposal',
      icon: <IoCreateOutline className="w-8 h-8" />,
      href: '/dashboard/create/select',
      disabled: false
    },
    {
      title: 'View',
      description: 'View your proposals',
      icon: <IoEyeOutline className="w-8 h-8" />,
      href: '/dashboard/proposals',
      disabled: false
    },
    {
      title: 'Templates',
      description: 'Manage your templates',
      icon: <IoGridOutline className="w-8 h-8" />,
      href: '/dashboard/templates',
      disabled: false
    },
    {
      title: 'Team',
      description: 'Coming soon',
      icon: <IoPeopleOutline className="w-8 h-8" />,
      href: '/dashboard/team',
      disabled: true
    },
    {
      title: 'Workspace',
      description: 'Coming soon',
      icon: <IoFolderOutline className="w-8 h-8" />,
      href: '/dashboard/workspace',
      disabled: true
    },
    {
      title: 'Settings',
      description: 'Manage your account',
      icon: <IoSettingsOutline className="w-8 h-8" />,
      href: '/dashboard/settings',
      disabled: false
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-[#1B2B27] via-[#243530] to-[#1B2B27] min-h-screen overflow-hidden">
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #7CFF9B 1px, transparent 1px),
            linear-gradient(to bottom, #7CFF9B 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(124, 255, 155, 0.1) 0%, rgba(27, 43, 39, 0.2) 50%, rgba(27, 43, 39, 0.95) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative py-12">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Welcome back, {user?.displayName || user?.email}!
            </h1>
            <p className="text-gray-300 text-lg">
              What would you like to do today?
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {actionButtons.map((button, index) => (
              <Link
                key={index}
                href={button.disabled ? '#' : button.href}
                className={`block ${button.disabled ? 'cursor-not-allowed opacity-50' : 'hover:transform hover:-translate-y-1 transition-all duration-200'}`}
              >
                <div className="bg-[#2B3B37]/80 backdrop-blur-sm border border-[#7CFF9B]/10 overflow-hidden rounded-xl shadow-lg">
                  <div className="px-6 py-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-[#1B2B27] rounded-xl p-4">
                        <div className="text-[#7CFF9B]">
                          {button.icon}
                        </div>
                      </div>
                      <div className="ml-5">
                        <dt className="text-xl font-semibold text-white">
                          {button.title}
                        </dt>
                        <dd className="mt-2 text-gray-300">
                          {button.description}
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 