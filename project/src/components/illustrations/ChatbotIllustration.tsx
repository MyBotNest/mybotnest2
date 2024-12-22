import React from 'react';

const ChatbotIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-32 h-32">
    <defs>
      <linearGradient id="chatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
      </linearGradient>
      <filter id="chatGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Main chat bubble */}
    <path
      d="M40 80C40 55.2 60.2 35 85 35h30c24.8 0 45 20.2 45 45v30c0 24.8-20.2 45-45 45H95l-25 20V155c-17.4-5-30-21-30-45V80z"
      fill="url(#chatGradient)"
      className="transition-all duration-500 group-hover:filter group-hover:brightness-125"
      filter="url(#chatGlow)"
    />
    
    {/* Circuit paths */}
    <path
      d="M70 80h60M70 100h40M70 120h30"
      stroke="rgba(255,255,255,0.6)"
      strokeWidth="4"
      strokeLinecap="round"
      className="transition-all duration-500 group-hover:stroke-blue-300"
    />
    
    {/* AI nodes */}
    <circle cx="140" cy="80" r="4" fill="#fff" className="animate-pulse" />
    <circle cx="120" cy="100" r="4" fill="#fff" className="animate-pulse" />
    <circle cx="110" cy="120" r="4" fill="#fff" className="animate-pulse" />
  </svg>
);

export default ChatbotIllustration;