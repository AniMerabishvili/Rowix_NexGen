import React from 'react';

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className = "", ...props }: SectionTagProps): React.JSX.Element {
  return (
    <span 
      className={`text-primary text-sm font-semibold uppercase ${className}`} 
      {...props}
    >
      {children}
    </span>
  );
}
