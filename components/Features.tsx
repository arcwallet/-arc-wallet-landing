
import React, { useEffect, useRef, useState } from 'react';
import { FingerprintIcon } from './Icons';

const Features: React.FC = () => {
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
    <section id="features" ref={sectionRef} className="py-24 lg:py-32 relative z-10 scroll-mt-[100px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div 
          className={`text-center mb-20 space-y-6 transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          } will-change-transform`}
        >
          <span className="text-[#a0bce4] font-semibold text-sm uppercase tracking-[4px]">
            {'{FEATURES}'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#E6EEF3] tracking-tight">
            Purpose-built for Self-Custody
          </h2>
          <p className="text-[#A7B4C8] text-lg max-w-2xl mx-auto leading-relaxed">
            Arc Wallet combines Circle's modular wallet infrastructure with passkey security to power the next generation of self-custodial wallets.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card Wrapper Function to handle staggered delays */}
          {[
            { delay: '0s', content: <PasskeyCard /> },
            { delay: '0.1s', content: <PrivacyCard /> },
            { delay: '0.2s', content: <SmartAccountsCard /> },
            { delay: '0.3s', content: <GasCard /> },
            { delay: '0.4s', content: <BridgeCard /> },
            { delay: '0.5s', content: <MultiSigCard /> }
          ].map((item, idx) => (
            <div 
              key={idx}
              className={`transition-all duration-500 ease-out will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
              }`}
              style={{ transitionDelay: item.delay }}
            >
              {item.content}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

// Sub-components for cleaner code
const PasskeyCard = () => (
  <div className="group relative bg-gradient-to-b from-[#0D1B2A] to-[#151A22] border border-[#2b3036]/50 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-[#a0bce4]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px]">
    <div className="h-64 bg-[#09121D]/50 flex items-center justify-center relative overflow-hidden">
      
      {/* Container for Fingerprint */}
      <div className="relative w-28 h-28 bg-[#151A22] rounded-2xl border border-[#2b3036] flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)]">
        
        {/* Fingerprint Icon */}
        <div className="relative z-10">
           <FingerprintIcon className="w-16 h-16 text-[#a0bce4]" />
        </div>

        {/* Scan Line */}
        <div 
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#a0bce4] to-transparent z-20 shadow-[0_0_10px_#a0bce4]"
          style={{ animation: 'scanFingerprint 2.5s ease-in-out infinite' }}
        ></div>

      </div>

      <style>{`
        @keyframes scanFingerprint {
          0%, 100% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          95%, 100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#E6EEF3] mb-2">Passkey-First Security</h3>
      <p className="text-[#A7B4C8] text-sm leading-relaxed">
        Powered by Circle's WebAuthn infrastructure. Sign with Face ID, Touch ID, or PIN. P256 keys verified on-chain.
      </p>
    </div>
  </div>
);

const PrivacyCard = () => (
  <div className="group relative bg-gradient-to-b from-[#0D1B2A] to-[#151A22] border border-[#2b3036]/50 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-[#a0bce4]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px]">
    <div className="h-64 bg-[#09121D]/50 flex items-center justify-center relative p-6">
      <div className="w-full bg-[#151A22] border border-[#2b3036] rounded-xl p-5 shadow-xl relative overflow-hidden">
        <div className="flex divide-x divide-[#2b3036]">
          <div className="flex-1 pr-3 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A7B4C8]"></span>
              <span className="text-[10px] text-[#A7B4C8] font-medium uppercase tracking-wider">Public</span>
            </div>
            <div className="space-y-2">
              <div className="bg-[#09121D] p-2 rounded border border-[#2b3036]/50">
                <div className="text-[9px] text-[#556987] mb-1 font-mono uppercase">Transaction</div>
                <div className="text-[10px] text-[#E6EEF3] font-mono leading-tight">
                  0x7a3f...83c2
                  <div className="text-[#A7B4C8] text-[9px] my-0.5">↓</div>
                  0x9b2d...41f7
                </div>
              </div>
              <div className="bg-[#09121D] p-2 rounded border border-[#2b3036]/50 flex justify-between items-center">
                <span className="text-[9px] text-[#556987] font-mono uppercase">Amt</span>
                <span className="text-[10px] text-[#E6EEF3] font-mono">$1,250.00</span>
              </div>
            </div>
          </div>
          <div className="flex-1 pl-3 space-y-3 relative">
            <div className="absolute inset-0 bg-[#a0bce4]/5 animate-pulse rounded-r-xl -m-4 p-4 z-0"></div>
            <div className="flex items-center gap-1.5 relative z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#a0bce4] shadow-[0_0_8px_#a0bce4]"></div>
              <span className="text-[10px] text-[#a0bce4] font-medium uppercase tracking-wider">Shielded</span>
              <svg className="w-3 h-3 text-[#a0bce4] ml-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <div className="space-y-2 relative z-10">
              <div className="bg-[#09121D] p-2 rounded border border-[#a0bce4]/20 shadow-[0_0_15px_rgba(160,188,228,0.05)]">
                <div className="text-[9px] text-[#556987] mb-1 font-mono uppercase">Transaction</div>
                <div className="text-[10px] text-[#E6EEF3] font-mono leading-tight">
                  0x7a3f...83c2
                  <div className="text-[#a0bce4] text-[9px] my-0.5">↓</div>
                  <span className="text-[#a0bce4] tracking-widest font-bold">••••••••</span>
                </div>
              </div>
              <div className="bg-[#09121D] p-2 rounded border border-[#a0bce4]/20 flex justify-between items-center shadow-[0_0_15px_rgba(160,188,228,0.05)]">
                <span className="text-[9px] text-[#556987] font-mono uppercase">Amt</span>
                <span className="text-[10px] text-[#a0bce4] font-mono tracking-widest font-bold">••••</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-[#2b3036] text-center">
          <span className="text-[10px] text-[#A7B4C8] italic">Auditable when needed</span>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#E6EEF3] mb-2">Opt-in Configurable Privacy</h3>
      <p className="text-[#A7B4C8] text-sm leading-relaxed">
        Selectively shield sensitive financial data while preserving auditability to remain compliant.
      </p>
    </div>
  </div>
);

const SmartAccountsCard = () => (
  <div className="group relative bg-gradient-to-b from-[#0D1B2A] to-[#151A22] border border-[#2b3036]/50 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-[#a0bce4]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px]">
    <div className="h-64 bg-[#09121D]/50 flex items-center justify-center relative">
       <div className="relative w-full h-full flex items-center justify-center">
          {[
            { id: 1, label: 'TX1', tx: '40px', ty: '0px' },
            { id: 2, label: 'TX2', tx: '0px', ty: '40px' },
            { id: 3, label: 'TX3', tx: '-40px', ty: '0px' }
          ].map((item) => (
            <div 
              key={item.id}
              className="absolute w-12 h-12 bg-[#1e2125] border border-[#a0bce4]/30 rounded flex items-center justify-center text-xs text-[#A7B4C8] font-mono z-10"
              style={{ 
                '--tx': item.tx, 
                '--ty': item.ty,
                transform: `translate(${parseInt(item.tx) * -2}px, ${parseInt(item.ty) * -2}px)`,
                animation: `batchMove 3s ease-in-out infinite`
              } as React.CSSProperties}
            >
              {item.label}
            </div>
          ))}
          <div 
             className="absolute w-20 h-20 bg-[#a0bce4]/10 border border-[#a0bce4] rounded-lg flex items-center justify-center z-0"
             style={{ 
                animation: 'fadeIn 3s ease-in-out infinite',
                animationDelay: '1.5s' 
             }}
          >
            <span className="text-[#a0bce4] font-bold text-sm">UserOp</span>
          </div>
       </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#E6EEF3] mb-2">ERC-4337 + ERC-6900 Accounts</h3>
      <p className="text-[#A7B4C8] text-sm leading-relaxed">
        Modular Smart Contract Accounts (MSCA) with Circle's bundler and paymaster. Batch operations in a single UserOp.
      </p>
    </div>
  </div>
);

const GasCard = () => (
  <div className="group relative bg-gradient-to-b from-[#0D1B2A] to-[#151A22] border border-[#2b3036]/50 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-[#a0bce4]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px]">
    <div className="h-64 bg-[#09121D]/50 flex items-center justify-center relative overflow-hidden">
       {['$450', '$2.50', '$1,200', '$56'].map((val, i) => (
         <div 
           key={i}
           className="absolute text-[#2b3036] font-mono text-sm"
           style={{
             left: `${20 + i * 20}%`,
             top: `${20 + i * 15}%`,
             animation: `float-random ${4 + i}s ease-in-out infinite`,
             animationDelay: `${i * 0.5}s`
           }}
         >
           {val}
         </div>
       ))}
       <div className="relative flex flex-col items-center z-10 animate-[float-random_6s_ease-in-out_infinite]">
         <div className="w-16 h-16 rounded-full bg-[#1e2125] flex items-center justify-center shadow-[0_0_20px_rgba(160,188,228,0.2)] border border-[#a0bce4]">
           <span className="text-[#a0bce4] font-bold text-2xl">$</span>
         </div>
         <div className="mt-3 bg-[#151A22] border border-[#2b3036] px-3 py-1 rounded-full text-xs text-[#A7B4C8] flex items-center gap-1 shadow-lg">
           <span>Gas:</span>
           <span className="text-[#a0bce4] font-mono">$0.01</span>
         </div>
       </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#E6EEF3] mb-2">Pay Gas with USDC</h3>
      <p className="text-[#A7B4C8] text-sm leading-relaxed">
        Low, predictable, fiat-based fees. Cost-effective transactions whether you're sending $1 or $1B.
      </p>
    </div>
  </div>
);

const BridgeCard = () => (
  <div className="group relative bg-gradient-to-b from-[#0D1B2A] to-[#151A22] border border-[#2b3036]/50 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-[#a0bce4]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px]">
    <div className="h-64 bg-[#09121D]/50 flex items-center justify-center relative">
       <div className="w-full max-w-[240px] flex items-center justify-between relative">
         <div className="flex flex-col items-center gap-2 z-10">
           <div className="w-12 h-12 rounded-full bg-[#151A22] border border-[#a0bce4] flex items-center justify-center">
             <div className="w-6 h-6 text-[#a0bce4]">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8"/><path d="M12 8v8"/></svg>
             </div>
           </div>
           <span className="text-[10px] text-[#A7B4C8] uppercase tracking-wider">Arc</span>
         </div>
         <div className="flex-1 h-[2px] bg-[#2b3036] relative mx-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#a0bce4] to-transparent w-1/2 h-full"
                 style={{ animation: 'bridgeFlow 2s linear infinite' }}
            ></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#a0bce4] rounded-full shadow-[0_0_10px_#a0bce4]"
                 style={{ 
                   animation: 'bridgeMove 2s linear infinite'
                 }}
            ></div>
            <style>{`
              @keyframes bridgeMove {
                0% { left: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { left: 100%; opacity: 0; }
              }
            `}</style>
         </div>
         <div className="flex flex-col items-center gap-2 z-10">
           <div className="w-12 h-12 rounded-full bg-[#151A22] border border-[#a0bce4] flex items-center justify-center">
             <div className="w-6 h-6 text-[#a0bce4]">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/></svg>
             </div>
           </div>
           <span className="text-[10px] text-[#A7B4C8] uppercase tracking-wider">Eth</span>
         </div>
       </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#E6EEF3] mb-2">Circle CCTP V2 Bridge</h3>
      <p className="text-[#A7B4C8] text-sm leading-relaxed">
        Native burn-and-mint USDC bridging via Circle's CCTP. Fast transfers with Iris attestation service.
      </p>
    </div>
  </div>
);

const MultiSigCard = () => (
  <div className="group relative bg-gradient-to-b from-[#0D1B2A] to-[#151A22] border border-[#2b3036]/50 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:border-[#a0bce4]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-[6px]">
    <div className="h-64 bg-[#09121D]/50 flex items-center justify-center relative">
      <div className="flex gap-4">
         {[1, 2, 3].map((i) => (
           <div key={i} className="flex flex-col items-center gap-2">
             <div 
               className="w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-500"
               style={{ 
                 animation: `multiSigLight 4s ease-in-out infinite`,
                 animationDelay: `${i * 0.8}s`
               }}
             >
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                 <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
               </svg>
             </div>
           </div>
         ))}
      </div>
      <div 
        className="absolute bottom-16 bg-[#a0bce4]/10 border border-[#a0bce4]/30 px-3 py-1 rounded-full flex items-center gap-1.5 opacity-0"
        style={{ animation: 'fadeInOut 4s ease-in-out infinite', animationDelay: '2.4s' }}
      >
        <div className="w-2 h-2 rounded-full bg-[#a0bce4]"></div>
        <span className="text-[#a0bce4] text-xs font-semibold">Approved</span>
      </div>
      <style>{`
        @keyframes multiSigLight {
           0% { background: transparent; border-color: #2b3036; color: #2b3036; }
           20% { background: rgba(160, 188, 228, 0.1); border-color: #a0bce4; color: #a0bce4; }
           80% { background: rgba(160, 188, 228, 0.1); border-color: #a0bce4; color: #a0bce4; }
           100% { background: transparent; border-color: #2b3036; color: #2b3036; }
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-5px); }
        }
      `}</style>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#E6EEF3] mb-2">ERC-6900 Multi-Sig</h3>
      <p className="text-[#A7B4C8] text-sm leading-relaxed">
        Weighted multi-signature via Circle's WeightedWebauthnMultisigPlugin. Enterprise-grade shared wallets.
      </p>
    </div>
  </div>
);

export default Features;
