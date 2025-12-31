
import React from 'react';

const FeaturedWork: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-6xl text-primary">Selected Works</h2>
            <p className="text-xs uppercase tracking-[0.3em] opacity-50 mt-4">Latest from the lab</p>
          </div>
          <a 
            href="#all-projects" 
            className="hidden md:inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-bold uppercase tracking-wider hover:opacity-50 transition-opacity mt-8 md:mt-0"
          >
            View all projects
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="group relative overflow-hidden rounded-sm aspect-[4/3] bg-primary/5 border border-primary/10 shadow-sm cursor-pointer">
            <img 
              src="https://picsum.photos/id/3/800/600" 
              alt="Project Brief Deck" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
          </div>

          <div className="space-y-8 lg:pl-8">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-50">
              <span>Fintech</span>
              <span className="w-1 h-1 rounded-full bg-primary/30"></span>
              <span>Case Study</span>
            </div>
            
            <h3 className="font-display text-3xl md:text-5xl font-bold text-primary">Project Brief Deck</h3>
            
            <p className="text-lg opacity-80 leading-relaxed font-medium">
              A comprehensive redesign of an internal project management tool, focusing on data visualization and streamlined communication workflows. The goal was to reduce cognitive load while maintaining feature density.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {['Data Viz', 'UX Research', 'UI Design'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-primary/5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <button className="bg-primary text-beige px-10 py-5 rounded-sm hover:opacity-90 transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
                Read Case Study
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
