import React from 'react';

interface ProjectDetailsFormProps {
  formData: {
    projectName: string;
    primaryObjectives: string;
    valueProposition: string;
    targetClient: string;
    projectDuration: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const ProjectDetailsForm: React.FC<ProjectDetailsFormProps> = ({ formData, handleInputChange }) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-white mb-4">Step 2: Project/Service Details</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Specific Project/Service Name
          </label>
          <input
            type="text"
            value={formData.projectName}
            onChange={(e) => handleInputChange('projectName', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Enter the name of your project or service"
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Primary Objectives
          </label>
          <textarea
            value={formData.primaryObjectives}
            onChange={(e) => handleInputChange('primaryObjectives', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Describe the main goals and objectives of this project/service"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Unique Value Proposition
          </label>
          <textarea
            value={formData.valueProposition}
            onChange={(e) => handleInputChange('valueProposition', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="What makes your solution unique and valuable?"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Target Client Profile
          </label>
          <textarea
            value={formData.targetClient}
            onChange={(e) => handleInputChange('targetClient', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="Describe your ideal client for this project/service"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Estimated Project Duration
          </label>
          <input
            type="text"
            value={formData.projectDuration}
            onChange={(e) => handleInputChange('projectDuration', e.target.value)}
            className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
            placeholder="e.g., 6 months, 1 year"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsForm; 