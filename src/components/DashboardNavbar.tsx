'use client'

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const DashboardNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <nav className="bg-[#1B2B27] py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard">
              <Logo variant="white" />
            </Link>
            
            {/* Dashboard Navigation */}
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

          {/* User Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 text-white focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-[#7CFF9B] flex items-center justify-center">
                <span className="text-[#1B2B27] font-medium">
                  {user?.displayName?.charAt(0) || user?.email?.charAt(0)}
                </span>
              </div>
              <span className="text-sm hidden md:block">{user?.displayName || user?.email}</span>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu">
                  <Link
                    href="/dashboard/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar; 