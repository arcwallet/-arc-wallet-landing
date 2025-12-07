
import React, { useEffect, useRef, useState } from 'react';
import { EnvelopeIcon, FingerprintIcon, WalletIcon } from './Icons';

const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold: 0.15 } // 15-20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 relative z-10 overflow-hidden scroll-mt-[100px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div 
          className={`text-center mb-24 space-y-4 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          } will-change-transform`}
        >
          <span className="text-[#a0bce4] font-semibold text-sm uppercase tracking-[4px]">
            {'{HOW IT WORKS}'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EEF3] tracking-tight">
            Get Started in Minutes
          </h2>
          <p className="text-[#A7B4C8] text-lg">
            Three simple steps to secure your crypto
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] hidden lg:block -translate-y-1/2 z-0">
             <div 
               className={`h-full bg-gradient-to-r from-[#a0bce4]/30 via-[#a0bce4] to-[#a0bce4]/30 opacity-30 transition-all duration-[1500ms] ease-out delay-200`}
               style={{ width: isVisible ? '100%' : '0%' }}
             ></div>
          </div>

          {/* Step 1 */}
          <div 
            className={`relative bg-[#151A22]/40 backdrop-blur-sm border border-[#2b3036] rounded-2xl p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#151A22]/60 z-10 will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
            }`}
            style={{ transitionDelay: '0s' }}
          >
            <div className="absolute -right-4 -top-8 text-8xl font-bold text-[#a0bce4]/5 select-none z-0">01</div>
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-[#1e2125] border border-[#2b3036] flex items-center justify-center relative overflow-hidden group shadow-[0_0_20px_rgba(160,188,228,0.1)]">
                 <div className="relative">
                   <div className="w-8 h-6 bg-[#2b3036] rounded flex items-center justify-center overflow-hidden relative border border-[#2b3036]">
                      <div 
                        className="absolute top-0 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[12px] border-t-[#a0bce4]"
                        style={{ animation: 'envelopeOpen 3s ease-in-out infinite' }}
                      ></div>
                   </div>
                   <div 
                     className="absolute -top-2 -right-2 w-4 h-4 bg-[#151A22] rounded-full flex items-center justify-center border border-[#a0bce4]"
                     style={{ animation: 'checkAppear 3s ease-in-out infinite' }}
                   >
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-2.5 h-2.5 text-[#a0bce4]"><polyline points="20 6 9 17 4 12" /></svg>
                   </div>
                 </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#E6EEF3] mb-3">Verify Your Email</h3>
                <p className="text-[#A7B4C8] text-sm leading-relaxed">
                  Enter your email and verify with a one-time code. No personal data required.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div 
            className={`relative bg-[#151A22]/40 backdrop-blur-sm border border-[#2b3036] rounded-2xl p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#151A22]/60 z-10 will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
            }`}
            style={{ transitionDelay: '0.12s' }}
          >
            <div className="absolute -right-4 -top-8 text-8xl font-bold text-[#a0bce4]/5 select-none z-0">02</div>
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-[#1e2125] border border-[#2b3036] flex items-center justify-center relative overflow-hidden shadow-[0_0_20px_rgba(160,188,228,0.1)]">
                 <div className="relative flex flex-col items-center">
                    <div className="w-3 h-2.5 border-2 border-[#a0bce4] rounded-t-full mb-[-2px] relative z-0"
                         style={{ animation: 'lockUnlock 3s ease-in-out infinite' }}
                    ></div>
                    <div className="w-7 h-5 bg-[#151A22] border border-[#a0bce4] rounded-md relative z-10 flex items-center justify-center">
                       <FingerprintIcon className="w-4 h-4 text-[#a0bce4]" />
                    </div>
                 </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#E6EEF3] mb-3">Create Your Passkey</h3>
                <p className="text-[#A7B4C8] text-sm leading-relaxed">
                  Use Face ID, Touch ID, or device PIN. Your keys stay in your device's secure enclave.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div 
            className={`relative bg-[#151A22]/40 backdrop-blur-sm border border-[#2b3036] rounded-2xl p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#151A22]/60 z-10 will-change-transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
            }`}
            style={{ transitionDelay: '0.24s' }}
          >
            <div className="absolute -right-4 -top-8 text-8xl font-bold text-[#a0bce4]/5 select-none z-0">03</div>
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-[#1e2125] border border-[#2b3036] flex items-center justify-center relative overflow-hidden shadow-[0_0_20px_rgba(160,188,228,0.1)]">
                 <div className="relative">
                   <WalletIcon className="w-8 h-8 text-[#a0bce4]" />
                   {[1, 2, 3].map((i) => (
                     <div 
                       key={i}
                       className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-[#a0bce4] shadow-[0_0_5px_#a0bce4]"
                       style={{ 
                         animation: `coinPop 3s ease-in-out infinite`,
                         animationDelay: `${i * 0.2}s`,
                         marginLeft: `${(i - 2) * 6}px`
                       }}
                     ></div>
                   ))}
                 </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#E6EEF3] mb-3">You're Ready</h3>
                <p className="text-[#A7B4C8] text-sm leading-relaxed">
                  Send, receive, bridge, and manage your assets. Full control, no seed phrases.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
