'use client'

import { useState } from 'react';
import { IoSearch, IoPlayCircleOutline, IoChevronDown } from 'react-icons/io5';

interface FAQ {
  question: string;
  answer: string;
}

export default function HelpAndTutorials() {
  const [search, setSearch] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: 'How do I edit a proposal after submission?',
      answer: 'To edit a proposal after submission, navigate to the Proposals page, select the proposal, and click "Edit".'
    },
    {
      question: 'What does my proposal score mean?',
      answer: 'Your proposal score reflects the quality and effectiveness of your proposal based on several criteria.'
    },
    {
      question: 'Can I use this tool without Google Docs?',
      answer: 'Yes, you can use the tool without Google Docs, but integrating it provides additional features.'
    }
  ]);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleFAQToggle = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#1B2B27] p-6">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Help & Tutorials</h1>
        <p className="text-gray-400">
          Get the most out of ModiAI with guides, FAQs, and step-by-step tutorials.
        </p>
        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#2B3B37] text-white p-3 rounded-lg focus:outline-none"
              placeholder="Search for help articles, tutorials, or keywords..."
            />
            <IoSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Quick Links */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Most Popular Help Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="#" className="flex items-center gap-4 bg-[#2B3B37] p-4 rounded-lg hover:bg-[#243530] transition-colors">
            <IoPlayCircleOutline className="text-[#7CFF9B] w-8 h-8" />
            <span className="text-white">How to Create a Proposal</span>
          </a>
          <a href="#" className="flex items-center gap-4 bg-[#2B3B37] p-4 rounded-lg hover:bg-[#243530] transition-colors">
            <IoPlayCircleOutline className="text-[#7CFF9B] w-8 h-8" />
            <span className="text-white">Understanding the Scorecard</span>
          </a>
          <a href="#" className="flex items-center gap-4 bg-[#2B3B37] p-4 rounded-lg hover:bg-[#243530] transition-colors">
            <IoPlayCircleOutline className="text-[#7CFF9B] w-8 h-8" />
            <span className="text-white">Connecting Google Docs</span>
          </a>
        </div>
      </section>

      {/* Tutorial Videos */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Tutorial Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#2B3B37] rounded-lg p-4">
            <div className="relative">
              <img src="/thumbnails/tutorial1.jpg" alt="Tutorial 1" className="rounded-lg" />
              <IoPlayCircleOutline className="absolute inset-0 m-auto text-[#7CFF9B] w-16 h-16" />
            </div>
            <h3 className="text-white font-medium mt-4">Getting Started: Creating Your First Proposal</h3>
          </div>
          <div className="bg-[#2B3B37] rounded-lg p-4">
            <div className="relative">
              <img src="/thumbnails/tutorial2.jpg" alt="Tutorial 2" className="rounded-lg" />
              <IoPlayCircleOutline className="absolute inset-0 m-auto text-[#7CFF9B] w-16 h-16" />
            </div>
            <h3 className="text-white font-medium mt-4">How to Use the Scorecard for Better Results</h3>
          </div>
          <div className="bg-[#2B3B37] rounded-lg p-4">
            <div className="relative">
              <img src="/thumbnails/tutorial3.jpg" alt="Tutorial 3" className="rounded-lg" />
              <IoPlayCircleOutline className="absolute inset-0 m-auto text-[#7CFF9B] w-16 h-16" />
            </div>
            <h3 className="text-white font-medium mt-4">Integrating Google Docs: A Step-by-Step Guide</h3>
          </div>
        </div>
        <div className="mt-6">
          <a href="#" className="text-[#7CFF9B] hover:underline">View All Tutorials</a>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-6">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="#" className="bg-[#2B3B37] p-4 rounded-lg hover:bg-[#243530] transition-colors">
            <h3 className="text-white font-medium">Getting Started</h3>
          </a>
          <a href="#" className="bg-[#2B3B37] p-4 rounded-lg hover:bg-[#243530] transition-colors">
            <h3 className="text-white font-medium">Proposal Editor</h3>
          </a>
          <a href="#" className="bg-[#2B3B37] p-4 rounded-lg hover:bg-[#243530] transition-colors">
            <h3 className="text-white font-medium">Scorecard</h3>
          </a>
          <a href="#" className="bg-[#2B3B37] p-4 rounded-lg hover:bg-[#243530] transition-colors">
            <h3 className="text-white font-medium">Integrations</h3>
          </a>
          <a href="#" className="bg-[#2B3B37] p-4 rounded-lg hover:bg-[#243530] transition-colors">
            <h3 className="text-white font-medium">Account & Billing</h3>
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-6">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#2B3B37] rounded-lg">
              <button
                onClick={() => handleFAQToggle(index)}
                className="w-full text-left p-4 flex justify-between items-center text-white"
              >
                <span>{faq.question}</span>
                <IoChevronDown className={`w-5 h-5 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`} />
              </button>
              {expandedFAQ === index && (
                <div className="p-4 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 