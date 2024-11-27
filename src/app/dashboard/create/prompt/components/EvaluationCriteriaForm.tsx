import React from 'react';

interface EvaluationCriteriaFormProps {
  formData: {
    evaluationCriteria: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

const EvaluationCriteriaForm: React.FC<EvaluationCriteriaFormProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white text-sm font-medium mb-2">
          Evaluation Criteria
        </label>
        <div className="mb-2 text-gray-400 text-xs">
          Enter the criteria that will be used to evaluate your proposal. Include scoring weights if available.
        </div>
        <textarea
          value={formData.evaluationCriteria}
          onChange={(e) => handleInputChange('evaluationCriteria', e.target.value)}
          rows={8}
          className="w-full px-4 py-3 bg-[#2B3B37] border border-[#3C4C47] rounded-lg text-white focus:outline-none focus:border-[#7CFF9B]"
          placeholder="Enter the evaluation criteria..."
        />
      </div>
    </div>
  );
};

export default EvaluationCriteriaForm; 