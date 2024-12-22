import React from 'react';
import AnimatedBackground from './components/background/AnimatedBackground';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

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