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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6' }}>
      <style>{keyframesStyle}</style> {/* Inline keyframes definition */}
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', ...flashStyle }}>
          Batch Started from 27 July
        </h1>
      </div>
    </div>
  );
};

export default FlashMessage;
