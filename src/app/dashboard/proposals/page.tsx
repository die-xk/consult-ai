'use client'

import { useState, useEffect } from 'react';
import { IoArrowBack, IoEyeOutline } from 'react-icons/io5';
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
    const fetchProposals = async () => {
      try {
        const response = await fetch('/api/proposals');
        if (!response.ok) {
          throw new Error('Failed to fetch proposals');
        }
        const data = await response.json();
        setProposals(data);
      } catch (err) {
        setError('Failed to load proposals');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, []);

  if (loading) {
    return (
      <div className="py-6 flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-[#2B3B37] rounded w-1/4"></div>
            <div className="h-96 bg-[#2B3B37] rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/dashboard"
            className="text-2xl font-bold text-white"
          >
            <IoArrowBack />
          </Link>
          <h1 className="text-2xl font-bold text-white">Proposals</h1>
        </div>
        {/* Proposals List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {proposals.map(proposal => (
            <div key={proposal.id} className="bg-[#2B3B37] rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-medium text-white mb-2 line-clamp-2">{proposal.prompt}</h2>
                <p className="text-sm text-gray-400 mb-4">
                  {new Date(proposal.created_at).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => router.push(`/dashboard/proposals/${proposal.id}`)}
                className="w-full px-4 py-2 bg-[#1B2B27] text-[#7CFF9B] rounded-lg hover:bg-[#344440] transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <IoEyeOutline className="w-5 h-5" />
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 