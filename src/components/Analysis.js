import React, { useState, useCallback } from 'react';
import Card from './Card';
import ProblemStatementModal from './ProblemStatementModal';
import OnboardingUserExperienceModal from './OnboardingUserExperienceModal';
import CoreFeatureAnalysisModal from './CoreFeatureAnalysisModal';
import MonetizationStrategyModal from './MonetizationStrategyModal';
import RecommendedAnalysisMetricsModal from './RecommendedAnalysisMetricsModal';
import SWOTAnalysisModal from './SWOTAnalysisModal';
import FinalThoughtsModal from './FinalThoughtsModal';
import CompetitorsLandscapeModal from './CompetitorsLandscapeModal';
import UserPersonaModal from './UserPersonaModal';

const Analysis = () => {
  const [isProblemModalOpen, setIsProblemModalOpen] = useState(false);
  const [isOnboardingModalOpen, setIsOnboardingModalOpen] = useState(false);
  const [isCoreFeatureModalOpen, setIsCoreFeatureModalOpen] = useState(false);
  const [isMonetizationModalOpen, setIsMonetizationModalOpen] = useState(false);
  const [isRecommendedAnalysisModalOpen, setIsRecommendedAnalysisModalOpen] = useState(false);
  const [isSWOTModalOpen, setIsSWOTModalOpen] = useState(false);
  const [isFinalThoughtsModalOpen, setIsFinalThoughtsModalOpen] = useState(false);
  const [isCompetitorsModalOpen, setIsCompetitorsModalOpen] = useState(false);
  const [isUserPersonaModalOpen, setIsUserPersonaModalOpen] = useState(false);

  const cards = [
    "Product Statement & Target Audience",
    "Onboarding & User Journey",
    "User Personas",
    "Core Feature Analysis",
    "Monetization Strategy",
    "Competitor Landscape",
    "Recommended Analysis & Metrics Hypothesis",
    "SWOT Analysis",
    "My Final Thoughts"
  ];

  const handleArrowClick = useCallback((index) => {
    if (index === 0) {
      setIsProblemModalOpen(true);
    } else if (index === 1) {
      setIsOnboardingModalOpen(true);
    } else if (index === 2) {
      setIsUserPersonaModalOpen(true);
    } else if (index === 3) {
      setIsCoreFeatureModalOpen(true);
    } else if (index === 4) {
      setIsMonetizationModalOpen(true);
    } else if (index === 5) {
      setIsCompetitorsModalOpen(true);
    } else if (index === 6) {
      setIsRecommendedAnalysisModalOpen(true);
    } else if (index === 7) {
      setIsSWOTModalOpen(true);
    } else if (index === 8) {
      setIsFinalThoughtsModalOpen(true);
    }
  }, []);

  const handleCloseProblemModal = useCallback(() => {
    setIsProblemModalOpen(false);
  }, []);

  const handleCloseOnboardingModal = useCallback(() => {
    setIsOnboardingModalOpen(false);
  }, []);

  const handleCloseUserPersonaModal = useCallback(() => {
    setIsUserPersonaModalOpen(false);
  }, []);

  const handleCloseCoreFeatureModal = useCallback(() => {
    setIsCoreFeatureModalOpen(false);
  }, []);

  const handleCloseMonetizationModal = useCallback(() => {
    setIsMonetizationModalOpen(false);
  }, []);

  const handleCloseCompetitorsModal = useCallback(() => {
    setIsCompetitorsModalOpen(false);
  }, []);

  const handleCloseRecommendedAnalysisModal = useCallback(() => {
    setIsRecommendedAnalysisModalOpen(false);
  }, []);

  const handleCloseSWOTModal = useCallback(() => {
    setIsSWOTModalOpen(false);
  }, []);

  const handleCloseFinalThoughtsModal = useCallback(() => {
    setIsFinalThoughtsModalOpen(false);
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col netflix-linear-gradient-bg">
      {/* Introduction Text Section */}
      <div className="w-[90%] max-w-[1321px] mx-auto md:ml-[85px] mt-20">
        <p className="font-[Average] font-normal text-[24px] md:text-[36px] text-white leading-[1.2]">
          <span className="font-[Chonburi] font-normal text-[48px] md:text-[66px] text-[#800000]">Netflix Inc. </span>
          is the world's leading subscription-based streaming service, offering a vast catalog of films, TV shows, documentaries, and original content across 190+ countries. With over 260 million global subscribers, Netflix has revolutionized digital entertainment through its on-demand, ad-free (and now ad-supported) model, pioneering binge-watching and personalized content delivery.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-20 mb-60">
        {cards.map((title, index) => (
          <div 
            key={index} 
            data-card-index={index}
            className="sticky"
            style={{ 
              top: 0,
              zIndex: index + 1,
              marginTop: index === 0 ? 0 : '20px'
            }}
          >
            <Card onArrowClick={() => handleArrowClick(index)}>
              <h2 className="text-[#800000] text-4xl md:text-5xl lg:text-6xl font-normal text-center leading-tight font-[Average]">
                {title}
              </h2>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isProblemModalOpen && (
        <ProblemStatementModal 
          isOpen={isProblemModalOpen} 
          onClose={handleCloseProblemModal} 
        />
      )}
      {isOnboardingModalOpen && (
        <OnboardingUserExperienceModal
          isOpen={isOnboardingModalOpen}
          onClose={handleCloseOnboardingModal}
        />
      )}
      {isUserPersonaModalOpen && (
        <UserPersonaModal
          isOpen={isUserPersonaModalOpen}
          onClose={handleCloseUserPersonaModal}
        />
      )}
      {isCoreFeatureModalOpen && (
        <CoreFeatureAnalysisModal
          isOpen={isCoreFeatureModalOpen}
          onClose={handleCloseCoreFeatureModal}
        />
      )}
      {isMonetizationModalOpen && (
        <MonetizationStrategyModal
          isOpen={isMonetizationModalOpen}
          onClose={handleCloseMonetizationModal}
        />
      )}
      {isCompetitorsModalOpen && (
        <CompetitorsLandscapeModal
          isOpen={isCompetitorsModalOpen}
          onClose={handleCloseCompetitorsModal}
        />
      )}
      {isRecommendedAnalysisModalOpen && (
        <RecommendedAnalysisMetricsModal
          isOpen={isRecommendedAnalysisModalOpen}
          onClose={handleCloseRecommendedAnalysisModal}
        />
      )}
      {isSWOTModalOpen && (
        <SWOTAnalysisModal
          isOpen={isSWOTModalOpen}
          onClose={handleCloseSWOTModal}
        />
      )}
      {isFinalThoughtsModalOpen && (
        <FinalThoughtsModal
          isOpen={isFinalThoughtsModalOpen}
          onClose={handleCloseFinalThoughtsModal}
        />
      )}
    </div>
  );
};

export default Analysis; 