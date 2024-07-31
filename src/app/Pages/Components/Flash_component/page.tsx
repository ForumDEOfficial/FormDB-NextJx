"use client";

import React from 'react';

const FlashMessage = () => {
  const flashStyle = {
    animation: 'flash 2s infinite',
  };

  const keyframesStyle = `
    @keyframes flash {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;

  return (
    <div className="flex border-2 p-6 w-fit shadow-xl bg-gray-100 mx-auto my-10 md:mx-20 content-center">
      <style>{keyframesStyle}</style> {/* Inline keyframes definition */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">Next Batch Starting From</h1>
        <h1 className="px-3 text-2xl md:text-3xl lg:text-4xl font-bold" style={flashStyle}>
          27 July 2024
        </h1>
      </div>
    </div>
  );
};

export default FlashMessage;
