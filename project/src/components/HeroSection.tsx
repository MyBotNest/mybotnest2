import React from 'react';
import { Zap, Bot, Gauge, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse" />
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
          opacity: '0.2'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Supercharge text with glow effect */}
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mb-2 animate-glow">
              Supercharge
            </h1>
            <div className="absolute -inset-1 blur-xl bg-blue-500/30 -z-10 animate-pulse-slow" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Your Business Growth with AI-Powered Automation
          </h1>

          <p className="text-xl text-blue-100/90 mb-12 leading-relaxed">
            Transform your customer service, sales, and operations with custom AI solutions that work 24/7. 
            Save 40+ hours per week while increasing revenue.
          </p>

          {/* CTA Button with glow effect */}
          <button className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200" />
            <div className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center">
              <span className="text-blue-100 group-hover:text-blue-50 transition duration-200 text-lg font-semibold">
                Unlock Your AI Strategy
              </span>
              <Zap className="w-5 h-5 ml-2 text-blue-200 animate-pulse" />
            </div>
          </button>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: Bot,
                title: '24/7 AI Operations',
                description: 'Automated workflows that never sleep'
              },
              {
                icon: Gauge,
                title: '40% Faster Growth',
                description: 'Accelerate your business metrics'
              },
              {
                icon: Clock,
                title: 'Save 40+ Hours',
                description: 'Reclaim time with smart automation'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100/75">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;