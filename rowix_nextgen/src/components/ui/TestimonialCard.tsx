import React from 'react';
import { TestimonialCardProps } from '../../types';
import IconBox from './IconBox';
import { ArrowDownRight } from 'lucide-react';

export default function TestimonialCard({ testimonial, isLoading = false }: TestimonialCardProps) {
  if (isLoading || !testimonial) {
    return (
      <div className="bg-surface rounded-md p-8 flex flex-col justify-between h-full animate-pulse">
        {/* Top Part - Review Skeleton */}
        <div>
          <div className="h-6 bg-ui-surface rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-ui-surface rounded w-1/2 mb-6"></div>
          <div className="space-y-2">
            <div className="h-4 bg-ui-surface rounded w-full"></div>
            <div className="h-4 bg-ui-surface rounded w-full"></div>
            <div className="h-4 bg-ui-surface rounded w-2/3"></div>
          </div>
        </div>
        
        {/* Bottom Part - Profile Skeleton */}
        <div className="flex items-center justify-between mt-8 bg-primary">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-ui-surface rounded-full"></div>
            <div className="ml-4">
              <div className="h-4 bg-ui-surface rounded w-24 mb-2"></div>
              <div className="h-3 bg-ui-surface rounded w-20"></div>
            </div>
          </div>
          <div className="w-14 h-14 bg-icon-surface/20 rounded-full border border-text-muted/20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-md p-8 flex flex-col justify-between h-full">
      {/* Top Part - Review */}
      <div>
        {/* Headline */}
        <h3 className="text-text-main text-lg font-bold uppercase mb-4 leading-tight">
          {testimonial.title}
        </h3>
        
        {/* Body Text */}
        <p className="text-text-muted text-sm leading-relaxed">
          {testimonial.content}
        </p>
      </div>
      
      {/* Bottom Part - Profile */}
      <div className="flex items-center justify-between mt-8">
        {/* Left - Avatar & Info */}
        <div className="flex items-center">
          {/* Avatar */}
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover bg-primary"
          />
          
          {/* Text Info */}
          <div className="ml-4">
            <p className="text-text-main font-bold text-base">
              {testimonial.name}
            </p>
            <p className="text-text-muted text-xs">
              {testimonial.role}
            </p>
          </div>
        </div>
        
        {/* Right - Arrow Button */}
        <button className="hover:opacity-80 transition-opacity">
          <IconBox icon={ArrowDownRight} variant="circular" size="md" />
        </button>
      </div>
    </div>
  );
}

