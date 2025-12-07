import React, { useEffect, useRef, useState } from 'react';
import { StatItem } from '../types';

const STATS: StatItem[] = [
  { value: "<1s", label: "Finality", subLabel: "Lightning fast transactions" },
  { value: "100%", label: "Self-Custodial", subLabel: "Your keys, your crypto" },
  { value: "$0", label: "Gas with USDC", subLabel: "Sponsored transactions" },
];

const Stats: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {STATS.map((stat, index) => (
            <div 
              key={index}
              className={`
                relative bg-arc-surface/60 backdrop-blur-md border border-arc-border rounded-xl p-8
                transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-arc-accent/30
                group
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10">
                <div className="text-4xl font-bold text-arc-accent mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-arc-text-secondary mb-1">
                  {stat.label}
                </div>
                {stat.subLabel && (
                  <div className="text-sm text-arc-text-secondary/60">
                    {stat.subLabel}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;