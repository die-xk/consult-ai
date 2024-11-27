import React from 'react';

interface SowInstructionsFormProps {
  formData: {
    instructions: string;
    sow: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const SowInstructionsForm: React.FC<SowInstructionsFormProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Proposal Instructions
        </label>
        <div className="mb-2 text-gray-400 text-xs">
          Paste the complete proposal instructions, including any specific requirements or guidelines.
        </div>
        <textarea
          value={formData.instructions}
          onChange={(e) => handleInputChange('instructions', e.target.value)}
          rows={6}
          className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
          placeholder="Enter the proposal instructions..."
        />
      </div>

      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Statement of Work (SOW)
        </label>
        <div className="mb-2 text-gray-400 text-xs">
          Provide the detailed Statement of Work that describes the project requirements and deliverables.
        </div>
        <textarea
          value={formData.sow}
          onChange={(e) => handleInputChange('sow', e.target.value)}
          rows={6}
          className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
          placeholder="Enter the Statement of Work..."
        />
      </div>
    </div>
  );
};

export default SowInstructionsForm; 