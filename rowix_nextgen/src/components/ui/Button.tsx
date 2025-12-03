import React from 'react';
import { ButtonProps } from '../../types';

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-background hover:opacity-90",
    outline: "bg-transparent border border-text-main text-text-main hover:bg-text-main hover:text-background",
    icon: "bg-background border border-text-muted hover:opacity-90 flex items-center justify-center w-12 h-12 rounded-full p-0"
  };

  if (variant === "icon") {
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`} 
        {...props}
      >
        <span className="text-light-orange text-xl font-bold">↗</span>
      </button>
    );
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}
