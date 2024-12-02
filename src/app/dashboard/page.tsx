'use client'

import { useAuth } from '@/context/AuthContext';
import { 
  IoCreateOutline, 
  IoNotificationsOutline,
  IoTrendingUpOutline,
  IoTimeOutline,
  IoStarOutline,
  IoTrashOutline,
  IoPencilOutline,
  IoStatsChartOutline
} from 'react-icons/io5';
import Link from 'next/link';

export default function Dashboard() {
  const { user } = useAuth();

  // Mock data - replace with real data from your backend
  const recentProposals = [
    { id: 1, title: 'Web Development Project', status: 'Draft', score: 85, date: '2024-03-15' },
    { id: 2, title: 'Marketing Campaign', status: 'Sent', score: 92, date: '2024-03-14' },
    { id: 3, title: 'Consulting Services', status: 'In Review', score: 78, date: '2024-03-13' },
  ];

  const tips = [
    "Include specific metrics and KPIs in your proposals for higher success rates",
    "Personalize your proposal's executive summary for each client",
    "Regular updates to proposal templates can increase win rates by 25%"
  ];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Hi {user?.displayName?.split(' ')[0] || 'there'}, ready to create the perfect proposal?
          </h1>
          <p className="text-gray-300 mt-1">Let's make something amazing today.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-300 hover:text-white">
            <IoNotificationsOutline className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#7CFF9B] rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { icon: <IoCreateOutline />, label: 'Proposals This Week', value: '3' },
          { icon: <IoTrendingUpOutline />, label: 'Average Score', value: '85%' },
          { icon: <IoTimeOutline />, label: 'Upcoming Deadlines', value: '2' },
        ].map((stat, index) => (
          <div key={index} className="bg-[#2B3B37]/80 backdrop-blur-sm rounded-xl p-6 border border-[#7CFF9B]/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#1B2B27] rounded-lg text-[#7CFF9B]">
                {stat.icon}
              </div>
              <div>
                <p className="text-gray-300">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Proposals */}
        <div className="lg:col-span-2 bg-[#2B3B37]/80 backdrop-blur-sm rounded-xl p-6 border border-[#7CFF9B]/10">
          <h2 className="text-xl font-semibold text-white mb-6">Recent Proposals</h2>
          <div className="space-y-4">
            {recentProposals.map((proposal) => (
              <div key={proposal.id} className="flex items-center justify-between p-4 bg-[#1B2B27] rounded-lg">
                <div>
                  <h3 className="text-white font-medium">{proposal.title}</h3>
                  <p className="text-sm text-gray-300">Last updated: {proposal.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    proposal.status === 'Draft' ? 'bg-gray-500/20 text-gray-300' :
                    proposal.status === 'Sent' ? 'bg-[#7CFF9B]/20 text-[#7CFF9B]' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {proposal.status}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-300 hover:text-white">
                      <IoPencilOutline className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-300 hover:text-white">
                      <IoStatsChartOutline className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-300 hover:text-red-400">
                      <IoTrashOutline className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Create New Proposal CTA */}
          <div className="bg-[#2B3B37]/80 backdrop-blur-sm rounded-xl p-6 border border-[#7CFF9B]/10">
            <h2 className="text-xl font-semibold text-white mb-4">Start Creating</h2>
            <Link
              href="/dashboard/create/select"
              className="block w-full bg-[#7CFF9B] text-[#1B2B27] px-6 py-3 rounded-lg text-center font-medium hover:bg-[#6ee889] transition-colors"
            >
              Create New Proposal
            </Link>
          </div>

          {/* Tips & Insights */}
          <div className="bg-[#2B3B37]/80 backdrop-blur-sm rounded-xl p-6 border border-[#7CFF9B]/10">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <IoStarOutline className="text-[#7CFF9B]" />
              Tips & Insights
            </h2>
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex gap-3 text-gray-300">
                  <span className="text-[#7CFF9B]">•</span>
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 