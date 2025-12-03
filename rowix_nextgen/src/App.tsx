import React from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import Works from './components/sections/Works';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';
import Reasons from './components/sections/Reasons';

function App() {
  return (
    <div className="min-h-screen">
      <div className="w-[95%] mx-auto">
        <Header />
        <div id="home">
          <Hero />
        </div>
        <Stats />
        <Reasons />
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <Works />
        </div>
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
