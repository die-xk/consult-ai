import React from 'react';

interface QualificationsFormProps {
  formData: {
    teamExpertise: string;
    technicalCapabilities: string;
    requiredResources: string;
    projectReferences: string;
    riskMitigation: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const QualificationsForm: React.FC<QualificationsFormProps> = ({ formData, handleInputChange }) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-white mb-4">Step 5: Resources & Capabilities</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Describe your team's key expertise
          </label>
          <textarea
            value={formData.teamExpertise}
            onChange={(e) => handleInputChange('teamExpertise', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Detail the key skills and experience of your team members..."
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            What technical capabilities do you possess?
          </label>
          <textarea
            value={formData.technicalCapabilities}
            onChange={(e) => handleInputChange('technicalCapabilities', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="List your technical infrastructure, tools, and specialized capabilities..."
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            What specific resources are required?
          </label>
          <textarea
            value={formData.requiredResources}
            onChange={(e) => handleInputChange('requiredResources', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Detail the resources needed for successful project execution..."
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Can you provide references from similar past projects?
          </label>
          <textarea
            value={formData.projectReferences}
            onChange={(e) => handleInputChange('projectReferences', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="List relevant project references with contact information..."
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            What are your primary strategies for mitigating project risks?
          </label>
          <textarea
            value={formData.riskMitigation}
            onChange={(e) => handleInputChange('riskMitigation', e.target.value)}
            rows={4}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Describe your approach to identifying and managing potential risks..."
          />
        </div>
      </div>
    </>
  );
};

export default QualificationsForm; 