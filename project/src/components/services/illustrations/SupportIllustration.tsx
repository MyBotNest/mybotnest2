import React from 'react';

const SupportIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#7000ff" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Command center base */}
    <circle
      cx="100"
      cy="100"
      r="60"
      fill="url(#supportGradient)"
      className="animate-pulse"
    />
    
    {/* Rotating scanner */}
    <g className="origin-center animate-[spin_4s_linear_infinite]">
      <path
        d="M100 40A60 60 0 0 1 160 100"
        fill="none"
        stroke="#00f0ff"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </g>
    
    {/* Support indicators */}
    <g className="animate-pulse">
      <circle cx="100" cy="60" r="4" fill="#00f0ff" />
      <circle cx="140" cy="100" r="4" fill="#00f0ff" />
      <circle cx="100" cy="140" r="4" fill="#00f0ff" />
      <circle cx="60" cy="100" r="4" fill="#00f0ff" />
    </g>
    
    {/* Holographic screens */}
    <g className="animate-[pulse_2s_ease-in-out_infinite]">
      <rect x="70" y="85" width="60" height="30" rx="4" 
        fill="none" stroke="#00f0ff" strokeWidth="2" />
      <rect x="75" y="90" width="50" height="4" rx="2" 
        fill="#00f0ff" opacity="0.6" />
      <rect x="75" y="98" width="30" height="4" rx="2" 
        fill="#00f0ff" opacity="0.6" />
    </g>
  </svg>
);