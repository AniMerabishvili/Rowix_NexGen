import React, { useState } from 'react';
import { useFAQData } from '../../hooks/useMockData';
import FAQItem from '../ui/FAQItem';
import IconBox from '../ui/IconBox';
import { ArrowUpRight } from 'lucide-react';

export default function FAQ(): React.JSX.Element {
  const { data: faqData, loading, error } = useFAQData();
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  if (loading) {
    return (
      <section className="my-20 py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-6">
          {/* Header */}
          <div className="bg-surface rounded-2xl p-8 mb-8 flex items-center justify-between">
            <h2 className="text-text-main text-3xl md:text-4xl font-bold uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 bg-icon-surface/20 rounded-full border border-text-muted/20 animate-pulse"></div>
              <div className="h-4 bg-text-muted/20 rounded w-32"></div>
            </div>
          </div>
          
          {/* Loading Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Questions Column */}
            <div className="lg:col-span-8">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="bg-surface rounded-2xl p-6 mb-4 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="h-5 bg-ui-surface rounded w-3/4"></div>
                    <div className="w-10 h-10 bg-ui-surface rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Form Column */}
            <div className="lg:col-span-4">
              <div className="bg-surface rounded-3xl p-8 animate-pulse">
                <div className="h-6 bg-ui-surface rounded w-40 mb-8"></div>
                <div className="space-y-6">
                  <div>
                    <div className="h-3 bg-ui-surface rounded w-12 mb-2"></div>
                    <div className="h-12 bg-ui-surface rounded-lg"></div>
                  </div>
                  <div>
                    <div className="h-3 bg-ui-surface rounded w-12 mb-2"></div>
                    <div className="h-12 bg-ui-surface rounded-lg"></div>
                  </div>
                  <div>
                    <div className="h-3 bg-ui-surface rounded w-24 mb-2"></div>
                    <div className="h-32 bg-ui-surface rounded-lg"></div>
                  </div>
                  <div className="h-12 bg-ui-surface rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-20 py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-6 text-center">
          <div className="text-text-muted">Error loading FAQ: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="my-20 py-4 bg-background border-2 border-surface rounded-2xl">
      <div className="mx-auto px-6">
        {/* Header */}
        <div className="bg-surface rounded-2xl p-8 mb-8 flex items-center justify-between">
          <h2 className="text-text-main text-3xl md:text-4xl font-bold uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <IconBox icon={ArrowUpRight} variant="circular" size="md" />
            <span className="text-md font-medium text-text-muted uppercase">
              VIEW ALL
            </span>
          </button>
        </div>
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Questions (Span 8) */}
          <div className="lg:col-span-8">
            {faqData?.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
          
          {/* Column 2: Ask Your Question Form (Span 4) */}
          <div className="lg:col-span-4">
            <div className="bg-surface rounded-3xl p-8 h-fit">
              {/* Form Title */}
              <h3 className="text-text-main text-lg font-bold uppercase mb-8">
                ASK YOUR QUESTION
              </h3>
              
              {/* Form */}
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-text-muted text-xs font-bold uppercase mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-background border border-ui-surface rounded-lg p-4 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                {/* Email Field */}
                <div>
                  <label className="block text-text-muted text-xs font-bold uppercase mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-background border border-ui-surface rounded-lg p-4 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                
                {/* Question Field */}
                <div>
                  <label className="block text-text-muted text-xs font-bold uppercase mb-2">
                    YOUR QUESTION
                  </label>
                  <textarea
                    placeholder="Enter Your Question Here ....."
                    rows={4}
                    className="w-full bg-background border border-ui-surface rounded-lg p-4 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-background font-bold text-sm uppercase py-4 rounded-md hover:opacity-90 transition-opacity"
                >
                  SEND YOUR MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
