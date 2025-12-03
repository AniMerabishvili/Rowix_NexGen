import React from 'react';
import { useHeroData } from '../../hooks/useMockData';
import heroImg from '../../assets/images/hero/heroimg.png';
import Arrow from '../../assets/images/hero/arrow.svg';
import TitleArrow from '../../assets/images/hero/titleArrow.svg';

export default function Hero(): React.JSX.Element {
  const { data: heroData, loading, error } = useHeroData();

  if (loading) {
    return (
      <section className="mx-auto pt-[120px] pb-8">
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          <div className="md:col-span-2 bg-surface p-4 rounded-2xl flex flex-col justify-center animate-pulse">
            <div className="pt-20 px-12">
              <div className="h-16 bg-ui-surface rounded-xl mb-8 w-3/4"></div>
              <div className="h-8 bg-ui-surface rounded-xl mb-4 w-1/2"></div>
              <div className="h-4 bg-ui-surface rounded mb-2 w-full max-w-2xl"></div>
              <div className="h-4 bg-ui-surface rounded w-2/3 max-w-2xl"></div>
            </div>
          </div>
          <div className="md:col-span-1 bg-surface rounded-2xl flex flex-col animate-pulse">
            <div className="h-48 bg-ui-surface rounded-2xl m-4"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !heroData) {
    return (
      <section className="mx-auto pt-[120px] pb-8">
        <div className="text-center text-text-muted">
          Error loading hero section
        </div>
      </section>
    );
  }

  // Duplicate marquee items for seamless loop
  const marqueeItems = [...heroData.marqueeItems, ...heroData.marqueeItems];

  return (
    <section className="mx-auto pt-[120px] pb-8">
      <div className="grid md:grid-cols-3 gap-5 items-stretch">
        
        {/* Left Column - Text Content (2x width) */}
        <div className="md:col-span-2 bg-surface p-4 rounded-2xl flex flex-col justify-center">
          <div className="pt-20 px-12">
          {/* Main Title */}
          <h1 className="text-text-main text-5xl md:text-6xl font-bold leading-tight mb-8">
            <span className="inline-flex items-center gap-4">
              {heroData.title}
              <button className="text-primary py-3 rounded-full text-xl font-medium uppercase flex items-center gap-2 hover:opacity-90 transition-opacity">
                <img src={TitleArrow} alt="Arrow icon" className="h-16 w-auto" />
                {heroData.ctaText}
              </button>
            </span>
            <br />
            {heroData.titleHighlight}
          </h1>
          
          {/* Paragraph */}
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl mb-12">
            {heroData.description}
          </p>
        
          </div>
          
        
        {/* Marquee Section */}
      <div className="mt-8 overflow-hidden bg-ui-surface p-4 rounded-xl">
         <div className="flex items-center gap-8 text-text-muted text-lg uppercase tracking-widest font-mono font-large animate-marquee whitespace-nowrap">
           {marqueeItems.map((item, index) => (
             <React.Fragment key={index}>
               <span>{item}</span>
               <span className="text-primary text-xl">•</span>
             </React.Fragment>
           ))}
         </div>
      </div>
        </div>
        
         {/* Right Column - Image (1x width) */}
         <div className="md:col-span-1 bg-surface rounded-2xl flex flex-col">
           <div className="mb-6 relative">
             <img 
               src={heroImg} 
               alt={heroData.featuredProject.title} 
               className="w-full aspect-[4/3] object-cover rounded-2xl"
             />
             
             {/* Top-left floating icon */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-background rounded-full flex items-center justify-center shadow-lg">
               <img src={Arrow} alt="Arrow icon" className="h-24 w-auto" />
              </div>
           </div>
          {/* Title and Description below image */}
          <h3 className="text-text-main font-semibold text-lg mb-2 px-4">
            {heroData.featuredProject.title}
          </h3>
          <p className="text-text-muted text-base px-4 mb-6">
            {heroData.featuredProject.category}
          </p>
        </div>
      </div>
      
      
    </section>
  );
}
