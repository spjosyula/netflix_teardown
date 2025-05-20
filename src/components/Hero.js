import React from 'react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  const netflixRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (netflixRef.current) {
      // Initial red color animation
      setTimeout(() => {
        netflixRef.current.classList.add('text-netflix-red');
      }, 500);

      // Maroon color animation
      setTimeout(() => {
        netflixRef.current.style.transition = 'color 1.5s ease-in-out';
        netflixRef.current.style.color = '#800000';
      }, 2000);
    }
  }, []);

  const handleDigIn = () => {
    navigate('/analysis');
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center netflix-linear-gradient-bg">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="relative" style={{ width: '515px', height: '176px', maxWidth: '95vw' }}>
          <span className="absolute top-[-10px] left-0 font-[Average] text-white text-[36px] leading-none sm:text-[36px] text-[28px]" style={{ width: '60px', height: '36px' }}>The</span>
          <span
            ref={netflixRef}
            className="absolute top-[18px] left-[48px] font-[Chonburi] text-white text-[128px] leading-none transition-colors duration-1000 sm:text-[128px] text-[96px]"
            style={{ width: '467px', height: '128px', zIndex: 1 }}
          >
            Netflix
          </span>
          <span className="absolute font-[Average] text-white text-[36px] leading-none sm:text-[36px] text-[28px] sm:top-[140px] sm:left-[366px] top-[110px] left-[250px]" style={{ width: '149px', height: '36px' }}>Teardown</span>
        </div>
        <div className="flex justify-center w-full mt-20">
          <Button className="hero-btn" onClick={handleDigIn}>Let's Dig In</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;