
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Decorative Circles (SVG) */}
      <div className="absolute top-20 right-[-50px] md:right-10 opacity-10 pointer-events-none">
        <svg height="400" width="400" viewBox="0 0 100 100" className="text-primary">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-10 z-10">
        <div className="inline-block py-1 px-4 border border-primary rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          UX / Product Designer
        </div>
        
        <h1 className="font-display text-4xl md:text-7xl lg:text-8xl leading-tight font-normal text-primary">
          &ldquo;The thought that I might not make it never crosses my consciousness.&rdquo;
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-70 font-medium">
          ~ Marty Supreme
        </p>

        <div className="pt-12 flex justify-center">
          <div className="w-[1px] h-20 bg-primary opacity-20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
