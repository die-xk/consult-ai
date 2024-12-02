'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  IoArrowBack, 
  IoSaveOutline,
  IoExitOutline,
  IoSendOutline,
  IoMenuOutline,
  IoBulbOutline,
  IoStatsChartOutline,
  IoBookmarkOutline,
  IoExpandOutline
} from 'react-icons/io5';
import dynamic from 'next/dynamic';

// Dynamic import of the editor to avoid SSR issues
const Editor = dynamic(() => import('@/components/Editor'), { 
  ssr: false,
  loading: () => <div className="animate-pulse h-96 bg-[#2B3B37] rounded-lg" />
});

export default function ProposalEditor() {
  const [title, setTitle] = useState('Untitled Proposal');
  const [client, setClient] = useState('');
  const [content, setContent] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isFullscreen, setFullscreen] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [score, setScore] = useState(85);
  const router = useRouter();

  // Auto-save functionality
  useEffect(() => {
    const saveTimer = setTimeout(() => {
      handleSave();
    }, 2000);

    return () => clearTimeout(saveTimer);
  }, [content, title, client]);

  const handleSave = async () => {
    try {
      // API call to save the proposal
      setLastSaved(new Date());
    } catch (error) {
      console.error('Failed to save:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#1B2B27]">
      {/* Header */}
      <header className="border-b border-[#7CFF9B]/10 bg-[#2B3B37]">
        <div className="px-6 py-4">
          {/* Navigation */}
          <div className="flex items-center gap-4 mb-4">
            <Link 
              href="/dashboard/proposals"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IoArrowBack className="w-6 h-6" />
            </Link>
            <div className="text-sm text-gray-400">
              My Proposals / {title}
            </div>
          </div>

          {/* Title Row */}
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-2">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent text-2xl font-bold text-white focus:outline-none"
                placeholder="Enter proposal title..."
              />
              <input
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                className="w-full bg-transparent text-gray-400 focus:outline-none"
                placeholder="Enter client name..."
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs bg-gray-500/20 text-gray-300">
                Draft
              </span>
              {lastSaved && (
                <span className="text-sm text-gray-400">
                  Saved {lastSaved.toLocaleTimeString()}
                </span>
              )}
              <button className="p-2 text-gray-300 hover:text-white">
                <IoSaveOutline className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-300 hover:text-white">
                <IoExitOutline className="w-5 h-5" />
              </button>
              <button className="bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors flex items-center gap-2">
                <IoSendOutline className="w-5 h-5" />
                <span>Submit</span>
              </button>
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2 text-gray-300 hover:text-white"
              >
                <IoMenuOutline className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Editor */}
        <main className={`flex-1 p-6 transition-all ${isSidebarOpen ? 'mr-80' : ''}`}>
          <div className="max-w-4xl mx-auto relative">
            

            <Editor 
              content={content} 
              onChange={setContent}
              placeholder="Start writing your proposal..."
            />
          </div>
        </main>

        {/* Sidebar */}
        <aside className={`fixed right-0 top-0 h-screen w-80 bg-[#2B3B37] border-l border-[#7CFF9B]/10 transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-4 border-b border-[#7CFF9B]/10 flex justify-between items-center">
            <h2 className="text-white font-semibold">Proposal Tools</h2>
            <button 
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              className="text-gray-400 hover:text-white"
            >
              <IoMenuOutline className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 space-y-6">
            {/* AI Suggestions */}
            <div>
              <h3 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                <IoBulbOutline className="text-[#7CFF9B]" />
                AI Suggestions
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-[#1B2B27] text-gray-300 text-sm hover:bg-[#243530]">
                  Add a case study relevant to the client's industry
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-[#1B2B27] text-gray-300 text-sm hover:bg-[#243530]">
                  Expand on the benefits section
                </button>
              </div>
            </div>

            {/* Scorecard Preview */}
            <div>
              <h3 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                <IoStatsChartOutline className="text-[#7CFF9B]" />
                Proposal Score
              </h3>
              <div className="bg-[#1B2B27] p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm">Current Score</span>
                  <span className="text-[#7CFF9B] font-semibold">{score}%</span>
                </div>
                <div className="w-full bg-[#243530] rounded-full h-2">
                  <div 
                    className="bg-[#7CFF9B] h-2 rounded-full transition-all"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Saved Snippets */}
            <div>
              <h3 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                <IoBookmarkOutline className="text-[#7CFF9B]" />
                Saved Snippets
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-[#1B2B27] text-gray-300 text-sm hover:bg-[#243530]">
                  Company Introduction
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-[#1B2B27] text-gray-300 text-sm hover:bg-[#243530]">
                  Project Timeline Template
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Toolbar */}
        
    </div>
  );
} 