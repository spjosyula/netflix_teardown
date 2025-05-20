import React, { useEffect } from 'react';

const ProblemStatementModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    console.log('Modal mounted, isOpen:', isOpen);
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
          <div className="mt-16 mb-12 flex items-start">
            <span className="font-chonburi text-white text-[110px] md:text-[140px] lg:text-[170px] leading-none pr-2" style={{lineHeight: '0.8', marginTop: '0.123em'}}> & </span>
            <div className="flex flex-col justify-center">
              <span
                className="font-average text-maroon text-[48px] md:text-[72px] lg:text-[80px] leading-none -ml-6 sm:-ml-6 md:-ml-10"
                style={{ letterSpacing: '-2px' }}
              >
                Product Statement
              </span>
              <span className="font-average text-maroon text-[48px] md:text-[72px] lg:text-[80px] leading-none" style={{ letterSpacing: '-2px' }}>
                Target Audience
              </span>
            </div>
          </div>

          {/* Content will go here */}
          <div className="w-full flex flex-col items-center justify-center mt-16 sm:mt-20 md:mt-24">
            <div className="space-y-16 w-full max-w-4xl px-2 sm:px-4">
              {/* Q1 */}
              <div className="flex items-start gap-6 sm:gap-8 w-full max-w-3xl mx-auto">
                <span className="font-average text-white text-[48px] sm:text-[64px] md:text-[80px] leading-none select-none pt-2 min-w-[1.5em] text-center">Q<span className="align-super text-[0.6em]">.</span></span>
                <div className="flex flex-col justify-center">
                  <div className="font-average text-maroon text-2xl sm:text-3xl md:text-4xl font-bold mb-2 flex items-center h-full min-h-[1.5em]">Which problem is Netflix solving?</div>
                  <div className="font-average text-white text-base sm:text-lg md:text-xl max-w-3xl">
                    Netflix technically removed the need for DVDs. It is a physical inconvenience to go to a video store, choose a DVD and return it within a limited timeframe. It also helps with the limited selection issue that the viewers face while watching the traditional broadcast.
                  </div>
                </div>
              </div>
              {/* Q2 */}
              <div className="flex items-start gap-6 sm:gap-8 w-full max-w-3xl mx-auto">
                <span className="font-average text-white text-[48px] sm:text-[64px] md:text-[80px] leading-none select-none pt-2 min-w-[1.5em] text-center">Q<span className="align-super text-[0.6em]">.</span></span>
                <div className="flex flex-col justify-center">
                  <div className="font-average text-maroon text-2xl sm:text-3xl md:text-4xl font-bold mb-2 flex items-center h-full min-h-[1.5em]">Why does this problem matter?</div>
                  <div className="font-average text-white text-base sm:text-lg md:text-xl max-w-3xl">
                    Let me explain this with an example. Imagine you want to watch a film but you know you don't have enough time to complete it but you don't want to wait too long to start watching it (cause if you are watching it on a television, you are very unlikely to know when will it air again). Going to a video store is a hassle cause you don't want to spend time choosing and in case you have no clue what to watch, you have no preview about it to give an idea about the genre. In short, Netflix is solving the issue of watching your favourite movie or tv show without beating around the bush for it.
                  </div>
                </div>
              </div>
              {/* Q3 */}
              <div className="flex items-start gap-6 sm:gap-8 w-full max-w-3xl mx-auto">
                <span className="font-average text-white text-[48px] sm:text-[64px] md:text-[80px] leading-none select-none pt-2 min-w-[1.5em] text-center">Q<span className="align-super text-[0.6em]">.</span></span>
                <div className="flex flex-col justify-center">
                  <div className="font-average text-maroon text-2xl sm:text-3xl md:text-4xl font-bold mb-2 flex items-center h-full min-h-[1.5em]">Who are the primary users?</div>
                  <div className="font-average text-white text-base sm:text-lg md:text-xl max-w-3xl">
                    Netflix caters diverse audience, but a good chunk of the subscribers are Gen-Z and millenials.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatementModal; 