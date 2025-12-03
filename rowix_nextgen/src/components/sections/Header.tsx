import React, { useState, useEffect } from "react";
import { useHeaderData } from '../../hooks/useMockData';
import Logo from '../../assets/images/Logo.svg';

export default function Header(): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { data: headerData, loading } = useHeaderData();

  useEffect(() => {
    // Map href to section ID (remove #)
    const sectionIds = ['home', 'services', 'projects'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -60% 0px', // Trigger when section is near top of viewport (accounting for fixed header)
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section with the highest intersection ratio that's currently visible
      let maxRatio = 0;
      let activeId = 'home';

      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (sectionId && sectionIds.includes(sectionId) && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          activeId = sectionId;
        }
      });

      if (maxRatio > 0) {
        setActiveSection(activeId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for header
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Check on mount and scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (loading || !headerData) {
    return (
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] z-50">
        <nav className="bg-surface/80 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between animate-pulse">
          <div className="h-4 w-24 bg-ui-surface rounded"></div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-10 w-20 bg-ui-surface rounded-md"></div>
              ))}
            </div>
            <div className="h-10 w-28 bg-ui-surface rounded-md"></div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] z-50">
      <nav className="bg-surface/80 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between">
        <div className="flex-shrink-0 pl-12">
          <button
            onClick={() => window.location.reload()}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Refresh page"
          >
            <img src={Logo} alt="NexGen Logo" className="h-4 w-auto" />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            {headerData.navLinks.map((link) => {
              // Extract section ID from href (e.g., "#home" -> "home")
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium transition-colors duration-300 uppercase tracking-wide bg-ui-surface p-3 rounded-md ${
                    isActive 
                      ? 'text-active-orange' 
                      : 'text-text-muted hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Contact Us Button */}
          <button className="bg-primary text-background font-bold text-base uppercase px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-300">
            {headerData.ctaText}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-main focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface/80 backdrop-blur-md rounded-b-2xl shadow-lg mt-2 py-2">
          {headerData.navLinks.map((link) => {
            // Extract section ID from href (e.g., "#home" -> "home")
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={link.name}
                href={link.href}
                className={`block text-sm font-medium transition-colors duration-300 uppercase tracking-wide py-2 bg-ui-surface px-3 rounded-xl ${
                  isActive 
                    ? 'text-active-orange' 
                    : 'text-text-muted hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
