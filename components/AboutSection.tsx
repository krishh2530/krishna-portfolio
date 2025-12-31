
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-primary text-beige">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="flex justify-center mb-4 opacity-50">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl">Design with Purpose</h2>
        
        <p className="text-xl md:text-2xl leading-relaxed opacity-90 font-light max-w-2xl mx-auto italic">
          "I believe that good design is invisible. It facilitates a user's goal without drawing attention to itself. My process is rooted in empathy, iterative testing, and a deep respect for the problem space."
        </p>

        <div className="pt-8">
          <a 
            href="#more" 
            className="inline-block border border-beige/40 px-12 py-4 rounded-sm hover:bg-beige hover:text-primary transition-all text-xs font-bold uppercase tracking-[0.25em]"
          >
            More About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
