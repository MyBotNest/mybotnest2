import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const EnergyWaves: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div 
        className={`absolute inset-0 opacity-30 ${!prefersReducedMotion ? 'animate-wave' : ''}`}
        style={{
          background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, transparent 75%)',
          transform: 'translateZ(0)',
        }}
      />
      <div 
        className={`absolute inset-0 opacity-20 ${!prefersReducedMotion ? 'animate-wave-reverse' : ''}`}
        style={{
          background: 'linear-gradient(-45deg, rgba(59, 130, 246, 0.1) 0%, transparent 75%)',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
};

export default EnergyWaves;