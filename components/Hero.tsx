
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, ArrowDownIcon, CheckCircleIcon } from './Icons';
import { supabase } from '../lib/supabase';

const KeyholeAnimation = () => {
  const layers = Array.from({ length: 20 }, (_, i) => i);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center transition-transform duration-100 ease-out will-change-transform"
      style={{ transform: `translateY(${scrollY * 0.05}px)` }} // Subtle Parallax
    >
      <svg viewBox="0 0 200 300" className="w-full h-full max-w-[700px] max-h-[800px]" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="neonBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5BA7D9" />
            <stop offset="100%" stopColor="#A8CFF7" />
          </linearGradient>
          <filter id="glow-bloom" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
            <feComponentTransfer in="coloredBlur" result="softGlow">
              <feFuncA type="linear" slope="0.6" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="softGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g transform="translate(0, -15)">
          {layers.map((i) => {
            const scale = 1 - (i * 0.045);
            const delay = i * 0.15;
            return (
              <g key={i} style={{ transformOrigin: '100px 145px', transform: `scale(${scale})` }}>
                <path
                  d="M 65 245 L 135 245 L 125 130 A 40 40 0 1 0 75 130 L 65 245 Z"
                  fill="none"
                  stroke="url(#neonBlue)"
                  strokeWidth={0.5 / scale}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-keyhole"
                  style={{ animationDelay: `${delay}s`, opacity: 0.15 }}
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading' || status === 'success') return;

    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.toLowerCase().trim() }]);

      if (error) {
        if (error.code === '23505') {
          // Duplicate email
          setStatus('error');
          setErrorMsg('This email is already on the waitlist');
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setEmail('');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 animate-[fadeIn_0.5s_ease-out] p-1 h-14 mt-6">
        <div className="w-10 h-10 rounded-full bg-[#a0bce4]/20 flex items-center justify-center border border-[#a0bce4]/30">
           <CheckCircleIcon className="w-5 h-5 text-[#a0bce4]" />
        </div>
        <div>
           <div className="text-[#E6EEF3] font-semibold text-base">You're on the list!</div>
           <div className="text-[#A7B4C8] text-sm">We'll notify you when we launch.</div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md relative mt-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-grow relative group">
           <input 
             type="email" 
             placeholder="Enter your email"
             value={email}
             onChange={(e) => {
               setEmail(e.target.value);
               if (status === 'error') setStatus('idle');
             }}
             disabled={status === 'loading'}
             className={`w-full h-14 bg-[#151A22] border rounded-xl px-4 text-[#E6EEF3] placeholder-[#A7B4C8]/60 focus:outline-none focus:border-[#a0bce4] focus:ring-[3px] focus:ring-[#a0bce4]/20 transition-all duration-200 ease-out ${status === 'error' ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-[#2b3036] hover:border-[#3a4550]'}`}
           />
           {status === 'error' && (
             <div className="absolute -bottom-6 left-1 text-red-400 text-xs font-medium animate-[fadeIn_0.3s_ease-out]">{errorMsg}</div>
           )}
        </div>
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="h-14 bg-[#a0bce4] text-[#091325] font-semibold px-8 rounded-xl whitespace-nowrap transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(160,188,228,0.4)] hover:bg-[#b0cce8] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#a0bce4]/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-[#091325]/30 border-t-[#091325] rounded-full animate-spin"></div>
              <span>Joining...</span>
            </div>
          ) : (
            <>
              Join Waitlist
              <ArrowRightIcon className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
      <p className="text-[#A7B4C8]/60 text-xs mt-3 ml-1">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
};

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-24 lg:py-32 overflow-hidden px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 lg:w-[45%] max-w-2xl space-y-8 flex flex-col justify-center text-left">
          {/* Element 1: Tag */}
          <div className="animate-[fadeIn_0.5s_ease-out_forwards] opacity-0 will-change-opacity">
            <span className="text-[#a0bce4] tracking-[4px] text-sm font-semibold uppercase">
              {'{ARC WALLET}'}
            </span>
          </div>
          
          {/* Element 2: Headline */}
          <h1 
            className="group cursor-default text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight text-arc-text-main animate-[slideUpFade_0.5s_ease-out_0.15s_forwards] opacity-0 will-change-transform"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a0bce4] via-[#E6EEF3] to-[#a0bce4] bg-[length:200%_auto] transition-all duration-700 ease-out group-hover:bg-right group-hover:drop-shadow-[0_0_25px_rgba(160,188,228,0.4)]">
              Privacy 
            </span>{' '}
            <span className="text-arc-text-main transition-all duration-500 group-hover:tracking-[0.01em] group-hover:text-white group-hover:brightness-110">
              You Control
            </span>
          </h1>
          
          {/* Element 3: Subtitle */}
          <p
            className="text-lg md:text-xl text-arc-text-secondary max-w-lg leading-relaxed animate-[fadeIn_0.5s_ease-out_0.3s_forwards] opacity-0 will-change-opacity"
          >
            ERC-4337 + ERC-6900 smart wallet powered by Circle. Passkey authentication, no seed phrases.
          </p>
          
          {/* Element 4: Waitlist Form & Learn More */}
          <div 
            className="flex flex-col gap-4 animate-[slideUpFade_0.5s_ease-out_0.45s_forwards] opacity-0 will-change-transform w-full max-w-xl"
          >
            <WaitlistForm />
            
            <button 
              onClick={scrollToFeatures}
              className="self-start mt-2 group flex items-center justify-center gap-2 bg-transparent text-[#A7B4C8] py-2 rounded-xl text-sm font-medium transition-all duration-200 ease-out hover:text-[#E6EEF3] hover:translate-y-[2px] focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-[#a0bce4]/30 focus-visible:rounded-lg"
            >
              Learn More
              <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </button>
          </div>
        </div>

        {/* Right Graphic - Keyhole Animation */}
        {/* Element 5: Keyhole */}
        <div className="flex-1 lg:w-[55%] w-full flex justify-center lg:justify-center items-center animate-[scaleUpFade_0.6s_ease-out_0.6s_forwards] opacity-0 will-change-transform">
           <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[750px] min-w-[300px] lg:min-w-[500px] flex items-center justify-center">
             <KeyholeAnimation />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
