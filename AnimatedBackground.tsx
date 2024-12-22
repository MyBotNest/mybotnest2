import React from 'react';
import EnergyGrid from './EnergyGrid';
import EnergyWaves from './EnergyWaves';
import FloatingParticles from './FloatingParticles';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a]">
      <EnergyGrid />
      <EnergyWaves />
      <FloatingParticles />
    </div>
  );
};

export default AnimatedBackground;