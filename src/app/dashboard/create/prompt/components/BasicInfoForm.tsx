import React from 'react';

interface BasicInfoFormProps {
  formData: {
    companyName: string;
    orgName: string;
    title: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ formData, handleInputChange }) => {
  return (
    <>
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Company Name
        </label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => handleInputChange('companyName', e.target.value)}
          className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
          placeholder="Enter your company name"
        />
      </div>
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Organization Name
        </label>
        <input
          type="text"
          value={formData.orgName}
          onChange={(e) => handleInputChange('orgName', e.target.value)}
          className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
          placeholder="Enter the organization name"
        />
      </div>
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Proposal Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
          className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
          placeholder="Enter the proposal title"
        />
      </div>
    </>
  );
};

export default BasicInfoForm; 