import React from 'react';

const CrmIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-32 h-32">
    <defs>
      <linearGradient id="crmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
      </linearGradient>
      <filter id="crmGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Connection nodes */}
    <circle cx="100" cy="100" r="40" fill="url(#crmGradient)" filter="url(#crmGlow)" 
      className="transition-all duration-500 group-hover:filter group-hover:brightness-125" />
    
    {/* Orbital rings */}
    <g className="transition-all duration-500 group-hover:opacity-80">
      <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(59,130,246,0.3)" 
        strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(59,130,246,0.2)" 
        strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_15s_linear_infinite_reverse]" />
    </g>
    
    {/* Data points */}
    <g className="animate-pulse">
      <circle cx="160" cy="100" r="6" fill="#fff" />
      <circle cx="100" cy="40" r="6" fill="#fff" />
      <circle cx="40" cy="100" r="6" fill="#fff" />
      <circle cx="100" cy="160" r="6" fill="#fff" />
    </g>
  </svg>
);

export default CrmIllustration;