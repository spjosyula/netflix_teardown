import React from 'react';

const Card = ({ children, onArrowClick }) => {
  const handleClick = () => {
    onArrowClick();
  };

  return (
    <div className="w-[90%] md:w-[800px] mx-auto bg-black rounded-[2rem] shadow-lg p-8 h-[400px] my-8 flex flex-col items-center justify-between relative">
      <div className="flex-1 flex items-center justify-center w-full">
        {children}
      </div>
      <button 
        onClick={handleClick}
        className="text-white text-5xl md:text-6xl font-black hover:scale-110 transition-transform duration-200 absolute bottom-8 right-8"
      >
        →
      </button>
    </div>
  );
};

export default Card; 