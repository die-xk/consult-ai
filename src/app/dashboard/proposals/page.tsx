'use client'

import { useState, useEffect } from 'react';
import { IoSearch, IoPencilOutline, IoStatsChartOutline, IoTrashOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Proposal {
  id: string;
  title: string;
  client: string;
  status: string;
  lastEdited: string;
}

export default function Proposals() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
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

  const filteredProposals = proposals.filter(proposal =>
    (proposal.title?.toLowerCase() || '').includes(search.toLowerCase()) ||
    (proposal.client?.toLowerCase() || '').includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#1B2B27]">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-[#2B3B37] rounded w-1/4"></div>
          <div className="h-96 bg-[#2B3B37] rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#1B2B27] min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-4">My Proposals</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#2B3B37] rounded-lg p-2">
            <IoSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search proposals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white ml-2 focus:outline-none"
            />
          </div>
          {/* Filters and Sorting (Placeholder) */}
          <div className="flex gap-2">
            <select className="bg-[#2B3B37] text-white rounded-lg p-2">
              <option>Status</option>
              <option>Draft</option>
              <option>Submitted</option>
              <option>Approved</option>
              <option>Pending</option>
            </select>
            <select className="bg-[#2B3B37] text-white rounded-lg p-2">
              <option>Sort by</option>
              <option>Date Created</option>
              <option>Score</option>
              <option>Last Edited</option>
            </select>
          </div>
        </div>
      </div>

      {/* Proposal List */}
      <div className="space-y-4">
        {filteredProposals.map(proposal => (
          <div key={proposal.id} className="bg-[#2B3B37] p-4 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-white">{proposal.title}</h2>
              <p className="text-sm text-gray-400">Client: {proposal.client}</p>
              <p className="text-sm text-gray-400">Last Edited: {proposal.lastEdited}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs ${
                proposal.status === 'Draft' ? 'bg-gray-500/20 text-gray-300' :
                proposal.status === 'Submitted' ? 'bg-blue-500/20 text-blue-300' :
                proposal.status === 'Approved' ? 'bg-green-500/20 text-green-300' :
                'bg-orange-500/20 text-orange-300'
              }`}>
                {proposal.status}
              </span>
              <button className="p-2 text-gray-300 hover:text-white" onClick={() => router.push(`/dashboard/proposals/${proposal.id}`)}>
                <IoPencilOutline className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white">
                <IoStatsChartOutline className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-red-400" onClick={() => handleDelete(proposal.id)}>
                <IoTrashOutline className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 