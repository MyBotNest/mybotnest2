import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  imageAlt,
  delay 
}) => {
  return (
    <div
      className="group relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-50 blur-lg transition duration-500" />
      
      {/* Card content */}
      <div className="relative p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 transform transition duration-500 group-hover:scale-[1.02] group-hover:border-blue-500/50">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Image Container */}
          <div className="relative w-full aspect-video overflow-hidden rounded-xl">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
          </div>
          
          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-blue-100/75 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20">
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-4 right-8 w-1 h-1 bg-blue-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity" />
          <div className="absolute top-8 right-4 w-1 h-1 bg-blue-400 rounded-full opacity-30 group-hover:opacity-60 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;