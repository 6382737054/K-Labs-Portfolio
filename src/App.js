import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Pages/HeroSection';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Clients from './Pages/Clients';

function App() {
  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-16">
        <Hero />
      </section>

      {/* About Us Section */}
      <section id="about" className="pt-0">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services" className="pt-0 bg-gray-200">
        <Services />
      </section>

      {/* Clients Section */}
      <section id="clients">
        <Clients />
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="h-screen pt-16 bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Us Section</h1>
      </section>
    </div>
  );
}

export default App;