import React, { useEffect } from 'react';

const features = [
  {
    feature: 'Personalized Recommendations',
    functionality: 'Uses algorithms to suggest shows/movies based on viewing history and preferences.',
    value: 'Saves time, helps users find relevant content quickly, increases engagement.'
  },
  {
    feature: 'Multiple Profiles',
    functionality: 'Allows creation of up to 5 user profiles under one account.',
    value: 'Personalized recommendations and history for each user; ideal for households.'
  },
  {
    feature: '"Continue Watching" Row',
    functionality: 'Lets users resume content where they left off.',
    value: 'Enhances convenience and improves content continuity.'
  },
  {
    feature: 'Downloads for Offline Viewing',
    functionality: 'Enables users to download content to watch without internet.',
    value: 'Adds mobility and convenience, especially for travel or low-connectivity areas.'
  },
  {
    feature: 'Subtitles & Audio Customization',
    functionality: 'Offers multi-language subtitles and dubbing options.',
    value: 'Makes content accessible globally; improves user experience for non-native speakers.'
  },
  {
    feature: 'Watch History & "My List"',
    functionality: 'Users can track what they watched and bookmark content.',
    value: 'Supports content curation and easier rewatching or planning.'
  },
  {
    feature: 'Netflix Originals',
    functionality: 'Produces exclusive content only available on the platform.',
    value: 'Builds brand loyalty and content ownership.'
  },
];

const CoreFeatureAnalysisModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (typeof document !== 'undefined' && document.body) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
      };
    }
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
          <div className="mt-16 mb-12 flex items-end gap-4">
          <span className="font-average text-maroon text-[48px] md:text-[64px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}> Core</span>
            <span className="font-average text-white text-[48px] md:text-[64px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Feature</span>
            <span className="font-average text-maroon text-[48px] md:text-[64px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Analysis</span>
          </div>

          {/* Table Section */}
          <div className="overflow-x-auto w-full max-w-6xl mx-auto rounded-2xl shadow-2xl border border-maroon bg-[#181818]">
            <table className="min-w-full text-left border-separate border-spacing-0">
              <thead className="sticky top-0 z-10">
                <tr className="bg-black/90">
                  <th className="font-average text-maroon text-2xl md:text-3xl px-6 py-5 border-b border-maroon sticky top-0 left-0 bg-black/90">Feature</th>
                  <th className="font-average text-maroon text-2xl md:text-3xl px-6 py-5 border-b border-maroon">Functionality</th>
                  <th className="font-average text-maroon text-2xl md:text-3xl px-6 py-5 border-b border-maroon">User Value</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, idx) => (
                  <tr key={row.feature} className={`transition-colors duration-200 ${idx % 2 === 0 ? 'bg-[#181818]' : 'bg-[#222]'} hover:bg-maroon/10`}>
                    <td className="font-average text-white text-lg md:text-xl px-6 py-6 border-b border-maroon align-top min-w-[220px] max-w-[260px]">{row.feature}</td>
                    <td className="font-average text-white text-base md:text-lg px-6 py-6 border-b border-maroon align-top min-w-[320px] max-w-[420px]">{row.functionality}</td>
                    <td className="font-average text-white text-base md:text-lg px-6 py-6 border-b border-maroon align-top min-w-[320px] max-w-[420px]">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatureAnalysisModal; 