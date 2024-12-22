import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const EnergyGrid: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div 
        className={`absolute inset-0 bg-grid ${!prefersReducedMotion ? 'animate-grid-pulse' : ''}`}
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'translateZ(0)',
        }}
      />
      <div 
        className={`absolute inset-0 bg-grid ${!prefersReducedMotion ? 'animate-grid-move' : ''}`}
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  );
};

export default EnergyGrid;