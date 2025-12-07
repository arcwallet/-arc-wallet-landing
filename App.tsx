
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Security from './components/Security';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Background from './components/Background';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative font-sans text-arc-text-main antialiased selection:bg-arc-accent/30 selection:text-white">
      {/* Global Background Layer */}
      <Background />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow flex flex-col">
          <Hero />
          <Features />
          <Security />
          <HowItWorks />
          <FAQ />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
