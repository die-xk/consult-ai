'use client'

import { useState, useMemo, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { IoArrowBack, IoDownloadOutline, IoShareSocialOutline, IoDocumentTextOutline, IoInformationCircleOutline } from 'react-icons/io5';
import Link from 'next/link';
import useSWR from 'swr';
import clsx from 'clsx';

interface Subsection {
  title: string;
  content: string[];
}

interface Section {
  title: string;
  subsections: Subsection[];
}

interface Proposal {
  id: string;
  prompt: string;
  created_at: string;
  sections: Section[];
}

type Tab = 'proposal' | 'prompt';

export default function ViewProposal() {
  const [activeTab, setActiveTab] = useState<Tab>('proposal');
  const { id } = useParams();
  
  const { data: proposal, error, isLoading } = useSWR<Proposal>(
    `/api/proposals/${id}`,
    async (url: string) => {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch proposal');
      const data = await res.json();
      console.log('Fetched proposal data:', data);
      return data;
    }
  );

  const renderSubsection = (subsection: Subsection) => (
    <div className="mb-6">
      <h3 className="text-xl font-medium text-[#7CFF9B] mb-3">{subsection.title}</h3>
      <div className="space-y-2">
        {subsection.content.map((line, index) => (
          <p key={index} className="text-gray-300">
            {line.startsWith('-') ? (
              <span className="block ml-4">• {line.slice(1).trim()}</span>
            ) : (
              line
            )}
          </p>
        ))}
      </div>
    </div>
  );

  const renderSection = (section: Section) => (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-white mb-6 pb-2 border-b border-[#3C4C47]">
        {section.title}
      </h2>
      <div className="space-y-6">
        {section.subsections.map((subsection, index) => (
          <div key={index}>
            {renderSubsection(subsection)}
          </div>
        ))}
      </div>
    </div>
  );

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
          {activeTab === 'proposal' && proposal ? (
            <div className="space-y-12">
              {proposal.sections.map((section, index) => (
                <div key={index}>
                  {renderSection(section)}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-white">Original Prompt</h2>
              <div className="p-4 bg-[#1B2B27] rounded-lg">
                <p className="text-gray-300">{proposal?.prompt}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 