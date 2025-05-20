import React, { useEffect } from 'react';

const MonetizationStrategyModal = ({ isOpen, onClose }) => {
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
          <div className="mt-16 mb-8 md:mb-16 flex flex-row flex-wrap items-end gap-2 md:gap-4">
            <span className="font-average text-maroon text-[32px] md:text-[64px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Monetization</span>
            <span className="font-average text-white text-[32px] md:text-[64px] lg:text-[80px] leading-none" style={{letterSpacing: '-2px'}}>Strategy</span>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-8 md:gap-16 w-full max-w-5xl mx-auto">
            {/* 1. Subscription-Based Revenue Model */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
              <span className="font-chonburi text-white text-[48px] md:text-[100px] lg:text-[120px] leading-none select-none min-w-[1.5em] text-left">1</span>
              <div className="flex-1 flex flex-col">
                <span className="font-average text-maroon text-xl md:text-4xl lg:text-5xl font-bold mb-2">Subscription-Based Revenue Model</span>
                <div className="font-average text-white text-sm md:text-lg lg:text-xl max-w-4xl mb-2">
                  This is their primary source of revenue which is recurring and predictable. Its a tiered model with 3 different tiers:
                </div>
                <ul className="font-average text-white text-sm md:text-lg lg:text-xl pl-4 md:pl-6 list-decimal mb-2 space-y-1">
                  <li>Basic with ads (lowest priced) - Ad-supported, limited features, 720p resolution</li>
                  <li>Standard (mid-range price) - 1080p, no ads, watch on 2 devices</li>
                  <li>Premium (highest price) - 4K+HDR, up to 4 screens, spatial audio</li>
                </ul>
              </div>
            </div>

            {/* 2. Ad-Supported Tier */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-8 justify-between">
              <div className="flex-1 flex flex-col order-2 md:order-1">
                <span className="font-average text-maroon text-xl md:text-4xl lg:text-5xl font-bold mb-2">Ad-Supported Tier</span>
                <div className="font-average text-white text-sm md:text-lg lg:text-xl max-w-4xl mb-2 md:mb-0 md:pr-8">
                  To attract price-sensitive users and expand reach, Netflix partnered with Microsoft for ad tech. Revenue is generated through ad impressions and CPM (cost-per-thousand views). This helps Netflix tap into the massive advertising market while still growing subscriptions.
                </div>
              </div>
              <span className="font-chonburi text-white text-[48px] md:text-[100px] lg:text-[120px] leading-none select-none min-w-[1.5em] text-left md:text-right order-1 md:order-2 mb-2 md:mb-0">2</span>
            </div>

            {/* 3. Content Licensing */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-8">
              <span className="font-chonburi text-white text-[48px] md:text-[100px] lg:text-[120px] leading-none select-none min-w-[1.5em] text-left">3</span>
              <div className="flex-1 flex flex-col">
                <span className="font-average text-maroon text-xl md:text-4xl lg:text-5xl font-bold mb-2">Content Licensing</span>
                <div className="font-average text-white text-sm md:text-lg lg:text-xl max-w-4xl mb-2">
                  While Netflix primarily produces its own original content, it also licenses shows and movies from other studios. This can provide a revenue stream if they later sell rights to other platforms or networks after the initial run on Netflix.
                </div>
              </div>
            </div>

            {/* 4. Partnership */}
            <div className="flex flex-col md:flex-row md:items-start md:gap-8 justify-between">
              <div className="flex-1 flex flex-col order-2 md:order-1">
                <span className="font-average text-maroon text-xl md:text-4xl lg:text-5xl font-bold mb-2">Partnership</span>
                <div className="font-average text-white text-sm md:text-lg lg:text-xl max-w-4xl mb-2 md:mb-0 md:pr-8">
                  Netflix has strategic bundling deals with telecom providers, ISPs, and device manufacturers (e.g., Netflix free with certain broadband/mobile plans). It helps with acquisition and retention, while partners subsidize subscription costs.
                </div>
              </div>
              <span className="font-chonburi text-white text-[48px] md:text-[100px] lg:text-[120px] leading-none select-none min-w-[1.5em] text-left md:text-right order-1 md:order-2 mb-2 md:mb-0">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonetizationStrategyModal; 