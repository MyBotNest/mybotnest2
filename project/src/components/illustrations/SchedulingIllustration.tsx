import React from 'react';

const SchedulingIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-32 h-32">
    <defs>
      <linearGradient id="scheduleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
      </linearGradient>
      <filter id="scheduleGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Calendar base */}
    <rect x="40" y="40" width="120" height="120" rx="10" 
      fill="url(#scheduleGradient)" filter="url(#scheduleGlow)"
      className="transition-all duration-500 group-hover:filter group-hover:brightness-125" />
    
    {/* Calendar grid */}
    <g stroke="rgba(255,255,255,0.4)" strokeWidth="2">
      <line x1="40" y1="80" x2="160" y2="80" />
      <line x1="40" y1="120" x2="160" y2="120" />
      <line x1="80" y1="80" x2="80" y2="160" />
      <line x1="120" y1="80" x2="120" y2="160" />
    </g>
    
    {/* AI accent elements */}
    <g className="animate-pulse">
      <circle cx="100" cy="100" r="4" fill="#fff" />
      <circle cx="140" cy="140" r="4" fill="#fff" />
      <circle cx="60" cy="100" r="4" fill="#fff" />
    </g>
    
    {/* Circuit paths */}
    <path
      d="M100 100L140 140M100 100L60 100"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="2"
      strokeLinecap="round"
      className="transition-all duration-500 group-hover:stroke-blue-300"
    />
  </svg>
);

export default SchedulingIllustration;