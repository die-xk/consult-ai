'use client'

import Link from 'next/link';
import Logo from './Logo';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

const DashboardNavbar = () => {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await logout()
      setShowModal(false)
      setIsMobileMenuOpen(false)
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <>
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              <div className="w-8 h-8 rounded-full bg-[#7CFF9B] flex items-center justify-center">
                <span className="text-[#1B2B27] font-medium">
                  {user?.displayName?.charAt(0) || user?.email?.charAt(0)}
                </span>
              </div>
            </button>

            {/* Desktop Profile Link */}
            <Link
              href="/dashboard/settings"
              className="hidden md:flex items-center space-x-3 text-white hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-[#7CFF9B] flex items-center justify-center">
                <span className="text-[#1B2B27] font-medium">
                  {user?.displayName?.charAt(0) || user?.email?.charAt(0)}
                </span>
              </div>
              <span className="text-sm">{user?.displayName || user?.email}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex flex-col items-center justify-center">
          <div className="space-y-4 text-center">
            <Link 
              href="/dashboard" 
              className="block text-gray-300 hover:text-white text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Overview
            </Link>
            <Link 
              href="/dashboard/proposals" 
              className="block text-gray-300 hover:text-white text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Proposals
            </Link>
            <Link 
              href="/dashboard/templates" 
              className="block text-gray-300 hover:text-white text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              href="/dashboard/analytics" 
              className="block text-gray-300 hover:text-white text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Analytics
            </Link>
            
            <div className="pt-4 border-t border-[#7CFF9B]/10">
              <div className="space-y-4">
                <Link 
                  href="/dashboard/settings" 
                  className="block text-gray-300 hover:text-white text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Settings
                </Link>
                <button 
                  onClick={() => {
                    setShowModal(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block text-gray-300 hover:text-white text-lg py-2 w-full text-center"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign Out Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#1B2B27] border border-[#7CFF9B]/10 rounded-xl p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Confirm Sign Out
            </h3>
            <p className="text-gray-300 mb-6">
              Are you sure you want to sign out?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSignOut}
                className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-md hover:bg-[#6ee889] transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardNavbar; 