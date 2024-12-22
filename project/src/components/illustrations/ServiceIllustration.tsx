import React from 'react';
import ChatbotIllustration from './ChatbotIllustration';
import CrmIllustration from './CrmIllustration';
import SupportIllustration from './SupportIllustration';
import SchedulingIllustration from './SchedulingIllustration';

interface ServiceIllustrationProps {
  service: string;
}

const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({ service }) => {
  const getIllustration = () => {
    switch (service) {
      case 'Custom Chatbots':
        return <ChatbotIllustration />;
      case 'CRM Integrations':
        return <CrmIllustration />;
      case '24/7 Customer Support':
        return <SupportIllustration />;
      case 'Smart Scheduling':
        return <SchedulingIllustration />;
      default:
        return null;
    }
  };

  return (
    <div className="transition-transform duration-500 group-hover:scale-110">
      {getIllustration()}
    </div>
  );
};

export default ServiceIllustration;