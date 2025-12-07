import React, { useEffect, useState } from 'react';
import { LockIcon } from './Icons';

interface FloatingElement {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
}

const Background: React.FC = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate random floating elements
    const count = 20;
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        left: Math.random() * 100, // percentage
        delay: Math.random() * 20, // seconds
        size: 14 + Math.random() * 10, // px
        duration: 15 + Math.random() * 20, // seconds
      });
    }
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-arc-base">
      {/* 1. Base Gradient Layers */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, #0A0F1A 0%, transparent 55%),
            radial-gradient(circle at 50% 50%, #0D1828 0%, transparent 50%),
            radial-gradient(circle at 85% 40%, #0F1F32 0%, transparent 50%)
          `
        }}
      />

      {/* 2. Cyan Glow Wash */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 35%, rgba(47,203,255,0.04), transparent 65%)`
        }}
      />

      {/* 3. Ultrathin Scanlines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.8) 0px, transparent 1px)`,
          backgroundSize: '100% 3px'
        }}
      />

      {/* 4. Floating Padlocks */}
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute bottom-[-50px] text-arc-text-secondary animate-float-up opacity-0"
          style={{
            left: `${el.left}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            opacity: 0.08
          }}
        >
          <LockIcon className="w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default Background;