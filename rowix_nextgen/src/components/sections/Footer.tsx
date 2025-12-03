import React from 'react';
import { useFooterData } from '../../hooks/useMockData';
import CTA from './CTA';
import SocialCard from '../ui/SocialCard';
import IconBox from '../ui/IconBox';
import { ArrowUpRight } from 'lucide-react';

export default function Footer(): React.JSX.Element {
  const { data: footerData, loading, error } = useFooterData();

  // Marquee items for social media strip
  const marqueeText = "FOLLOW US ON SOCIAL MEDIA";
  const marqueeItems = Array(10).fill(marqueeText);

  if (loading) {
    return (
      <footer className="mt-20 py-4">
        {/* CTA Loading */}
        <div className="w-full rounded-3xl p-12 md:p-16 bg-primary animate-pulse mb-4">
          <div className="h-12 bg-background/20 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-background/20 rounded w-full max-w-xl mb-10"></div>
        </div>
        
        {/* Marquee Strip */}
        <div className="overflow-hidden bg-background py-4 mb-4 border-y border-surface">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-text-muted text-sm font-mono uppercase tracking-widest">
              {marqueeItems.join(' • ')}
            </span>
          </div>
        </div>
        
        {/* Main Content Loading - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 animate-pulse">
          {/* ROW 1 */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-surface rounded-3xl aspect-square"></div>
            <div className="bg-surface rounded-3xl aspect-square"></div>
          </div>
          <div className="col-span-12 lg:col-span-8 bg-surface rounded-3xl p-8 h-full"></div>
          
          {/* ROW 2 */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="bg-surface rounded-3xl aspect-square"></div>
            <div className="bg-surface rounded-3xl aspect-square"></div>
          </div>
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
            <div className="bg-surface rounded-3xl p-8 flex-grow"></div>
            <div className="bg-surface rounded-3xl p-6"></div>
          </div>
        </div>
      </footer>
    );
  }

  if (error || !footerData) {
    return (
      <footer className="mt-20 py-4">
        <div className="text-center text-text-muted">Error loading footer</div>
      </footer>
    );
  }

  // Split socials into top row (Instagram, Twitter) and bottom row (Dribbble, Behance)
  const topSocials = footerData.socials.slice(0, 2);
  const bottomSocials = footerData.socials.slice(2, 4);

  return (
    <footer className="mt-20 py-4">
      {/* CTA Banner */}
      <CTA />
      
      {/* Social Media Marquee Strip */}
      <div className="overflow-hidden bg-background py-4 my-4 border-y border-surface">
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {marqueeItems.map((text, index) => (
            <React.Fragment key={index}>
              <span className="text-text-muted text-sm font-mono uppercase tracking-widest">
                {text}
              </span>
              <span className="text-primary text-sm">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Main Footer Content - Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* ========== ROW 1 ========== */}
        
        {/* Left Side - Instagram & Twitter */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
          {topSocials.map((social) => (
            <SocialCard key={social.id} social={social} />
          ))}
        </div>
        
        {/* Right Side - Pages/Links */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-surface rounded-3xl p-8 h-full flex flex-col justify-between">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerData.linkSections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-text-main font-bold text-lg uppercase mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-text-muted text-sm hover:text-primary transition-colors inline-flex items-center gap-2"
                        >
                          {link.name}
                          {link.badge && (
                            <span className="text-xs bg-icon-surface px-2 py-0.5 rounded border border-ui-surface">
                              {link.badge}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* ========== ROW 2 ========== */}
        
        {/* Left Side - Dribbble & Behance */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-4">
          {bottomSocials.map((social) => (
            <SocialCard key={social.id} social={social} />
          ))}
        </div>
        
        {/* Right Side - Newsletter + Copyright */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          {/* Newsletter Card */}
          <div className="bg-surface rounded-3xl p-8 flex-grow flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="text-text-muted text-xs font-mono uppercase tracking-wider">
                NEWSLETTER
              </span>
              <h4 className="text-text-main font-bold text-lg uppercase mt-1">
                {footerData.newsletter.title}
              </h4>
            </div>
            
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <input
                type="email"
                placeholder={footerData.newsletter.placeholder}
                className="flex-1 bg-background border border-ui-surface rounded-lg px-4 py-3 text-text-main placeholder:text-text-muted/50 focus:outline-none focus:border-primary transition-colors"
              />
              <IconBox icon={ArrowUpRight} variant="circular" size="md" />
            </div>
          </div>
          
          {/* Copyright Card */}
          <div className="bg-surface rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm font-mono">
              {footerData.copyright}
            </p>
            
            <div className="flex items-center gap-6">
              {footerData.legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-text-muted text-sm font-mono hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
