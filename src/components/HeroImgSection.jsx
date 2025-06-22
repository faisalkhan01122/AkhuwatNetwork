import React from 'react';

const HeroImgSection = ({ imageUrl, text }) => {
  return (
    <div className="relative w-full h-64 md:h-96  overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h2 className="text-white text-xl md:text-4xl font-bold text-center px-4">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default HeroImgSection;
