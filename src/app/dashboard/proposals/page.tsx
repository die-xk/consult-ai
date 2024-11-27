'use client'

import { useState, useEffect } from 'react';
import { IoArrowBack, IoEyeOutline, IoTrashOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Proposal {
  id: string;
  prompt: string;
  created_at: string;
}

export default function Proposals() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchProposals();
  }, []);

  const fetchProposals = async () => {
    try {
      const response = await fetch('/api/proposals');
      if (!response.ok) throw new Error('Failed to fetch proposals');
      const data = await response.json();
      setProposals(data);
    } catch (err) {
      setError('Failed to load proposals');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this proposal?')) return;
    
    try {
      const response = await fetch(`/api/proposals/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete proposal');
      setProposals(proposals.filter(p => p.id !== id));
    } catch (err) {
      console.error('Failed to delete proposal:', err);
    }
  };

  if (loading) {
    return (
      <div className="relative bg-gradient-to-br from-[#1B2B27] via-[#243530] to-[#1B2B27] min-h-screen py-6">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-[#2B3B37] rounded w-1/4"></div>
            <div className="h-96 bg-[#2B3B37] rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-[#1B2B27] via-[#243530] to-[#1B2B27] min-h-screen py-6">
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

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <IoArrowBack className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-bold text-white">Proposals</h1>
          </div>
          <Link
            href="/dashboard/create/select"
            className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-md hover:bg-[#6ee889] transition-colors duration-200"
          >
            Create New
          </Link>
        </div>

        {error ? (
          <div className="bg-red-900/50 border border-red-500 rounded-lg p-4">
            <p className="text-red-200">{error}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {proposals.map(proposal => (
              <div 
                key={proposal.id} 
                className="bg-[#2B3B37]/80 backdrop-blur-sm border border-[#7CFF9B]/10 rounded-lg p-6 hover:bg-[#2B3B37] transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-lg font-medium text-white mb-2">{proposal.prompt}</h2>
                    <p className="text-sm text-gray-400">
                      Created on {new Date(proposal.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => router.push(`/dashboard/proposals/${proposal.id}`)}
                      className="px-4 py-2 bg-[#1B2B27] text-[#7CFF9B] rounded-md hover:bg-[#344440] transition-colors duration-200 flex items-center gap-2"
                    >
                      <IoEyeOutline className="w-5 h-5" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => handleDelete(proposal.id)}
                      className="p-2 text-red-400 hover:bg-red-500/20 rounded-md transition-colors duration-200"
                      title="Delete proposal"
                    >
                      <IoTrashOutline className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 