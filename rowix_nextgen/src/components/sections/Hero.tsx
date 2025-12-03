import React from 'react';
import { useHeroData } from '../../hooks/useMockData';
import heroImg from '../../assets/images/hero/heroimg.png';
import Arrow from '../../assets/images/hero/arrow.svg';
import TitleArrow from '../../assets/images/hero/titleArrow.svg';

export default function Hero(): React.JSX.Element {
  const { data: heroData, loading, error } = useHeroData();

  if (loading) {
    return (
      <section className="mx-auto pt-[120px] pb-8 px-4 md:px-0">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 items-stretch">
          <div className="lg:col-span-2 bg-surface p-4 rounded-2xl flex flex-col justify-center animate-pulse order-1">
            <div className="pt-8 md:pt-12 lg:pt-20 px-4 md:px-8 lg:px-12">
              <div className="h-12 md:h-16 bg-ui-surface rounded-xl mb-6 md:mb-8 w-3/4"></div>
              <div className="h-6 md:h-8 bg-ui-surface rounded-xl mb-4 w-1/2"></div>
              <div className="h-4 bg-ui-surface rounded mb-2 w-full max-w-2xl"></div>
              <div className="h-4 bg-ui-surface rounded w-2/3 max-w-2xl"></div>
            </div>
          </div>
          <div className="lg:col-span-1 bg-surface rounded-2xl flex flex-col animate-pulse overflow-hidden order-2 lg:h-full 2xl:h-auto">
            <div className="h-[300px] md:h-[280px] lg:flex-[3] lg:h-full 2xl:flex-none 2xl:h-auto 2xl:aspect-[4/3] bg-ui-surface rounded-2xl m-4 md:m-0"></div>
            <div className="lg:flex-[1] 2xl:flex-none"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !heroData) {
    return (
      <section className="mx-auto pt-[120px] pb-8 px-4 md:px-0">
        <div className="text-center text-text-muted">
          Error loading hero section
        </div>
      </section>
    );
  }

  // Duplicate marquee items for seamless loop
  const marqueeItems = [...heroData.marqueeItems, ...heroData.marqueeItems];

  return (
    <section className="mx-auto pt-[120px] pb-8 px-4 md:px-0">
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 items-stretch">
        
        {/* Left Column - Text Content (2x width) */}
        <div className="lg:col-span-2 bg-surface p-4 rounded-2xl flex flex-col justify-center order-1">
          <div className="pt-8 md:pt-12 lg:pt-20 px-4 md:px-8 lg:px-12">
          {/* Main Title */}
          <h1 className="text-text-main text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 md:mb-8">
            {/* Desktop: Title + Button inline, then TitleHighlight */}
            <div className="hidden md:block">
              <span className="inline-flex items-center gap-4">
                {heroData.title}
                <button className="text-primary py-3 rounded-full text-xl font-medium uppercase flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <img src={TitleArrow} alt="Arrow icon" className="h-16 w-auto" />
                  {heroData.ctaText}
                </button>
              </span>
              <br />
              {heroData.titleHighlight}
            </div>
            
            {/* Mobile: Title, then TitleHighlight, then Button */}
            <div className="flex flex-col gap-3 md:hidden">
              <span>{heroData.title}</span>
              <span>{heroData.titleHighlight}</span>
              <button className="text-primary py-2 rounded-full text-base font-medium uppercase flex items-center gap-2 hover:opacity-90 transition-opacity self-start">
                <img src={TitleArrow} alt="Arrow icon" className="h-10 w-auto" />
                {heroData.ctaText}
              </button>
            </div>
          </h1>
          
          {/* Paragraph */}
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl mb-8 md:mb-12">
            {heroData.description}
          </p>
        
          </div>
          
        
        {/* Marquee Section */}
      <div className="mt-4 md:mt-8 overflow-hidden bg-ui-surface p-3 md:p-4 rounded-xl">
         <div className="flex items-center gap-4 md:gap-8 text-text-muted text-sm md:text-base lg:text-lg uppercase tracking-widest font-mono animate-marquee whitespace-nowrap">
           {marqueeItems.map((item, index) => (
             <React.Fragment key={index}>
               <span>{item}</span>
               <span className="text-primary text-base md:text-xl">•</span>
             </React.Fragment>
           ))}
         </div>
      </div>
        </div>
        
         {/* Right Column - Image (1x width) - Below title on screens 1000px and below */}
         <div className="lg:col-span-1 bg-surface rounded-2xl flex flex-col overflow-hidden order-2 lg:h-full 2xl:h-auto">
           <div className="mb-4 md:mb-6 relative m-4 md:m-0 lg:flex-[3] 2xl:flex-none 2xl:mb-6">
             <div className="relative w-full h-[300px] md:h-[280px] lg:h-full 2xl:h-auto 2xl:aspect-[4/3] overflow-hidden rounded-2xl">
               <img 
                 src={heroImg} 
                 alt={heroData.featuredProject.title} 
                 className="w-full h-full object-cover"
                 loading="lazy"
               />
               
               {/* Top-left floating icon */}
               <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-20 h-20 md:w-32 md:h-32 bg-background rounded-full flex items-center justify-center shadow-lg z-10">
                 <img src={Arrow} alt="Arrow icon" className="h-12 md:h-24 w-auto" />
               </div>
             </div>
           </div>
          {/* Title and Description below image */}
          <div className="lg:flex-[1] 2xl:flex-none">
            <h3 className="text-text-main font-semibold text-base md:text-lg mb-2 px-4">
              {heroData.featuredProject.title}
            </h3>
            <p className="text-text-muted text-sm md:text-base px-4 mb-4 md:mb-6">
              {heroData.featuredProject.category}
            </p>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}
