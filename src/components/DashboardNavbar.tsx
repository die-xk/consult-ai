'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from './Logo';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';
import { 
  IoGridOutline, 
  IoDocumentTextOutline,
  IoAddCircleOutline,
  IoPencilOutline,
  IoStatsChartOutline,
  IoExtensionPuzzleOutline,
  IoHelpCircleOutline,
  IoSettingsOutline,
  IoStarOutline
} from 'react-icons/io5';

const DashboardSidebar = () => {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navigationItems = [
    { icon: <IoGridOutline />, label: 'Dashboard Overview', href: '/dashboard' },
    { icon: <IoDocumentTextOutline />, label: 'My Proposals', href: '/dashboard/proposals' },
    { icon: <IoAddCircleOutline />, label: 'Create Proposal', href: '/dashboard/create/select' },
    { icon: <IoPencilOutline />, label: 'Proposal Editor', href: '/dashboard/editor' },
    { icon: <IoStatsChartOutline />, label: 'Scorecard', href: '/dashboard/scorecard' },
    { icon: <IoExtensionPuzzleOutline />, label: 'Integrations', href: '/dashboard/integrations' },
    { icon: <IoHelpCircleOutline />, label: 'Help & Tutorials', href: '/dashboard/help' },
    { icon: <IoSettingsOutline />, label: 'Account Settings', href: '/dashboard/settings' },
  ];

  const handleSignOut = async () => {
    try {
      await logout()
      setShowModal(false)
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <>
      <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1B2B27] border-r border-[#7CFF9B]/10 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#7CFF9B]/10">
          <Link href="/dashboard">
            <Logo variant="white" />
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-6">
          <div className="space-y-2 px-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || 
                             (item.href !== '/dashboard' && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-[#2B3B37] text-[#7CFF9B]' 
                      : 'text-gray-300 hover:text-white hover:bg-[#2B3B37]'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User Profile & CTA */}
        <div className="p-4 border-t border-[#7CFF9B]/10 space-y-4">
          {/* Upgrade/Refer CTA */}
          <button className="w-full bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors flex items-center justify-center space-x-2">
            <IoStarOutline className="text-xl" />
            <span className="font-medium">Upgrade Plan</span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 px-2">
            <div className="w-8 h-8 rounded-full bg-[#7CFF9B] flex items-center justify-center">
              <span className="text-[#1B2B27] font-medium">
                {user?.displayName?.charAt(0) || user?.email?.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">
                {user?.displayName || user?.email}
              </p>
            </div>
            <button 
              onClick={() => setShowModal(true)}
              className="text-gray-400 hover:text-white"
            >
              <IoSettingsOutline className="text-xl" />
            </button>
          </div>
        </div>
      </aside>

      {/* Sign Out Modal - Reused from original */}
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

export default DashboardSidebar; 