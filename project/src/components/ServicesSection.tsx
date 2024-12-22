import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Custom Chatbots',
    description: 'Empower your business with AI-driven chatbots designed to streamline processes, engage customers 24/7, and drive growth effortlessly.',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800&h=600',
    imageAlt: 'AI chatbot interface with dynamic conversation bubbles'
  },
  {
    title: 'CRM Integrations',
    description: 'Optimize your CRM experience with seamless integrations that boost efficiency, enhance customer insights, and maximize relationship management.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    imageAlt: 'Modern CRM dashboard with data visualizations'
  },
  {
    title: '24/7 Customer Support',
    description: 'Deliver exceptional customer service with 24/7 intelligent support that reduces response times and keeps your customers delighted.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600',
    imageAlt: 'Professional customer support representative with modern technology'
  },
  {
    title: 'Smart Scheduling',
    description: 'Simplify task management and scheduling with smart AI solutions that save time, reduce missed opportunities, and keep you ahead.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=600',
    imageAlt: 'Smart calendar interface with AI scheduling features'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

export default ServicesSection;