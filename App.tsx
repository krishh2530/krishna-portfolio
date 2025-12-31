
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import OtherProjects from './components/OtherProjects';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-beige">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <OtherProjects />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
