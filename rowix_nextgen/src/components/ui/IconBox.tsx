import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface IconBoxProps {
  icon: LucideIcon;
  className?: string;
  variant?: 'square' | 'circular';
  size?: 'sm' | 'md' | 'lg';
}

export default function IconBox({ 
  icon: Icon, 
  className = '', 
  variant = 'square',
  size = 'md'
}: IconBoxProps): React.JSX.Element {
  const sizeClasses = {
    sm: 'w-10 h-10 p-2.5',
    md: 'w-14 h-14 p-3',
    lg: 'w-16 h-16 p-4'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const roundedClass = variant === 'circular' ? 'rounded-full' : 'rounded-xl';

  return (
    <div 
      className={`
        bg-icon-surface
        border border-text-muted/20
        ${roundedClass}
        ${sizeClasses[size]}
        flex items-center justify-center
        text-primary
        ${className}
      `}
    >
      <Icon className={iconSizeClasses[size]} />
    </div>
  );
}

