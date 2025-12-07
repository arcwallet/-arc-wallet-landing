
import React, { useEffect, useState } from 'react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      
      // Find the current section that is most visible in the viewport
      let current = '';
      const offset = 120; // Offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if top of section is near the top of viewport (accounting for header)
          if (rect.top <= offset + 50 && rect.bottom >= offset) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLogoClick();
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#09121D]/90 backdrop-blur-[20px] border-b border-[rgba(160,188,228,0.08)] py-1 px-6 lg:px-16 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left: Logo Area */}
        <div 
          className="flex items-center gap-3 cursor-pointer group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a0bce4] focus-visible:ring-offset-4 focus-visible:ring-offset-[#09121D]" 
          onClick={handleLogoClick}
          onKeyDown={handleLogoKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Arc Wallet Home"
        >
          <img
            src="/arcwalletloginlogo.png"
            alt="Arc Wallet"
            className="h-20 w-auto group-hover:scale-105 transition-transform"
          />
        </div>
        
        {/* Center: Nav Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a 
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 py-2 relative group rounded active:scale-[0.97] active:duration-100 focus-visible:outline-none focus-visible:text-[#a0bce4] ${isActive ? 'text-arc-text-main' : 'text-arc-text-secondary hover:text-arc-text-main'}`}
              >
                {item.label}
                {/* Underline slide animation: width 0 to 100% */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[#a0bce4] transition-all duration-300 ease-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full group-focus-visible:w-full'}`}></span>
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-5">
          {/* Network Indicator */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151A22] border border-[#2b3036]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a0bce4] opacity-50"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#a0bce4]"></span>
            </span>
            <span className="text-xs font-medium text-[#a0bce4] tracking-wide">Arc Testnet</span>
          </div>

          <a 
            href="https://app.arcwallet.network/"
            className="bg-[#a0bce4] text-[#091325] px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ease-out shadow-[0_0_20px_rgba(160,188,228,0.3)] hover:shadow-[0_0_30px_rgba(160,188,228,0.5)] hover:scale-[1.02] active:scale-[0.98] active:duration-100 active:shadow-[0_0_10px_rgba(160,188,228,0.2)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#a0bce4]/50 inline-block text-center"
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
