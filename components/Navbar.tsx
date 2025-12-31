
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-beige/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Profile Circle & Name */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden border border-primary">
            <img 
              src="https://picsum.photos/id/64/100/100" 
              alt="Alex Morgan" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-primary">Alex Morgan</span>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-primary">
          <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
          <a href="#about" className="hover:opacity-60 transition-opacity">About Me</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
