import React, { useEffect } from 'react';

const hypotheses = [
  {
    number: 1,
    title: 'Personalisation Increases Retention',
    description: 'If users see personalized thumbnails and recommendations, then they are more likely to watch something within 90 seconds, because relevant discovery reduces choice paralysis.',
    metrics: 'Click-through rate (CTR) on personalized thumbnails, Time to first play (TTFP), Daily/weekly active users (DAU/WAU), Retention rate (monthly and cohort-based)'
  },
  {
    number: 2,
    title: 'Binge-Watching Drives Stickiness',
    description: 'If a user watches more than 3 episodes in one sitting, then they are significantly more likely to return the next day, because binge behavior creates an engagement loop.',
    metrics: 'Average viewing session length, Number of episodes watched per session, Daily return rate, Series completion rate.'
  },
  {
    number: 3,
    title: 'Originals Improve Subscriber Loyalty',
    description: 'If users watch Netflix Originals, then they are less likely to churn, because exclusive content creates platform lock-in.',
    metrics: '% of hours watched from Originals, Churn rate among Original viewers vs. non-viewers, Time to first Original streamed after signup, NPS (Net Promoter Score) after Original viewing.'
  },
  {
    number: 4,
    title: 'Timely Push Notifications Drive Re-Engagement',
    description: "If personalized push notifications are sent at the user's preferred time, then open and play rates increase, because reminders align with viewing habits.",
    metrics: 'Push notification open rate, Play rate post-notification, Time from notification to app open, Engagement lift (vs. control group).'
  },
  {
    number: 5,
    title: 'More Relevant Recommendations Reduce Churn',
    description: 'If the recommender engine improves content match, then users will discover new titles they enjoy faster, because reduced search time increases perceived platform value.',
    metrics: "% of watched titles from 'Top Picks' or 'Because You Watched' rows, Time spent browsing before play, Abandonment rate (start but don't finish watching), Retention by personalization score."
  },
];

const RecommendedAnalysisMetricsModal = ({ isOpen, onClose }) => {
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
            <span className="font-chonburi text-maroon text-[84px] md:text-[120px] lg:text-[170px] leading-none pr-2" style={{lineHeight: '0.8', marginTop: '0.1em'}}>&</span>
            <div className="flex flex-col justify-center">
              <span className="font-average text-maroon text-[39px] md:text-[60px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Recommended Analysis</span>
              <span className="font-average text-maroon text-[39px] md:text-[60px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Metrics Hypothesis</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-16 w-full max-w-4xl px-2 sm:px-4 mx-auto">
            {hypotheses.map((h, idx) => (
              <div key={h.number} className={`flex flex-col md:flex-row items-start gap-6 sm:gap-8 w-full max-w-3xl mx-auto ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <span className="font-chonburi text-white text-[48px] sm:text-[64px] md:text-[80px] leading-none select-none pt-2 min-w-[1.5em] text-center">{h.number}</span>
                <div className="flex flex-col justify-center w-full">
                  <div className="font-average text-maroon text-2xl sm:text-3xl md:text-4xl font-bold mb-2 flex items-center h-full min-h-[1.5em]">{h.title}</div>
                  <div className="font-average text-white text-base sm:text-lg md:text-xl max-w-3xl mb-2">
                    {h.description}
                  </div>
                  <div className="font-average text-white text-base sm:text-lg md:text-xl max-w-3xl">
                    <span className="font-bold text-maroon">Key Metrics:</span> {h.metrics}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedAnalysisMetricsModal; 