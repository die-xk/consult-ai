'use client'

import { useState } from 'react';
import { IoArrowBack, IoSparklesOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function PromptProposal() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedProposal, setGeneratedProposal] = useState('');
  const [error, setError] = useState('');

  const examplePrompts = [
    {
      title: "Website Redesign",
      prompt: "Create a proposal for a website redesign project for a local restaurant. Include modern design, mobile optimization, and online ordering system. Budget range $10,000-$15,000.",
      icon: "🎨"
    },
    {
      title: "Marketing Campaign",
      prompt: "Generate a digital marketing proposal for a SaaS startup looking to increase their user base. Focus on SEO, content marketing, and paid advertising. 6-month timeline.",
      icon: "📈"
    },
    {
      title: "Business Consulting",
      prompt: "Draft a consulting proposal for a retail business needing help with expansion strategy. Include market analysis, growth planning, and operational optimization. Monthly retainer basis.",
      icon: "💡"
    },
    {
      title: "Custom Software",
      prompt: "Create a proposal for developing a custom CRM system for a real estate agency. Include user management, property tracking, and client communication features. 4-month development timeline.",
      icon: "⚙️"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setGeneratedProposal('');
    
    try {
      const response = await fetch('/api/generate-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate proposal: ${response.statusText}`);
      }

      const data: { proposal: string } = await response.json();
      setGeneratedProposal(data.proposal);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate proposal. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const useExample = (promptText: string) => {
    setPrompt(promptText);
  };

  return (
    <div className="py-6 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            href="/dashboard/create/select"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <IoArrowBack className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-semibold text-white">Prompt the AI</h1>
        </div>

        {/* Main Content */}
        <div className="bg-[#1B2B27] rounded-xl shadow-2xl px-6 py-8">
          {error && (
            <div className="mb-4 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-lg font-medium mb-4">
                Describe your proposal needs
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B] transition-colors duration-200"
                placeholder="Example: Create a web development proposal for an e-commerce site with a budget of $20,000 and a timeline of 3 months..."
              />
            </div>

            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className={`w-full px-6 py-3 rounded-lg bg-[#7CFF9B] text-[#1B2B27] font-medium 
                ${loading || !prompt.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#6ee889]'} 
                transition-colors duration-200 flex items-center justify-center gap-2`}
            >
              {loading ? (
                'Generating...'
              ) : (
                <>
                  <IoSparklesOutline className="w-5 h-5" />
                  Generate Proposal
                </>
              )}
            </button>
          </form>
        </div>

        {/* Example Prompts */}
        <div className="mt-8">
          <h2 className="text-xl font-medium text-white mb-4">Example Prompts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {examplePrompts.map((example, index) => (
              <button
                key={index}
                onClick={() => useExample(example.prompt)}
                className="p-6 bg-[#2B3B37] rounded-xl border border-[#3C4C47] hover:bg-[#344440] transition-all duration-200 text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{example.icon}</div>
                  <div>
                    <h3 className="text-white font-medium group-hover:text-[#7CFF9B] transition-colors duration-200 mb-2">
                      {example.title}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      {example.prompt}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 