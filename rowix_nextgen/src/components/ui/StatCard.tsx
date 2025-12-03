import React from 'react';
import { StatCardProps } from '../../types';

export default function StatCard({ label, value, isLoading = false }: StatCardProps) {
  if (isLoading) {
    return (
      <div className="bg-surface rounded-2xl p-3 flex flex-col items-center justify-center text-center animate-pulse">
        <div className="h-5 bg-text-main/20 rounded w-20 mb-2"></div>
        <div className="h-16 bg-light-orange/20 rounded w-16"></div>
      </div>
    );
  }

  return (
     <div className="bg-icon-surface rounded-2xl p-3 flex flex-col items-center justify-center text-center">
      {/* Label */}
      <div className="text-text-mono text-sm mb-2 font-mono font-normal">
        {label}
      </div>
      
      {/* Value */}
      <div className="text-light-orange text-4xl font-semibold leading-none">
        {value}
      </div>
    </div>
  );
}
