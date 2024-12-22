import React from 'react';

const SupportIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-32 h-32">
    <defs>
      <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
      </linearGradient>
      <filter id="supportGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Clock face */}
    <circle cx="100" cy="100" r="60" fill="url(#supportGradient)" filter="url(#supportGlow)"
      className="transition-all duration-500 group-hover:filter group-hover:brightness-125" />
    
    {/* Headset */}
    <path
      d="M60 100a40 40 0 0 1 80 0"
      fill="none"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="6"
      strokeLinecap="round"
      className="transition-all duration-500 group-hover:stroke-blue-300"
    />
    
    {/* Clock hands */}
    <g className="origin-center animate-[spin_10s_linear_infinite]">
      <line x1="100" y1="100" x2="100" y2="60" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <line x1="100" y1="100" x2="130" y2="100" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    </g>
    
    {/* Support indicators */}
    <g className="animate-pulse">
      <circle cx="100" cy="60" r="4" fill="#fff" />
      <circle cx="140" cy="100" r="4" fill="#fff" />
      <circle cx="100" cy="140" r="4" fill="#fff" />
      <circle cx="60" cy="100" r="4" fill="#fff" />
    </g>
  </svg>
);

export default SupportIllustration;