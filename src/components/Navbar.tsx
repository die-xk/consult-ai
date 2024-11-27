'use client'

import Link from 'next/link'
import Logo from './Logo'
import { useAuth } from '@/context/AuthContext'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const [showModal, setShowModal] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  if (user && pathname.startsWith('/dashboard')) {
    return null
  }

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
            <Link href="/" className="flex items-center space-x-2">
              <Logo variant="white" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-300 hover:text-white text-sm">
                Features
              </Link>
              <Link href="/use-case" className="text-gray-300 hover:text-white text-sm">
                Use Case
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white text-sm">
                Pricing
              </Link>
              <Link href="/blogs" className="text-gray-300 hover:text-white text-sm">
                Blogs
              </Link>
            </div>
            
            {/* Desktop Auth Buttons - Right */}
            <div className="hidden md:flex items-center space-x-4">
              {!user ? (
                <>
                  <Link 
                    href="/login" 
                    className="text-gray-300 hover:text-white text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup" 
                    className="bg-[#2B3B37] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#344440]"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link 
                    href="/dashboard" 
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => setShowModal(true)}
                    className="text-gray-300 hover:text-white text-sm font-medium"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden pt-4 pb-3 border-t border-[#7CFF9B]/10 mt-4">
              <div className="space-y-4">
                <Link 
                  href="/features" 
                  className="block text-gray-300 hover:text-white text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="/use-case" 
                  className="block text-gray-300 hover:text-white text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Use Case
                </Link>
                <Link 
                  href="/pricing" 
                  className="block text-gray-300 hover:text-white text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/blogs" 
                  className="block text-gray-300 hover:text-white text-sm py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blogs
                </Link>
                
                <div className="pt-4 border-t border-[#7CFF9B]/10">
                  {!user ? (
                    <div className="space-y-4">
                      <Link 
                        href="/login" 
                        className="block text-gray-300 hover:text-white text-sm py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link 
                        href="/signup" 
                        className="block bg-[#2B3B37] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#344440] text-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Link 
                        href="/dashboard" 
                        className="block text-gray-300 hover:text-white text-sm py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button 
                        onClick={() => {
                          setShowModal(true)
                          setIsMobileMenuOpen(false)
                        }}
                        className="block text-gray-300 hover:text-white text-sm py-2 w-full text-left"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

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
  )
}

export default Navbar 