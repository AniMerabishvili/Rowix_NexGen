// Using inline SVG instead of lucide-react
import Button from '../ui/Button';
import SectionTag from '../ui/SectionTag';
import heroImg from '../../assets/images/hero/heroimg.png';
import Arrow from '../../assets/images/hero/arrow.svg';
import TitleArrow from '../../assets/images/hero/titleArrow.svg';

export default function Hero() {
  return (
    <section className="mx-auto pt-5 pb-8">
      <div className="grid md:grid-cols-3 gap-5 items-stretch">
        
        {/* Left Column - Text Content (2x width) */}
        <div className="md:col-span-2 bg-surface p-4 rounded-2xl flex flex-col justify-center">
          <div className="pt-20 px-12">
          {/* Main Title */}
          <h1 className="text-text-main text-5xl md:text-6xl font-bold leading-tight mb-8">
            <span className="inline-flex items-center gap-4">
              DIGITAL SOLUTIONS
              <button className="text-primary py-3 rounded-full text-xl font-medium uppercase flex items-center gap-2 hover:opacity-90 transition-opacity">
                <img src={TitleArrow} alt="Arrow icon" className="h-16 w-auto" />
                START A PROJECT
              </button>
            </span>
            <br />
            THAT DRIVE SUCCESS
          </h1>
          
          {/* Paragraph */}
          <p className="text-text-muted text-sm leading-relaxed max-w-2xl mb-12">
            At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.
          </p>
        
          </div>
          
        
        {/* Marquee Section */}
      <div className="mt-8 overflow-hidden bg-ui-surface p-4 rounded-xl">
         <div className="flex items-center gap-8 text-text-muted text-lg uppercase tracking-widest font-mono font-large animate-marquee whitespace-nowrap">
           <span>MARKETING</span>
           <span className="text-primary text-xl">•</span>
           <span>WEBSITE DESIGN</span>
           <span className="text-primary text-xl">•</span>
           <span>BRANDING</span>
           <span className="text-primary text-xl">•</span>
           <span>WEBSITE DEVELOPMENT</span>
           <span className="text-primary text-xl">•</span>
           <span>MOBILE APP DEVELOPMENT</span>
           <span className="text-primary text-xl">•</span>
           <span>DIGITAL</span>
           <span className="text-primary text-xl">•</span>
           <span>MARKETING</span>
           <span className="text-primary text-xl">•</span>
           <span>WEBSITE DESIGN</span>
           <span className="text-primary text-xl">•</span>
           <span>BRANDING</span>
           <span className="text-primary text-xl">•</span>
           <span>WEBSITE DEVELOPMENT</span>
           <span className="text-primary text-xl">•</span>
           <span>MOBILE APP DEVELOPMENT</span>
           <span className="text-primary text-xl">•</span>
           <span>DIGITAL</span>
         </div>
      </div>
        </div>
        
         {/* Right Column - Image (1x width) */}
         <div className="md:col-span-1 bg-surface rounded-2xl flex flex-col">
           <div className="mb-6 relative">
             <img 
               src={heroImg} 
               alt="Digital Solutions Dashboard" 
               className="w-full aspect-[4/3] object-cover rounded-2xl"
             />
             
             {/* Top-left floating icon */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-background rounded-full flex items-center justify-center shadow-lg">
               <img src={Arrow} alt="Arrow icon" className="h-24 w-auto" />
              </div>
           </div>
          {/* Title and Description below image */}
          <h3 className="text-text-main font-semibold text-lg mb-2 px-4">
            ESTATEIN REAL ESTATE
          </h3>
          <p className="text-text-muted text-base px-4 mb-6">
            Web Development.
          </p>
        </div>
      </div>
      
      
    </section>
  );
}
