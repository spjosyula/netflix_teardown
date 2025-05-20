import React, { useEffect } from 'react';

const OnboardingUserExperienceModal = ({ isOpen, onClose }) => {
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
          <div className="mt-16 mb-12 flex items-start">
            <span className="font-chonburi text-maroon text-[100px] md:text-[140px] lg:text-[170px] leading-none pr-2" style={{lineHeight: '0.8', marginTop: '0.1em'}}>&</span>
            <div className="flex flex-col justify-center">
              <span className="font-average text-maroon text-[48px] md:text-[72px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Onboarding</span>
              <span className="font-average text-maroon text-[48px] md:text-[72px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>User Experience</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-0 w-full max-w-6xl mx-auto mt-8">
            {/* Left: Sign Up Process */}
            <div className="flex-1 flex flex-col items-start">
              <div className="flex items-center mb-4">
                <span className="font-average text-white text-[56px] md:text-[72px] lg:text-[80px] leading-none select-none pr-4">1</span>
                <span className="font-average text-maroon text-3xl md:text-4xl lg:text-5xl font-normal">Sign Up Process</span>
              </div>
              <div className="font-average text-white text-base md:text-lg lg:text-xl max-w-xl">
                It is pretty simple without too many complications.<br />
                There are two options - verifying with the email ID or creating a password (in case you don't have the patience to verify your email ID each time you enter in.
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-center">
              <img 
                src={process.env.PUBLIC_URL + '/image.png'}
                alt="Netflix Sign Up Screenshot" 
                className="rounded-lg shadow-lg max-w-full w-[480px] h-auto border border-[#222]"
                style={{minWidth: '320px', background: '#111'}}
              />
            </div>
          </div>

          {/* Customer Journey Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-20 w-full max-w-6xl mx-auto">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="font-average text-maroon text-4xl md:text-5xl lg:text-6xl font-normal pr-2">Customer Journey</span>
              <span className="font-average text-white text-[56px] md:text-[72px] lg:text-[80px] leading-none select-none pl-2">2</span>
            </div>
          </div>

          {/* Creative Customer Journey Timeline */}
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center mt-20 px-2">
            {/* Timeline Line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-maroon/70 via-maroon/90 to-maroon/70 z-0" style={{transform: 'translateY(-50%)'}} />
            <div className="flex flex-row items-center justify-between w-full z-10 relative">
              {['Awareness','Consideration','Onboarding','Discovery','Engagement','Retention','Advocacy'].map((stage, idx, arr) => (
                <div key={stage} className="flex flex-col items-center flex-1 min-w-0 relative">
                  {/* Staggered labels: odd below, even above */}
                  {idx % 2 === 0 ? (
                    <span className="font-average text-maroon text-xs md:text-base mb-3 md:mb-4 transition-all duration-300" style={{minHeight: '1.5em'}}>{stage}</span>
                  ) : <span className="mb-7 md:mb-10" />}
                  {/* Circle with animation and hover */}
                  <div className="relative group z-10">
                    <div className="w-8 h-8 md:w-14 md:h-14 bg-maroon border-4 border-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-maroon/50 cursor-pointer">
                      <div className="w-3 h-3 md:w-5 md:h-5 bg-white rounded-full" />
                    </div>
                    {/* Animated pulse */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-full h-full rounded-full border-2 border-maroon animate-pulse opacity-30" />
                    </div>
                  </div>
                  {idx % 2 === 1 ? (
                    <span className="font-average text-maroon text-xs md:text-base mt-3 md:mt-4 transition-all duration-300" style={{minHeight: '1.5em'}}>{stage}</span>
                  ) : <span className="mt-7 md:mt-10" />}
                  {/* Connecting arrow except last */}
                  {idx !== arr.length - 1 && (
                    <div className="absolute top-1/2 right-[-12%] md:right-[-18%] w-[24%] md:w-[36%] h-4 flex items-center justify-center z-0" style={{transform: 'translateY(-50%)'}}>
                      <svg width="100%" height="16" viewBox="0 0 100 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8 H92 M92 8 L86 3 M92 8 L86 13" stroke="#800000" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingUserExperienceModal; 