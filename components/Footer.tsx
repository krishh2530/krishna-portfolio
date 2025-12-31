
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 px-6 bg-beige border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div className="space-y-2">
            <p className="font-display font-bold text-2xl text-primary tracking-tight">Alex Morgan</p>
            <p className="text-xs uppercase tracking-widest opacity-50">© {currentYear} All rights reserved.</p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs font-bold uppercase tracking-widest text-primary">
            <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Twitter</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Dribbble</a>
          </div>

          <div className="group relative">
            <a 
              href="mailto:hello@alexmorgan.design" 
              className="text-sm font-bold uppercase tracking-[0.3em] text-primary border-b border-primary/30 pb-2 group-hover:border-primary transition-all block"
            >
              Get in Touch
            </a>
          </div>

        </div>
        
        <div className="mt-20 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
          <p>Handcrafted in San Francisco</p>
          <p>Built with Passion & Minimalist Principles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
