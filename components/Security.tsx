
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheckIcon, KeyOffIcon, LinkIcon, RefreshIcon } from './Icons';

const Security: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-[#a0bce4]" />,
      title: "Device-Level Security",
      description: "Keys never leave your device's secure enclave. Protected by the same hardware security used in Apple Pay and Google Pay.",
      delay: "0.1s"
    },
    {
      icon: <KeyOffIcon className="w-6 h-6 text-[#a0bce4]" />,
      title: "No Seed Phrases",
      description: "Nothing to write down, nothing to steal. Passkeys eliminate the biggest vulnerability in traditional wallets.",
      delay: "0.2s"
    },
    {
      icon: <LinkIcon className="w-6 h-6 text-[#a0bce4]" />,
      title: "On-Chain Verification",
      description: "P256 cryptographic signatures verified directly on Arc Network. No trusted third parties, no intermediaries.",
      delay: "0.3s"
    },
    {
      icon: <RefreshIcon className="w-6 h-6 text-[#a0bce4]" />,
      title: "Multi-Device Recovery",
      description: "Lose a device? Access your wallet from any of your synced devices. No recovery phrases, no support tickets.",
      delay: "0.4s"
    }
  ];

  return (
    <section id="security" ref={sectionRef} className="py-24 px-6 scroll-mt-[100px] relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div 
          className={`text-center transition-all duration-500 ease-out will-change-transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <span className="text-[#a0bce4] text-sm font-medium tracking-[4px] uppercase block mb-4 animate-[fadeIn_0.5s_ease-out_forwards]">
            {'{SECURITY}'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EEF3] mt-4 mb-4">
            Built for Trust
          </h2>
          <p className="text-[#A7B4C8] text-lg mt-4 max-w-2xl mx-auto">
            Enterprise-grade protection without the complexity.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`
                group bg-gradient-to-b from-[#0D1B2A]/50 to-[#151A22]/50 border border-[#2b3036] rounded-2xl p-6 backdrop-blur-sm
                transition-all duration-300 ease-out will-change-transform
                hover:border-[#a0bce4]/40 hover:-translate-y-[6px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]
                active:translate-y-[-2px] active:duration-100
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}
              `}
              style={{ transitionDelay: card.delay }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#1e2125] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#252a30]">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#E6EEF3] mt-4 mb-2">
                {card.title}
              </h3>
              <p className="text-[#A7B4C8] text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Security;
