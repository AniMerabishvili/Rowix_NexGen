import React from 'react';
import { SocialCardProps } from '../../types';
import Button from './Button';
import IconBox from './IconBox';
import { Instagram, Twitter, Dribbble, LayoutGrid, ArrowUpRight, LucideIcon } from 'lucide-react';

// Icon mapping for social icons
const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Twitter,
  Dribbble,
  Behance: LayoutGrid // Using LayoutGrid for Behance as per request
};

export default function SocialCard({ social }: SocialCardProps) {
  const IconComponent = iconMap[social.icon] || Instagram;

  return (
    <a 
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-surface rounded-3xl p-8 flex flex-col justify-between h-64 hover:bg-ui-surface/50 transition-colors group"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        {/* Icon Box */}
        <IconBox icon={IconComponent} />
        
        {/* Arrow Button */}
        <IconBox icon={ArrowUpRight} variant="circular" size="md" />
      </div>
      
      {/* Body */}
      <div>
        {/* Title */}
        <h3 className="text-text-main font-bold uppercase mb-2">
          {social.name}
        </h3>
        
        {/* Description */}
        <p className="text-text-muted text-sm leading-relaxed">
          {social.description}
        </p>
      </div>
    </a>
  );
}

