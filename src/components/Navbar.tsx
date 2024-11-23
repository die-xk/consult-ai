'use client'

import Link from 'next/link'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className="bg-[#1B2B27] py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo variant="white" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link href="/platform" className="text-gray-300 hover:text-white text-sm">
                Platform
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-white text-sm">
                Resources
              </Link>
              <Link href="/company" className="text-gray-300 hover:text-white text-sm">
                Company
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white text-sm">
                Pricing
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-300 hover:text-white text-sm">
                Login
              </Link>
              <Link 
                href="/signup" 
                className="bg-[#2B3B37] text-white px-4 py-2 rounded-md text-sm hover:bg-[#344440]"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 