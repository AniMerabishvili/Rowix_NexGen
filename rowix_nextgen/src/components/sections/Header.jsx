import { useState } from 'react';
import Logo from '../../assets/images/Logo.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home', active: true },
    { name: 'SERVICES', href: '#services', active: false },
    { name: 'PROJECTS', href: '#projects', active: false },
    { name: 'ABOUT', href: '#about', active: false },
    { name: 'CAREERS', href: '#careers', active: false },
    { name: 'BLOGS', href: '#blogs', active: false },
  ];

    return (
      <header className="w-full mt-6">
        <div>
          {/* Floating Navbar Container */}
          <nav className="bg-surface rounded-2xl p-4 flex items-center justify-between">
          
            {/* Logo - Absolute Left */}
            <div className="flex-shrink-0">
              <img src={Logo} alt="NexGen Logo" className="h-5 w-auto pl-6" />
            </div>

          {/* Right Side Content - Navigation + Contact Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                    className={`text-base font-medium transition-colors duration-300 uppercase tracking-wide bg-ui-surface p-3 rounded-md ${
                      link.active 
                        ? 'text-active-orange' 
                        : 'text-text-muted hover:text-white'
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Contact Us Button */}
            <button className="bg-primary text-background font-bold text-base uppercase px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-300">
              CONTACT US
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-text-main hover:text-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // X Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                // Menu Icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-surface rounded-2xl p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-sm font-medium transition-colors duration-300 uppercase tracking-wide py-2 bg-ui-surface px-3 rounded-xl ${
                  link.active 
                    ? 'text-active-orange' 
                    : 'text-text-muted hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
