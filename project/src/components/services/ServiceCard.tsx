import React from 'react';
import { useParticleEffect } from './animations/useParticleEffect';
import ServiceIllustration from './ServiceIllustration';

interface ServiceCardProps {
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  delay
}) => {
  const particleCanvasRef = useParticleEffect('#00f0ff');

  return (
    <div
      className="group relative transform hover:translate-y-[-2px] transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Particle canvas */}
      <canvas
        ref={particleCanvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00f0ff] to-[#ff00ea] rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition-all duration-300" />
      
      {/* Card content */}
      <div className="relative p-8 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-300 group-hover:border-[#00f0ff]/50">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* 3D Illustration */}
          <div className="relative w-40 h-40">
            <div className="absolute -inset-4 bg-[#00f0ff]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <ServiceIllustration service={title} />
          </div>
          
          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#00f0ff] group-hover:text-white transition-colors duration-300">
              {title}
            </h3>
            <p className="text-cyan-100/75 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Holographic line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};