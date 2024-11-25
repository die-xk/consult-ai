'use client'

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { IoArrowBack, IoDownloadOutline, IoShareSocialOutline } from 'react-icons/io5';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface Proposal {
  id: string;
  content: string;
  prompt: string;
  created_at: string;
  user_id: string;
}

export default function ViewProposal() {
  const { id } = useParams();
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProposal = async () => {
      try {
        const response = await fetch(`/api/proposals/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch proposal');
        }
        const data = await response.json();
        setProposal(data);
      } catch (err) {
        setError('Failed to load proposal');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProposal();
  }, [id]);

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

  if (error || !proposal) {
    return (
      <div className="py-6 flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
          <div className="text-red-500">{error || 'Proposal not found'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard/proposals"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <IoArrowBack className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-semibold text-white">View Proposal</h1>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 bg-[#2B3B37] text-white rounded-lg hover:bg-[#344440] transition-colors duration-200"
            >
              <IoDownloadOutline className="w-5 h-5" />
              Export
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="flex items-center gap-2 px-4 py-2 bg-[#7CFF9B] text-[#1B2B27] rounded-lg hover:bg-[#6ee889] transition-colors duration-200"
            >
              <IoShareSocialOutline className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>

        {/* Proposal Content */}
        <div className="bg-[#1B2B27] rounded-xl shadow-2xl px-8 py-10">
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{proposal.content}</ReactMarkdown>
          </div>
        </div>

        {/* Original Prompt */}
        <div className="mt-8 bg-[#2B3B37] rounded-xl p-6">
          <h2 className="text-lg font-medium text-white mb-2">Original Prompt</h2>
          <p className="text-gray-400">{proposal.prompt}</p>
        </div>
      </div>
    </div>
  );
} 