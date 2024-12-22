import React from 'react';
import ChatbotIllustration from './illustrations/ChatbotIllustration';
import CrmIllustration from './illustrations/CrmIllustration';
import SupportIllustration from './illustrations/SupportIllustration';
import SchedulingIllustration from './illustrations/SchedulingIllustration';

interface ServiceIllustrationProps {
  service: string;
}

const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({ service }) => {
  const getIllustration = () => {
    switch (service) {
      case 'AI Chatbot Assistant':
        return <ChatbotIllustration />;
      case 'Smart CRM Integration':
        return <CrmIllustration />;
      case '24/7 Support Hub':
        return <SupportIllustration />;
      case 'AI Scheduler':
        return <SchedulingIllustration />;
      default:
        return null;
    }
  };

  return (
    <div className="w-40 h-40 mx-auto transition-transform duration-500 group-hover:scale-110">
      {getIllustration()}
    </div>
  );
};