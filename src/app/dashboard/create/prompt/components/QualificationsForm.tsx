import React from 'react';

interface QualificationsFormProps {
  formData: {
    qualifications: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const QualificationsForm: React.FC<QualificationsFormProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Company Qualifications
        </label>
        <div className="mb-2 text-gray-400 text-xs">
          Describe your company's unique qualifications, experience, and capabilities that make you the best choice for this project.
        </div>
        <textarea
          value={formData.qualifications}
          onChange={(e) => handleInputChange('qualifications', e.target.value)}
          rows={6}
          className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
          placeholder="Enter your company's qualifications..."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#2B3B37]/50 p-4 rounded-lg border border-[#7CFF9B]/10">
          <h3 className="text-[#7CFF9B] text-sm font-medium mb-2">Key Points to Include</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Relevant past projects</li>
            <li>• Industry certifications</li>
            <li>• Key team members</li>
            <li>• Years of experience</li>
            <li>• Notable achievements</li>
            <li>• Unique capabilities</li>
          </ul>
        </div>
        
        <div className="bg-[#2B3B37]/50 p-4 rounded-lg border border-[#7CFF9B]/10">
          <h3 className="text-[#7CFF9B] text-sm font-medium mb-2">Writing Tips</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Use specific examples</li>
            <li>• Include measurable results</li>
            <li>• Highlight relevant experience</li>
            <li>• Focus on client benefits</li>
            <li>• Be concise but thorough</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QualificationsForm; 