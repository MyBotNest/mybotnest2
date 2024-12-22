import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'AI Chatbot Assistant',
    description: 'Next-gen conversational AI with natural language processing and contextual understanding for seamless customer interactions.'
  },
  {
    title: 'Smart CRM Integration',
    description: 'Intelligent customer relationship management with predictive analytics and automated workflow optimization.'
  },
  {
    title: '24/7 Support Hub',
    description: 'Round-the-clock AI-powered support system with real-time issue resolution and proactive assistance.'
  },
  {
    title: 'AI Scheduler',
    description: 'Advanced scheduling automation with machine learning for optimal time management and resource allocation.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated background grid */}
      <div 
        className="absolute inset-0 bg-[#151823]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #00f0ff10 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: '-12px -12px',
        }}
      />
      
      <div className="relative container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#ff00ea]">
            AI-Powered Solutions
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};