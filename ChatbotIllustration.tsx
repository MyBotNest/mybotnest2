import React from 'react';

const ChatbotIllustration: React.FC = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="chatbotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#7000ff" stopOpacity="0.6" />
      </linearGradient>
      <filter id="chatbotGlow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Robot head base */}
    <path
      d="M60 70c0-22 18-40 40-40s40 18 40 40v30c0 22-18 40-40 40s-40-18-40-40V70z"
      fill="url(#chatbotGradient)"
      filter="url(#chatbotGlow)"
      className="animate-pulse"
    />
    
    {/* Glowing eyes */}
    <g className="animate-[ping_2s_ease-in-out_infinite]">
      <circle cx="85" cy="85" r="8" fill="#00f0ff" />
      <circle cx="115" cy="85" r="8" fill="#00f0ff" />
    </g>
    
    {/* Animated circuit paths */}
    <g className="animate-pulse">
      <path
        d="M70 120h60M70 130h40"
        stroke="#00f0ff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </g>
    
    {/* Floating message bubbles */}
    <g className="animate-bounce">
      <circle cx="150" cy="60" r="15" fill="#00f0ff" opacity="0.6" />
      <circle cx="170" cy="40" r="10" fill="#7000ff" opacity="0.4" />
    </g>
  </svg>
);