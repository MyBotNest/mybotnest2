import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';

function App() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
      </div>
    </main>
  );
}

export default App;
