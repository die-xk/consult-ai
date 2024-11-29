'use client'

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { IoLogOutOutline } from 'react-icons/io5';

export default function SettingsPage() {
  const { logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await logout();
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
      setShowConfirmModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B2B27] via-[#243530] to-[#1B2B27] p-4 sm:p-8">
      {/* Grid Background */}
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

      <div className="relative max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-8">Settings</h1>

        <div className="bg-[#243530]/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#7CFF9B]/10 p-6">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <IoLogOutOutline className="text-[#7CFF9B]" />
            Account
          </h2>
          <button
            onClick={() => setShowConfirmModal(true)}
            disabled={loading}
            className="bg-red-500/20 text-red-200 border border-red-500/40 px-6 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Sign Out Confirmation Modal */}
    </div>
  );
} 