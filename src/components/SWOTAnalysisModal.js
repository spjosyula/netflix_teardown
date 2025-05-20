import React, { useEffect } from 'react';

const swotData = [
  {
    title: 'Strengths',
    points: [
      'Global Brand Recognition',
      'Massive Content Library',
      'Award-Winning Originals',
      'Advanced Recommendation Algorithm',
      'Strong Subscriber Base',
      'Strategic Investment in Localized Content',
      'Data-Driven Decision Making',
      'Ad-Supported Tier Expansion',
    ],
  },
  {
    title: 'Weaknesses',
    points: [
      'Rising Content Costs',
      'High Subscriber Churn in Mature Markets',
      'No Live TV or Sports (Yet)',
      'Limited User-Generated Content (UGC) Capabilities',
      'Dependence on Originals',
    ],
  },
  {
    title: 'Opportunities',
    points: [
      'Expand Ad-Supported Plans',
      'Gaming & Interactive Content',
      'Local Partnerships',
      'AI-Powered Content Creation',
      'Live Events & Sports',
      'International Expansion in Underserved Regions',
    ],
  },
  {
    title: 'Threats',
    points: [
      'Intensifying Competition',
      'Subscriber Fatigue',
      'Content Licensing Battles',
      'Regulatory Challenges',
      'Economic Uncertainty',
      'Piracy',
      'Platform Saturation',
    ],
  },
];

const SWOTAnalysisModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (typeof document !== 'undefined' && document.body) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      if (typeof document !== 'undefined' && document.body) {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="fixed inset-0 overflow-y-auto bg-black">
        <div className="container mx-auto px-4 py-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 text-white hover:text-netflix-red transition-colors z-[10000]"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Heading */}
          <div className="mt-16 mb-16 flex flex-row flex-wrap items-end gap-4 justify-center">
            <span className="font-chonburi text-maroon text-[56px] md:text-[90px] lg:text-[110px] leading-none pr-2" style={{lineHeight: '0.8'}}>SWOT</span>
            <span className="font-average text-white text-[40px] md:text-[64px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Analysis</span>
          </div>

          {/* SWOT Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            {swotData.map((section, idx) => (
              <div
                key={section.title}
                className="rounded-2xl border border-maroon p-8 flex flex-col items-start min-h-[320px] md:min-h-[340px] lg:min-h-[380px] w-full bg-black"
              >
                <div className="font-average text-maroon text-3xl md:text-4xl font-bold mb-4">{section.title}</div>
                <ul className="list-disc pl-6">
                  {section.points.map((point, i) => (
                    <li key={i} className="font-average text-white text-lg md:text-xl mb-2 last:mb-0">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SWOTAnalysisModal; 