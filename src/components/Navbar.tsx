'use client'

import Link from 'next/link'
import Logo from './Logo'
import { useAuth } from '@/context/AuthContext'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const { user } = useAuth()
  const pathname = usePathname()

  if (user && pathname.startsWith('/dashboard')) {
    return null
  }

  return (
    <nav className="bg-[#1B2B27]/80 backdrop-blur-sm border-b border-[#7CFF9B]/10 py-4 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Logo variant="white" />
          </Link>

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
          
          {/* Auth Buttons - Right */}
          <div className="flex items-center space-x-4">
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
              <Link 
                href="/dashboard" 
                className="text-gray-300 hover:text-white text-sm"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 