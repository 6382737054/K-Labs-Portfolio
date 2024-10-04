import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Pages/HeroSection';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Clients from './Pages/Clients';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="relative">
      <Navbar />
      
      <section id="hero" className="pt-16">
        <Hero />
      </section>

      <section id="about" className="pt-0">
        <AboutUs />
      </section>

      <section id="services" className="pt-0 bg-gray-200">
        <Services />
      </section>

      <section id="clients">
        <Clients />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;