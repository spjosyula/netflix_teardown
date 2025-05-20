import React, { useEffect } from 'react';

const competitors = [
  { name: 'Prime Video', src: './primevideo.png', alt: 'Prime Video' },
  { name: 'Apple TV', src: './appletv.png', alt: 'Apple TV' },
  { name: 'Disney+ Hotstar', src: './hotstar.png', alt: 'Disney+ Hotstar' },
  { name: 'HBO Max', src: './hbo.png', alt: 'HBO Max' },
  { name: 'Paramount+', src: './paramount.png', alt: 'Paramount+' },
  { name: 'Peacock', src: './peacock.png', alt: 'Peacock' },
];

const description = `Netflix sets itself apart with a strong focus on localized global content, a powerful AI-driven recommendation engine, and seamless user experience. It pioneered binge-watching and is expanding into interactive content and gaming, creating deeper engagement. Its commitment to innovation and personalization keeps it ahead in a crowded streaming market.`;

const CompetitorsLandscapeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
            <span className="font-average text-maroon text-[40px] md:text-[64px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Competitors</span>
            <span className="font-average text-white text-[40px] md:text-[64px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Landscape</span>
          </div>

          {/* Competitor Logos */}
          <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:gap-10 mb-16 w-full max-w-5xl mx-auto">
            {competitors.map((c) => (
              <div key={c.name} className="bg-black rounded-lg flex items-center justify-center shadow-lg" style={{width: '110px', height: '110px', minWidth: '90px', minHeight: '90px'}}>
                <img
                  src={c.src}
                  alt={c.alt}
                  className="object-contain max-w-[80px] max-h-[80px] md:max-w-[100px] md:max-h-[100px]"
                  style={{filter: c.name === 'Apple TV' ? 'none' : 'drop-shadow(0 0 2px #000)'}}
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="w-full max-w-4xl mx-auto">
            <p className="font-average text-white text-lg md:text-2xl text-center leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorsLandscapeModal; 