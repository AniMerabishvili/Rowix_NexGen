import React from 'react';
import { useFooterData } from '../../hooks/useMockData';

export default function CTA(): React.JSX.Element {
  const { data: footerData, loading } = useFooterData();

  if (loading || !footerData) {
    return (
      <div className="w-full rounded-3xl p-8 md:p-20 mb-8 bg-primary animate-pulse">
        <div className="h-12 bg-background/20 rounded w-3/4 mb-6"></div>
        <div className="h-4 bg-background/20 rounded w-full max-w-xl mb-2"></div>
        <div className="h-4 bg-background/20 rounded w-2/3 max-w-xl mb-10"></div>
        <div className="h-14 bg-background/20 rounded w-48"></div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-3xl p-10 md:p-16 bg-primary flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      {/* Left Content */}
      <div className="flex-1">
        {/* Title */}
        <h2 className="text-background text-3xl md:text-4xl lg:text-5xl font-medium uppercase mb-4 leading-tight">
          {footerData.cta.title}
        </h2>
        
        {/* Description */}
        <p className="text-background/70 text-sm max-w-2xl leading-relaxed">
          {footerData.cta.text}
        </p>
      </div>
      
      {/* Right - Button */}
      <button className="bg-background text-text-main font-bold uppercase px-8 py-4 rounded-xl flex items-center gap-3 hover:opacity-90 transition-opacity flex-shrink-0">
        {footerData.cta.buttonText}
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m7 7 10 10" />
          <path d="M17 7v10H7" />
        </svg>
      </button>
    </div>
  );
}

