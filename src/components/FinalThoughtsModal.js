import React, { useEffect } from 'react';

const thoughts = [
  {
    title: 'Balance Growth with Retention',
    description:
      'While Netflix has mastered global growth, future product strategies must focus on retaining users, especially in saturated markets. This means going deeper into hyper-personalization, community-driven discovery, and content longevity rather than just acquisition.',
  },
  {
    title: 'Redefine Engagement Beyond Watching',
    description:
      "The next frontier for Netflix isn't just what users watch, but how they interact with the brand. Games, interactive stories, live events, fandom tools, and social features (like watch parties or reactions) can create deeper engagement loops.",
  },
  {
    title: 'Win the Attention War with Emotional UX',
    description:
      "Netflix's real competitor isn't just Prime Video or Disney+ — it's also TikTok, YouTube, Instagram, and even sleep. The product must emotionally hook users in the first 10 seconds, using previews, personalized rows, smart nudges, and possibly even mood-based navigation.",
  },
  {
    title: 'Think in Micro-Moments, Not Just Long Sessions',
    description:
      'A strong opportunity lies in serving short-form or modular content — for users on commutes, breaks, or between tasks. Netflix could experiment more boldly with micro-series, 5-minute formats, or audio-first content.',
  },
  {
    title: 'Localization is not just translation',
    description:
      'To dominate local markets, Netflix must think beyond dubbing — co-create culturally resonant stories with local creators, design UX for local tastes, and personalize the platform feel per region.',
  },
];

const FinalThoughtsModal = ({ isOpen, onClose }) => {
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
          <div className="mt-16 mb-16 flex flex-row flex-wrap items-end gap-4 justify-center">
            <span className="font-average text-maroon text-[50px] md:text-[85px] lg:text-[110px] leading-none pr-2" style={{lineHeight: '0.8'}}>My</span>
            <span className="font-average text-white text-[50px] md:text-[85px] lg:text-[110px] leading-none pr-2" style={{lineHeight: '0.8'}}>Final</span>
            <span className="font-average text-maroon text-[50px] md:text-[85px] lg:text-[110px] leading-none pl-2" style={{lineHeight: '0.8'}}>Thoughts</span>
          </div>

          {/* Thoughts List */}
          <div className="flex flex-col items-center justify-center gap-8 w-full max-w-4xl mx-auto">
            {thoughts.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-maroon p-8 w-full bg-black"
              >
                <div className="font-average text-maroon text-2xl md:text-3xl font-bold mb-2">{item.title}</div>
                <div className="font-average text-white text-base md:text-lg max-w-4xl">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalThoughtsModal; 