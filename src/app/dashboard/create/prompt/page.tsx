'use client'

import { useState } from 'react';
import { IoArrowBack, IoSparklesOutline, IoCheckmarkCircle, IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Link from 'next/link';
import clsx from 'clsx';
import Markdown from 'react-markdown';
import BasicInfoForm from './components/BasicInfoForm';
import SowInstructionsForm from './components/SowInstructionsForm';
import EvaluationCriteriaForm from './components/EvaluationCriteriaForm';
import QualificationsForm from './components/QualificationsForm';
import ReviewForm from './components/ReviewForm';

interface FormData {
  companyName: string;
  orgName: string;
  title: string;
  instructions: string;
  sow: string;
  evaluationCriteria: string;
  qualifications: string;
}

// Modify the PreviewSection component
const PreviewSection = ({ stepNumber, content, isGenerating, currentStep }: { 
  stepNumber: number; 
  content?: string;
  isGenerating: boolean;
  currentStep: number;
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const titles = {
    1: "Executive Summary & Introduction",
    2: "Project Details & Approach",
    3: "Evaluation Criteria Response",
    4: "Qualifications & Experience"
  };

  return (
    <div className="mb-4 border border-[#7CFF9B]/10 rounded-lg overflow-hidden">
      <div 
        className="flex items-center justify-between p-4 bg-[#243530] cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm
            ${content ? 'bg-[#7CFF9B] text-[#1B2B27]' : 'bg-[#2B3B37] text-[#7CFF9B]'}`}>
            {stepNumber}
          </div>
          <h3 className="text-white font-medium">
            {titles[stepNumber as keyof typeof titles]}
          </h3>
        </div>
        {isCollapsed ? <IoChevronDown className="text-[#7CFF9B]" /> : <IoChevronUp className="text-[#7CFF9B]" />}
      </div>
      
      {!isCollapsed && (
        <div className="p-4 bg-[#1B2B27]">
          <div className="prose prose-invert max-w-none">
            {isGenerating && stepNumber === currentStep ? (
              <div className="flex items-center gap-3 text-[#7CFF9B]">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#7CFF9B]" />
                Generating section...
              </div>
            ) : content ? (
              <Markdown>{content}</Markdown>
            ) : (
              <div className="text-gray-400 italic">
                This section will be generated in step {stepNumber}...
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function PromptProposal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    orgName: '',
    title: '',
    instructions: '',
    sow: '',
    evaluationCriteria: '',
    qualifications: ''
  });
  const [stepPreviews, setStepPreviews] = useState<{ [key: number]: string }>({});
  const [isGeneratingStep, setIsGeneratingStep] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const steps = [
    { number: 1, title: 'Basic Info', component: BasicInfoForm },
    { number: 2, title: 'SOW & Instructions', component: SowInstructionsForm },
    { number: 3, title: 'Evaluation Criteria', component: EvaluationCriteriaForm },
    { number: 4, title: 'Qualifications', component: QualificationsForm },
    { number: 5, title: 'Review & Generate', component: ReviewForm }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      setGeneratedContent('Generating proposal...');
      // Add actual API call here
    } catch (err) {
      setError('Failed to generate proposal');
    } finally {
      setLoading(false);
    }
  };

  const generateStepContent = async (stepNumber: number) => {
    setIsGeneratingStep(true);
    try {
      const response = await fetch('/api/generate-proposal-step', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          step: stepNumber,
          formData
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      
      setStepPreviews(prev => ({
        ...prev,
        [stepNumber]: data.content
      }));

      // Combine all generated content in order
      const allContent = Object.entries(stepPreviews)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([_, content]) => content)
        .join('\n\n---\n\n');
      
      setGeneratedContent(allContent);

    } catch (error) {
      setError('Failed to generate content for this step');
    } finally {
      setIsGeneratingStep(false);
    }
  };

  const handleNextStep = async () => {
    if (currentStep === steps.length) {
      handleGenerate();
    } else {
      await generateStepContent(currentStep);
      setCurrentStep(prev => Math.min(steps.length, prev + 1));
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  // Add height classes for different steps
  const getStepHeight = (stepNumber: number) => {
    switch (stepNumber) {
      case 1: // Basic Info
        return 'min-h-[400px]';
      case 2: // SOW & Instructions
        return 'min-h-[700px]';
      case 3: // Evaluation Criteria
        return 'min-h-[600px]';
      case 4: // Qualifications
        return 'min-h-[500px]';
      case 5: // Review
        return 'min-h-[800px]';
      default:
        return 'min-h-[400px]';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1B2B27] via-[#243530] to-[#1B2B27] p-8">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #7CFF9B 1px, transparent 1px),
            linear-gradient(to bottom, #7CFF9B 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Header */}
      <div className="relative max-w-[1800px] mx-auto mb-8">
        <Link 
          href="/dashboard"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
        >
          <IoArrowBack className="w-6 h-6 mr-2" />
          <span>Back to Dashboard</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative max-w-[1800px] mx-auto flex gap-8 h-[calc(100vh-120px)]">
        {/* Left Side - Form */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1 bg-[#243530]/80 backdrop-blur-sm rounded-2xl shadow-xl 
            border border-[#7CFF9B]/10 overflow-hidden flex flex-col">
            {/* Steps Progress - remains fixed at top */}
            <div className="p-6 border-b border-[#7CFF9B]/10 bg-[#243530]/80">
              <div className="flex justify-between">
                {steps.map((step) => (
                  <div key={step.number} className="flex flex-col items-center">
                    <div className={clsx(
                      'w-10 h-10 rounded-full flex items-center justify-center mb-2',
                      currentStep > step.number ? 'bg-[#7CFF9B] text-[#1B2B27]' :
                      currentStep === step.number ? 'bg-[#2B3B37] text-[#7CFF9B] border-2 border-[#7CFF9B]' :
                      'bg-[#2B3B37] text-gray-400'
                    )}>
                      {currentStep > step.number ? <IoCheckmarkCircle className="w-6 h-6" /> : step.number}
                    </div>
                    <span className={clsx(
                      'text-sm',
                      currentStep === step.number ? 'text-[#7CFF9B]' : 'text-gray-400'
                    )}>
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content - Make scrollable */}
            <div className="p-8 flex-1 overflow-y-auto custom-scrollbar">
              {error && (
                <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
                  {error}
                </div>
              )}
              
              <div className="space-y-6">
                <CurrentStepComponent
                  formData={formData}
                  handleInputChange={handleInputChange as (field: string, value: string) => void}
                />
              </div>
            </div>

            {/* Navigation Buttons - Fixed at bottom */}
            <div className="p-6 border-t border-[#7CFF9B]/10 bg-[#243530]/80">
              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                  className={clsx(
                    'px-6 py-3 rounded-lg text-white border border-[#3C4C47] hover:bg-[#2B3B37] transition-colors duration-200',
                    currentStep === 1 && 'opacity-50 cursor-not-allowed'
                  )}
                  disabled={currentStep === 1}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-lg bg-[#7CFF9B] text-[#1B2B27] font-medium hover:bg-[#6ee889] transition-colors duration-200"
                >
                  {isGeneratingStep ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1B2B27]" />
                      Generating...
                    </span>
                  ) : currentStep === steps.length ? (
                    <span className="flex items-center gap-2">
                      <IoSparklesOutline className="w-5 h-5" />
                      Generate Proposal
                    </span>
                  ) : (
                    'Next'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Preview */}
        <div className="w-1/2 flex flex-col">
          <div className="flex-1 bg-[#1B2B27]/80 backdrop-blur-sm rounded-2xl shadow-xl 
            border border-[#7CFF9B]/10 overflow-hidden flex flex-col">
            <div className="p-6 border-b border-[#7CFF9B]/10 bg-[#1B2B27]/80">
              <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                <IoSparklesOutline className="w-5 h-5 text-[#7CFF9B]" />
                Proposal Preview
              </h2>
            </div>
            <div className="p-4 flex-1 overflow-y-auto custom-scrollbar">
              {[1, 2, 3, 4].map((stepNum) => (
                <PreviewSection
                  key={stepNum}
                  stepNumber={stepNum}
                  content={stepPreviews[stepNum]}
                  isGenerating={isGeneratingStep && currentStep === stepNum}
                  currentStep={currentStep}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}