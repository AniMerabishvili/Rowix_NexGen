import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import WhyUs from './components/sections/WhyUs';
import Services from './components/sections/Services';
import Works from './components/sections/Works';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <div className="w-[95%] mx-auto">
        <Header />
        <Hero />
        <Stats />
        <WhyUs />
        <Services />
        <Works />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
