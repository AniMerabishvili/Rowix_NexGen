import React from 'react';
import { useTestimonialsData } from '../../hooks/useMockData';
import TestimonialCard from '../ui/TestimonialCard';
import IconBox from '../ui/IconBox';
import { ArrowUpRight } from 'lucide-react';

export default function Testimonials(): React.JSX.Element {
  const { data: testimonialsData, loading, error } = useTestimonialsData();

  if (loading) {
    return (
      <section className="my-20 py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-6">
          {/* Header */}
          <div className="bg-surface rounded-2xl p-8 mb-8 flex items-center justify-between">
            <h2 className="text-text-main text-3xl md:text-4xl font-bold uppercase">
              TESTIMONIALS
            </h2>
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <IconBox icon={ArrowUpRight} variant="circular" size="md" />
              <span className="text-md font-medium text-text-muted uppercase">
                ALL TESTIMONIALS
              </span>
            </button>
          </div>
          
          {/* Loading Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <TestimonialCard key={index} isLoading={true} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-20 py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-6 text-center">
          <div className="text-text-muted">Error loading testimonials: {error}</div>
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
            TESTIMONIALS
          </h2>
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <IconBox icon={ArrowUpRight} variant="circular" size="md" />
            <span className="text-md font-medium text-text-muted uppercase">
              ALL TESTIMONIALS
            </span>
          </button>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData?.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
