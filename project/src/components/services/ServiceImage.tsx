import React from 'react';

interface ServiceImageProps {
  imageUrl: string;
  imageUrlJpg: string;
  imageAlt: string;
}

const ServiceImage: React.FC<ServiceImageProps> = ({ imageUrl, imageUrlJpg, imageAlt }) => {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-xl">
      <div className="absolute -inset-4 bg-gradient-to-r from-[#2B3BFF]/20 to-[#9B3BFF]/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <picture>
        <source srcSet={imageUrl} type="image/webp" />
        <img
          src={imageUrlJpg}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105"
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-[#151823]/80 to-transparent opacity-60" />
    </div>
  );
};