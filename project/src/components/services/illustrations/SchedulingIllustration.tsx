import React from 'react';

const SchedulingIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="scheduleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#7000ff" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    
    {/* Calendar base */}
    <rect
      x="40"
      y="40"
      width="120"
      height="120"
      rx="10"
      fill="url(#scheduleGradient)"
      className="animate-pulse"
    />
    
    {/* AI optimization indicators */}
    <g className="animate-[pulse_2s_ease-in-out_infinite]">
      <circle cx="80" cy="90" r="10" fill="#00f0ff" opacity="0.6" />
      <circle cx="120" cy="90" r="10" fill="#7000ff" opacity="0.6" />
      <circle cx="80" cy="130" r="10" fill="#7000ff" opacity="0.6" />
      <circle cx="120" cy="130" r="10" fill="#00f0ff" opacity="0.6" />
    </g>
    
    {/* Robotic arm */}
    <g className="animate-[pulse_1.5s_ease-in-out_infinite]">
      <path
        d="M100 100L140 140M100 100L60 100"
        stroke="#00f0ff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="6" fill="#00f0ff" />
      <circle cx="140" cy="140" r="6" fill="#00f0ff" />
      <circle cx="60" cy="100" r="6" fill="#00f0ff" />
    </g>
  </svg>
);