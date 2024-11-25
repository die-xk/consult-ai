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
    <div className="py-6 flex flex-col items-center">
      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
      </div>
      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="bg-[#1B2B27] rounded-lg shadow px-5 py-6 sm:px-6">
            <h2 className="text-lg font-medium text-white">
              Welcome back, {user?.displayName || user?.email}!
            </h2>
            <p className="mt-1 text-sm text-gray-300">
              What would you like to do today?
            </p>
            
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {actionButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.disabled ? '#' : button.href}
                  className={`block ${button.disabled ? 'cursor-not-allowed opacity-50' : 'hover:transform hover:-translate-y-1 transition-all duration-200'}`}
                >
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-[#2B3B37] rounded-md p-3">
                          <div className="text-[#7CFF9B]">
                            {button.icon}
                          </div>
                        </div>
                        <div className="ml-4">
                          <dt className="text-lg font-medium text-gray-900">
                            {button.title}
                          </dt>
                          <dd className="mt-1 text-sm text-gray-500">
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
    </div>
  );
} 