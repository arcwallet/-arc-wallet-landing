
import React, { useEffect, useRef, useState } from 'react';
import { TwitterIcon, DiscordIcon, GithubIcon, LinkedInIcon } from './Icons';
import LegalModal from './LegalModal';
import { TermsOfService, PrivacyPolicy, SecurityPolicy } from './LegalContent';

type ModalType = 'terms' | 'privacy' | 'security' | null;

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const openModal = (type: ModalType) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal(type);
  };

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer
        ref={footerRef}
        className={`border-t border-[#2b3036]/20 bg-[#0A0F1A] pt-20 pb-10 transition-opacity duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">

            {/* Left Column - Brand */}
            <div className="lg:col-span-2 space-y-6">
              <img
                src="/arclogo.png"
                alt="Arc Wallet"
                className="h-12 w-auto"
              />
              <p className="text-arc-text-secondary text-base max-w-sm leading-relaxed">
                The premium self-custodial wallet for the next generation. <br/>
                Privacy you control.
              </p>
            </div>

            {/* Right Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">

              {/* Product Column */}
              <div className="space-y-6">
                <h4 className="text-arc-primary font-semibold text-sm uppercase tracking-[2px]">
                  {'{Product}'}
                </h4>
                <ul className="space-y-3">
                  <li><a href="#features" className="text-arc-text-secondary text-sm inline-block transition-all duration-200 hover:text-arc-text-main hover:scale-105 focus-visible:outline-none focus-visible:text-[#a0bce4] focus-visible:underline focus-visible:underline-offset-4 rounded">Features</a></li>
                  <li><a href="#security" className="text-arc-text-secondary text-sm inline-block transition-all duration-200 hover:text-arc-text-main hover:scale-105 focus-visible:outline-none focus-visible:text-[#a0bce4] focus-visible:underline focus-visible:underline-offset-4 rounded">Security</a></li>
                  <li><a href="#features" className="text-arc-text-secondary text-sm inline-block transition-all duration-200 hover:text-arc-text-main hover:scale-105 focus-visible:outline-none focus-visible:text-[#a0bce4] focus-visible:underline focus-visible:underline-offset-4 rounded">Bridge</a></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div className="space-y-6">
                <h4 className="text-arc-primary font-semibold text-sm uppercase tracking-[2px]">
                  {'{Resources}'}
                </h4>
                <ul className="space-y-3">
                  <li><a href="https://github.com/arcwallet" target="_blank" rel="noopener noreferrer" className="text-arc-text-secondary text-sm inline-block transition-all duration-200 hover:text-arc-text-main hover:scale-105 focus-visible:outline-none focus-visible:text-[#a0bce4] focus-visible:underline focus-visible:underline-offset-4 rounded">GitHub</a></li>
                  <li><a href="mailto:support@arcwallet.network" className="text-arc-text-secondary text-sm inline-block transition-all duration-200 hover:text-arc-text-main hover:scale-105 focus-visible:outline-none focus-visible:text-[#a0bce4] focus-visible:underline focus-visible:underline-offset-4 rounded">Support</a></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div className="space-y-6">
                <h4 className="text-arc-primary font-semibold text-sm uppercase tracking-[2px]">
                  {'{Legal}'}
                </h4>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={openModal('terms')}
                      className="text-arc-text-secondary text-sm inline-block transition-all duration-200 hover:text-arc-text-main hover:scale-105 focus-visible:outline-none focus-visible:text-[#a0bce4] focus-visible:underline focus-visible:underline-offset-4 rounded"
                    >
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={openModal('privacy')}
                      className="text-arc-text-secondary text-sm inline-block transition-all duration-200 hover:text-arc-text-main hover:scale-105 focus-visible:outline-none focus-visible:text-[#a0bce4] focus-visible:underline focus-visible:underline-offset-4 rounded"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={openModal('security')}
                      className="text-arc-text-secondary text-sm inline-block transition-all duration-200 hover:text-arc-text-main hover:scale-105 focus-visible:outline-none focus-visible:text-[#a0bce4] focus-visible:underline focus-visible:underline-offset-4 rounded"
                    >
                      Security Policy
                    </button>
                  </li>
                </ul>
              </div>

              {/* Connect Column */}
              <div className="space-y-6">
                <h4 className="text-arc-primary font-semibold text-sm uppercase tracking-[2px]">
                  {'{Connect}'}
                </h4>
                <div className="flex gap-4">
                  <a href="https://x.com/arcwalletapp" target="_blank" rel="noopener noreferrer" className="text-arc-text-secondary transition-all duration-200 hover:text-arc-primary hover:scale-[1.15] focus-visible:outline-none focus-visible:text-[#a0bce4] rounded p-1">
                    <TwitterIcon className="w-6 h-6" />
                  </a>
                  <div className="text-arc-text-secondary/50 cursor-not-allowed" title="Coming Soon">
                    <DiscordIcon className="w-6 h-6" />
                  </div>
                  <a href="https://github.com/arcwallet" target="_blank" rel="noopener noreferrer" className="text-arc-text-secondary transition-all duration-200 hover:text-arc-primary hover:scale-[1.15] focus-visible:outline-none focus-visible:text-[#a0bce4] rounded p-1">
                    <GithubIcon className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/company/arcwallet" target="_blank" rel="noopener noreferrer" className="text-arc-text-secondary transition-all duration-200 hover:text-arc-primary hover:scale-[1.15] focus-visible:outline-none focus-visible:text-[#a0bce4] rounded p-1">
                    <LinkedInIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#a0bce4]/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-arc-text-secondary text-sm">
              © 2025 Arc Wallet. All rights reserved.
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a0bce4]/20 bg-[#a0bce4]/5">
              <span className="w-2 h-2 rounded-full bg-arc-primary animate-pulse"></span>
              <span className="text-xs font-medium text-arc-primary">Built on Arc Network</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <LegalModal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
        title="Terms of Service"
      >
        <TermsOfService />
      </LegalModal>

      <LegalModal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title="Privacy Policy"
      >
        <PrivacyPolicy />
      </LegalModal>

      <LegalModal
        isOpen={activeModal === 'security'}
        onClose={closeModal}
        title="Security Policy"
      >
        <SecurityPolicy />
      </LegalModal>
    </>
  );
};

export default Footer;
