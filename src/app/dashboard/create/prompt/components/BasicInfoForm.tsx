import React from 'react';

interface BasicInfoFormProps {
  formData: {
    businessName: string;
    industrySector: string;
    yearsInOperation: string;
    companyMission: string;
    annualRevenue: string;
    keyDifferentiators: string;
    targetMarket: string;
    successMetrics: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ formData, handleInputChange }) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-white mb-4">Step 1: Company Overview</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Business Name
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => handleInputChange('businessName', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Enter your business name"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Industry Sector
          </label>
          <input
            type="text"
            value={formData.industrySector}
            onChange={(e) => handleInputChange('industrySector', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="e.g., Technology, Healthcare, Manufacturing"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Years in Operation
          </label>
          <input
            type="text"
            value={formData.yearsInOperation}
            onChange={(e) => handleInputChange('yearsInOperation', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="e.g., 5"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Company Mission
          </label>
          <textarea
            value={formData.companyMission}
            onChange={(e) => handleInputChange('companyMission', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Enter your company's mission statement"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Current Annual Revenue
          </label>
          <input
            type="text"
            value={formData.annualRevenue}
            onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="e.g., $1,000,000"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            What Makes Your Company Unique?
          </label>
          <textarea
            value={formData.keyDifferentiators}
            onChange={(e) => handleInputChange('keyDifferentiators', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="List 2-3 key factors that set your company apart from competitors"
            rows={2}
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Target Market/Ideal Client
          </label>
          <input
            type="text"
            value={formData.targetMarket}
            onChange={(e) => handleInputChange('targetMarket', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="e.g., Enterprise SaaS companies, Healthcare providers"
          />
        </div>
      </div>
    </>
  );
};

export default BasicInfoForm; 