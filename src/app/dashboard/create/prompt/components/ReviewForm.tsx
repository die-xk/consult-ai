import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

interface ReviewFormProps {
  formData: {
    companyName: string;
    orgName: string;
    title: string;
    instructions: string;
    sow: string;
    evaluationCriteria: string;
    qualifications: string;
  };
}

const ReviewForm: React.FC<ReviewFormProps> = ({ formData }) => {
  const sections = [
    { title: 'Basic Information', fields: [
      { label: 'Company Name', value: formData.companyName },
      { label: 'Organization Name', value: formData.orgName },
      { label: 'Proposal Title', value: formData.title }
    ]},
    { title: 'SOW & Instructions', fields: [
      { label: 'Instructions', value: formData.instructions },
      { label: 'Statement of Work', value: formData.sow }
    ]},
    { title: 'Evaluation Criteria', fields: [
      { label: 'Criteria', value: formData.evaluationCriteria }
    ]},
    { title: 'Qualifications', fields: [
      { label: 'Company Qualifications', value: formData.qualifications }
    ]}
  ];

  return (
    <div className="space-y-8">
      <div className="bg-[#2B3B37]/50 p-4 rounded-lg border border-[#7CFF9B]/10 mb-6">
        <h3 className="text-[#7CFF9B] text-sm font-medium mb-2">Review Your Information</h3>
        <p className="text-gray-400 text-sm">
          Please review all the information below before generating your proposal. You can go back to any section to make changes.
        </p>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-white font-medium flex items-center gap-2">
            <IoCheckmarkCircle className="text-[#7CFF9B] w-5 h-5" />
            {section.title}
          </h3>
          
          <div className="bg-[#2B3B37] rounded-lg divide-y divide-[#3C4C47]">
            {section.fields.map((field, fieldIndex) => (
              <div key={fieldIndex} className="p-4">
                <label className="block text-white text-sm font-medium mb-2">{field.label}</label>
                <div className="text-gray-400 text-sm">{field.value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewForm; 