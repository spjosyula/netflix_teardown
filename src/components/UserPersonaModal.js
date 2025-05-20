import React, { useEffect } from 'react';

const personas = [
  {
    age: 21,
    employment: 'Unemployed',
    location: 'India',
    usage: 'Pretty much everyday',
    painPoints: [
      'Spends more time choosing the content than actually watching something due to repetitive recommendations.',
      'Removal of content without prior notice.',
    ],
    needs: [
      'Wants fresh recommendations and wants to try different genres.',
      'Wants to know which content in the watchlist will be removed soon.',
    ],
  },
  {
    age: 27,
    employment: 'Software Engineer',
    location: 'India',
    usage: 'Sometimes in a month',
    painPoints: [
      "Too pricey as they are paying for the days they aren't watching too.",
      "Doesn't have proper review system.",
      'Unable to watch same content together with their long distance beloved people.',
    ],
    needs: [
      'Wants to watch something nice once month based on the public review.',
      'Would love to watch content at the same time with someone while having real-time discussions about the content.',
    ],
  },
];

const UserPersonaModal = ({ isOpen, onClose }) => {
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
        <div className="min-h-screen w-full">
          {/* Header Section */}
          <div className="relative py-6 px-4 sm:px-6 flex flex-row items-center justify-center gap-4">
            <button
              onClick={onClose}
              className="absolute right-4 top-6 text-white hover:text-netflix-red transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-average text-maroon text-center pr-2">
              User
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-average text-white text-center">
              Personas
            </h2>
          </div>

          {/* Content Section */}
          <div className="container mx-auto px-4 sm:px-6 pb-8">
            {/* Persona Cards */}
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-stretch justify-center w-full max-w-6xl mx-auto">
              {personas.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border-2 border-[#800000] p-4 sm:p-6 md:p-8 w-full max-w-xl bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300"
                >
                  <div className="space-y-4 sm:space-y-6">
                    {/* Basic Info Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <span className="font-[Average] text-[#800000] text-lg sm:text-xl font-bold block">Age</span>
                        <span className="font-[Average] text-white text-base sm:text-lg">{p.age}</span>
                      </div>
                      <div>
                        <span className="font-[Average] text-[#800000] text-lg sm:text-xl font-bold block">Employment</span>
                        <span className="font-[Average] text-white text-base sm:text-lg">{p.employment}</span>
                      </div>
                      <div>
                        <span className="font-[Average] text-[#800000] text-lg sm:text-xl font-bold block">Location</span>
                        <span className="font-[Average] text-white text-base sm:text-lg">{p.location}</span>
                      </div>
                      <div>
                        <span className="font-[Average] text-[#800000] text-lg sm:text-xl font-bold block">Usage</span>
                        <span className="font-[Average] text-white text-base sm:text-lg">{p.usage}</span>
                      </div>
                    </div>

                    {/* Pain Points Section */}
                    <div>
                      <h3 className="font-[Average] text-[#800000] text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Pain Points</h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {p.painPoints.map((pt, i) => (
                          <li key={i} className="font-[Average] text-white text-sm sm:text-base flex items-start">
                            <span className="text-[#800000] mr-2 flex-shrink-0 mt-1">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Needs Section */}
                    <div>
                      <h3 className="font-[Average] text-[#800000] text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Needs</h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {p.needs.map((need, i) => (
                          <li key={i} className="font-[Average] text-white text-sm sm:text-base flex items-start">
                            <span className="text-[#800000] mr-2 flex-shrink-0 mt-1">•</span>
                            <span>{need}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPersonaModal; 