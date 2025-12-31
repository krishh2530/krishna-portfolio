
import React from 'react';

const projects = [
  {
    title: "Competition Analysis",
    description: "Deep dive into market competitors to identify gaps and opportunities for a new SaaS product launch.",
    image: "https://picsum.photos/id/20/800/450"
  },
  {
    title: "Mobile Resource Hub",
    description: "An educational platform designed for on-the-go learning with micro-interactions and gamification elements.",
    image: "https://picsum.photos/id/160/800/450"
  }
];

const OtherProjects: React.FC = () => {
  return (
    <section className="pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((p, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm aspect-video mb-8 border border-primary/10 shadow-sm">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="font-display text-2xl mb-3 text-primary group-hover:underline decoration-primary underline-offset-8">
                {p.title}
              </h4>
              <p className="opacity-70 leading-relaxed font-medium max-w-md">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
