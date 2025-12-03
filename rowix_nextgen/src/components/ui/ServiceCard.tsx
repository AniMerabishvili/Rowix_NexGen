import React from 'react';
import { ServiceCardProps } from '../../types';
import IconBox from './IconBox';
import { PenTool, Smartphone, Code2, LayoutGrid, ArrowUpRight, LucideIcon } from 'lucide-react';

// Icon mapping for service icons
const iconMap: Record<string, LucideIcon> = {
  PenTool,
  Smartphone,
  Code2,
  LayoutGrid
};

export default function ServiceCard({ service, isLoading = false }: ServiceCardProps) {
  if (isLoading || !service) {
    return (
      <div className="bg-surface rounded-3xl p-10 animate-pulse">
        {/* Top Row */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-background/20 rounded-lg"></div>
            <div className="h-6 bg-text-main/20 rounded w-32 ml-4"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-icon-surface/20 rounded-full border border-text-muted/20"></div>
            <div className="h-4 bg-text-muted/20 rounded w-20"></div>
          </div>
        </div>
        
        {/* Description */}
        <div className="space-y-2 mb-12">
          <div className="h-4 bg-text-muted/20 rounded"></div>
          <div className="h-4 bg-text-muted/20 rounded"></div>
          <div className="h-4 bg-text-muted/20 rounded w-3/4"></div>
        </div>
        
        {/* Price */}
        <div className="h-8 bg-text-main/20 rounded w-48 ml-auto"></div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || PenTool;

  return (
    <div className="bg-surface rounded-3xl p-10">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center">
          {/* Icon Container */}
          <IconBox icon={IconComponent} />
          {/* Title */}
          <h3 className="text-xl font-bold text-text-main uppercase ml-4">
            {service.title}
          </h3>
        </div>
        
        {/* Book a Call Button */}
        <div className="flex items-center gap-2">
          <IconBox icon={ArrowUpRight} variant="circular" size="md" />
          <span className="text-md font-medium text-text-muted uppercase">
            BOOK A CALL
          </span>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-text-main/60 text-sm leading-relaxed mt-8 mb-12 max-w-lg">
        {service.description}
      </p>
      
      {/* Price */}
      <div className="text-right">
        <p className="text-2xl font-bold text-text-main">
          {service.price}
        </p>
      </div>
    </div>
  );
}
