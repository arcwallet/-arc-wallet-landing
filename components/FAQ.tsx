
import React, { useEffect, useRef, useState } from 'react';
import { PlusIcon, MinusIcon } from './Icons';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What makes Arc Wallet different from other wallets?",
    answer: "Arc Wallet is built on Circle's Modular Wallet SDK, combining ERC-4337 account abstraction with ERC-6900 modular plugins. No seed phrases - just passkey authentication with P256 signatures verified on-chain."
  },
  {
    question: "How does Circle's passkey authentication work?",
    answer: "Circle's WebAuthn infrastructure handles passkey creation and authentication. Your device generates a P256 key pair in its secure enclave. You sign with Face ID, Touch ID, or PIN. Circle's smart contracts verify signatures on-chain."
  },
  {
    question: "What happens if I lose my device?",
    answer: "Your passkeys sync automatically via iCloud Keychain (Apple) or Google Password Manager (Android). Access your wallet from any synced device. For enterprise accounts, ERC-6900 multi-sig allows recovery via weighted threshold signatures."
  },
  {
    question: "How does configurable privacy work?",
    answer: "Arc Wallet offers opt-in privacy features that let you selectively shield transaction details and balances. You control what's visible and what's private, while maintaining the ability to prove compliance when needed."
  },
  {
    question: "How does ERC-6900 multi-sig work?",
    answer: "Using Circle's WeightedWebauthnMultisigPlugin, you can create shared wallets with weighted signature thresholds. Each signer has a weight, and transactions require signatures meeting the configured threshold. Ideal for DAOs and treasuries."
  },
  {
    question: "What networks and how does bridging work?",
    answer: "Arc Wallet runs on Arc Network with USDC as native gas. Circle's CCTP V2 enables native burn-and-mint USDC bridging to Ethereum Sepolia. Fast transfers complete in ~30 seconds via Iris attestation service."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 relative z-10 scroll-mt-[100px]">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div 
          className={`text-center mb-16 space-y-4 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          } will-change-transform`}
        >
          <span className="text-[#a0bce4] font-semibold text-sm uppercase tracking-[4px]">
            {'{FAQ}'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EEF3] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index}
              className={`
                bg-[#151A22]/60 border rounded-xl overflow-hidden transition-all duration-400 ease-out will-change-transform
                ${openIndex === index ? 'border-[#a0bce4]/30' : 'border-[#2b3036] hover:border-[#a0bce4]/20 hover:bg-[#1a2530]'}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}
              `}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a0bce4]/50 focus-visible:bg-[#1a2530] transition-all duration-200 active:scale-[0.99] active:bg-[#1a2530]"
              >
                <span className="text-[#E6EEF3] font-medium text-lg pr-8">
                  {item.question}
                </span>
                <div className={`text-[#a0bce4] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <MinusIcon className="w-5 h-5" /> : <PlusIcon className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-[#A7B4C8] text-base leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
