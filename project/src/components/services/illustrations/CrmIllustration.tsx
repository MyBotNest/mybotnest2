import React from 'react';

const CrmIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="crmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#7000ff" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Central data hub */}
    <circle
      cx="100"
      cy="100"
      r="40"
      fill="url(#crmGradient)"
      className="animate-pulse"
    />
    
    {/* Rotating connection rings */}
    <g className="animate-[spin_10s_linear_infinite]">
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="#00f0ff"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </g>
    <g className="animate-[spin_15s_linear_infinite_reverse]">
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke="#7000ff"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </g>
    
    {/* Data nodes with connections */}
    <g className="animate-pulse">
      <circle cx="160" cy="100" r="8" fill="#00f0ff" />
      <circle cx="100" cy="40" r="8" fill="#00f0ff" />
      <circle cx="40" cy="100" r="8" fill="#00f0ff" />
      <circle cx="100" cy="160" r="8" fill="#00f0ff" />
      
      <path
        d="M100 40L160 100L100 160L40 100z"
        fill="none"
        stroke="#00f0ff"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </g>
  </svg>
);