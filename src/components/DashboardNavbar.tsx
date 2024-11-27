'use client'

import Link from 'next/link';
import Logo from './Logo';
import { useAuth } from '@/context/AuthContext';

const DashboardNavbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-[#1B2B27]/80 backdrop-blur-sm border-b border-[#7CFF9B]/10 py-4 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center">
            <Link href="/dashboard">
              <Logo variant="white" />
            </Link>
            
            <div className="hidden md:flex items-center ml-10 space-x-8">
              <Link href="/dashboard" className="text-gray-300 hover:text-white text-sm">
                Overview
              </Link>
              <Link href="/dashboard/proposals" className="text-gray-300 hover:text-white text-sm">
                Proposals
              </Link>
              <Link href="/dashboard/templates" className="text-gray-300 hover:text-white text-sm">
                Templates
              </Link>
              <Link href="/dashboard/analytics" className="text-gray-300 hover:text-white text-sm">
                Analytics
              </Link>
            </div>
          </div>

          {/* User Profile Link */}
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-3 text-white hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-[#7CFF9B] flex items-center justify-center">
              <span className="text-[#1B2B27] font-medium">
                {user?.displayName?.charAt(0) || user?.email?.charAt(0)}
              </span>
            </div>
            <span className="text-sm hidden md:block">{user?.displayName || user?.email}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar; 