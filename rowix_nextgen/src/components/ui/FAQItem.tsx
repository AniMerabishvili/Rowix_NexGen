import React from 'react';
import { FAQItemProps } from '../../types';
import IconBox from './IconBox';
import { Plus, Minus } from 'lucide-react';

export default function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="bg-surface rounded-2xl mb-4 overflow-hidden">
      {/* Header - Clickable */}
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between cursor-pointer hover:bg-ui-surface/30 transition-colors"
      >
        {/* Question Text */}
        <span className="text-text-main font-bold text-left pr-4">
          {faq.question}
        </span>
        
        {/* Toggle Icon */}
        <div className="flex-shrink-0">
          <IconBox 
            icon={isOpen ? Minus : Plus} 
            variant="circular" 
            size="sm"
          />
        </div>
      </button>
      
      {/* Body - Expandable */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-text-muted text-sm leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

