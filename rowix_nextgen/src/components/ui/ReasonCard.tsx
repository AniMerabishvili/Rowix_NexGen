import React from 'react';
import Button from './Button';
import { ReasonCardProps } from '../../types';

export default function ReasonCard({ title, description, isLoading = false }: ReasonCardProps) {
  if (isLoading) {
    return (
      <div className="bg-surface rounded-3xl p-8 animate-pulse">
        <div className="h-6 bg-text-main/20 rounded w-3/4 mb-4"></div>
        <div className="space-y-2 mb-8">
          <div className="h-4 bg-text-muted/20 rounded"></div>
          <div className="h-4 bg-text-muted/20 rounded"></div>
          <div className="h-4 bg-text-muted/20 rounded w-2/3"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-background/20 rounded-full"></div>
          <div className="h-4 bg-text-main/20 rounded w-20"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-3xl p-8 flex flex-col h-full">
      {/* Title */}
      <h3 className="text-text-main text-lg font-bold uppercase mb-4 leading-tight">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      {/* Action Footer */}
      <div className="flex items-center gap-2 mt-auto">
        <Button variant="icon" />
        <span className="text-text-main text-sm font-medium">Learn More</span>
      </div>
    </div>
  );
}
