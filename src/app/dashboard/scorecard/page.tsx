'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  IoArrowBack, 
  IoDownloadOutline, 
  IoRefreshOutline,
  IoPencilOutline,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoWarningOutline
} from 'react-icons/io5';
import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ScoreCategory {
  name: string;
  score: number;
  analysis: string;
  suggestions: string[];
}

export default function ProposalScorecard() {
  const [loading, setLoading] = useState(true);
  const [overallScore, setOverallScore] = useState(85);
  const [categories, setCategories] = useState<ScoreCategory[]>([
    {
      name: 'Content Quality',
      score: 88,
      analysis: 'Strong content structure with clear value propositions.',
      suggestions: ['Add more industry-specific examples', 'Expand the methodology section']
    },
    {
      name: 'Personalization',
      score: 78,
      analysis: 'Good client focus but could be more tailored.',
      suggestions: ['Include client-specific case studies', 'Reference client\'s industry challenges']
    },
    {
      name: 'Clarity and Grammar',
      score: 92,
      analysis: 'Excellent writing quality with consistent tone.',
      suggestions: ['Review technical terms for clarity', 'Consider simplifying complex sentences']
    },
    {
      name: 'Structure and Flow',
      score: 85,
      analysis: 'Well-organized with logical progression.',
      suggestions: ['Add transition paragraphs between sections', 'Consider reorganizing the benefits section']
    },
    {
      name: 'Client Focus',
      score: 82,
      analysis: 'Good alignment with client needs.',
      suggestions: ['Strengthen ROI calculations', 'Add more client-specific benefits']
    }
  ]);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#7CFF9B';
    if (score >= 60) return '#3B82F6';
    if (score >= 40) return '#F59E0B';
    return '#EF4444';
  };

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
    <div className="min-h-screen bg-[#1B2B27] p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard/editor"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <IoArrowBack className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white">Proposal Scorecard</h1>
              <p className="text-gray-400">Project Proposal for Client XYZ</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="p-2 text-gray-300 hover:text-white">
              <IoDownloadOutline className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-300 hover:text-white">
              <IoRefreshOutline className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Overall Score */}
      <div className="bg-[#2B3B37] rounded-lg p-6 mb-8">
        <div className="flex items-center gap-8">
          <div className="w-40 h-40">
            <CircularProgressbar
              value={overallScore}
              text={`${overallScore}%`}
              styles={buildStyles({
                pathColor: getScoreColor(overallScore),
                textColor: '#FFFFFF',
                trailColor: '#1B2B27',
              })}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Overall Score</h2>
            <p className="text-gray-400 mb-4">
              Your proposal is performing well with room for improvement in specific areas.
            </p>
            <Link
              href="/dashboard/editor"
              className="inline-flex items-center gap-2 bg-[#7CFF9B] text-[#1B2B27] px-4 py-2 rounded-lg hover:bg-[#6ee889] transition-colors"
            >
              <IoPencilOutline className="w-5 h-5" />
              Edit Proposal
            </Link>
          </div>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {categories.map((category) => (
          <div key={category.name} className="bg-[#2B3B37] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">{category.name}</h3>
              <span 
                className="text-2xl font-bold"
                style={{ color: getScoreColor(category.score) }}
              >
                {category.score}%
              </span>
            </div>
            <div className="w-full bg-[#1B2B27] rounded-full h-2 mb-4">
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  width: `${category.score}%`,
                  backgroundColor: getScoreColor(category.score)
                }}
              />
            </div>
            <p className="text-gray-400 mb-4">{category.analysis}</p>
            <div className="space-y-2">
              {category.suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <IoWarningOutline className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                  <span>{suggestion}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <div className="bg-[#2B3B37] rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Key Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-medium mb-3 flex items-center gap-2">
              <IoCheckmarkCircleOutline className="text-[#7CFF9B] w-5 h-5" />
              Strengths
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Professional tone and well-structured content</li>
              <li>• Strong technical specifications</li>
              <li>• Clear project timeline</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-3 flex items-center gap-2">
              <IoCloseCircleOutline className="text-red-400 w-5 h-5" />
              Areas for Improvement
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Add more client-specific examples</li>
              <li>• Strengthen the budget justification</li>
              <li>• Include more industry statistics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 