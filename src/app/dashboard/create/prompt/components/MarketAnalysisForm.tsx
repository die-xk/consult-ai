import React from 'react';

interface MarketAnalysisFormProps {
  formData: {
    marketSize: string;
    growthRate: string;
    competitors: string;
    competitiveAdvantages: string;
    pricingStrategy: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const MarketAnalysisForm: React.FC<MarketAnalysisFormProps> = ({ formData, handleInputChange }) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-white mb-4">Step 3: Market Analysis</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            What is the estimated size of your target market?
          </label>
          <input
            type="text"
            value={formData.marketSize}
            onChange={(e) => handleInputChange('marketSize', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="e.g., $50 billion globally"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            What is the current growth rate of this market?
          </label>
          <input
            type="text"
            value={formData.growthRate}
            onChange={(e) => handleInputChange('growthRate', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="e.g., 12% annually"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Who are your top 3 direct competitors?
          </label>
          <textarea
            value={formData.competitors}
            onChange={(e) => handleInputChange('competitors', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="List your main competitors and their key strengths"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            What are your key competitive advantages?
          </label>
          <textarea
            value={formData.competitiveAdvantages}
            onChange={(e) => handleInputChange('competitiveAdvantages', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Describe what sets you apart from competitors"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            What is your proposed pricing strategy?
          </label>
          <textarea
            value={formData.pricingStrategy}
            onChange={(e) => handleInputChange('pricingStrategy', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Describe your pricing approach and rationale"
            rows={3}
          />
        </div>
      </div>
    </>
  );
};

export default MarketAnalysisForm; 