'use client'

import { useState, useMemo, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { IoArrowBack, IoDownloadOutline, IoShareSocialOutline, IoDocumentTextOutline, IoInformationCircleOutline } from 'react-icons/io5';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import useSWR from 'swr';
import clsx from 'clsx';

interface Proposal {
  id: string;
  content: string;
  prompt: string;
  created_at: string;
  user_id: string;
}

type Tab = 'proposal' | 'prompt';

export default function ViewProposal() {
  const [activeTab, setActiveTab] = useState<Tab>('proposal');
  const { id } = useParams();
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch proposal');
    return res.json();
  };
  
  const { data: proposal, error, isLoading } = useSWR<Proposal>(
    `/api/proposals/${id}`,
    fetcher
  );

  const memoizedContent = useMemo(() => {
    return <ReactMarkdown>{proposal?.content}</ReactMarkdown>;
  }, [proposal?.content]);

  const handleShare = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
  }, []);

  const handleExport = useCallback(() => {
    window.print();
  }, []);

  if (isLoading) {
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
    <div className="py-6 flex flex-col items-center min-h-screen bg-[#1B2B27]">
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
              onClick={handleExport}
              className="flex items-center gap-2 px-4 py-2 bg-[#2B3B37] text-white rounded-lg hover:bg-[#344440] transition-colors duration-200"
            >
              <IoDownloadOutline className="w-5 h-5" />
              Export
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-[#7CFF9B] text-[#1B2B27] rounded-lg hover:bg-[#6ee889] transition-colors duration-200"
            >
              <IoShareSocialOutline className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('proposal')}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200',
              activeTab === 'proposal'
                ? 'bg-[#7CFF9B] text-[#1B2B27]'
                : 'bg-[#2B3B37] text-white hover:bg-[#344440]'
            )}
          >
            <IoDocumentTextOutline className="w-5 h-5" />
            Proposal
          </button>
          <button
            onClick={() => setActiveTab('prompt')}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200',
              activeTab === 'prompt'
                ? 'bg-[#7CFF9B] text-[#1B2B27]'
                : 'bg-[#2B3B37] text-white hover:bg-[#344440]'
            )}
          >
            <IoInformationCircleOutline className="w-5 h-5" />
            Original Prompt
          </button>
        </div>

        {/* Content */}
        <div className="bg-[#2B3B37] rounded-xl shadow-2xl p-8">
          {activeTab === 'proposal' ? (
            <div className="prose prose-invert max-w-none">
              {memoizedContent}
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-white">Original Prompt</h2>
              <div className="p-4 bg-[#1B2B27] rounded-lg">
                <p className="text-gray-300">{proposal.prompt}</p>
              </div>
              <div className="flex items-start gap-2 mt-4 text-sm text-gray-400">
                <IoInformationCircleOutline className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>This prompt was used to generate the proposal using our AI system.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 