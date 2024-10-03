import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Pages/HeroSection';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="relative">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-16">
        <Hero />
      </section>

      {/* About Us Section */}
      <section id="about" className="pt-0"> {/* Remove pt-16 here */}
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services" className="h-screen pt-16 bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Services Section</h1>
      </section>

      {/* Clients Section */}
      <section id="clients" className="h-screen pt-16 bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Clients Section</h1>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="h-screen pt-16 bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Contact Us Section</h1>
      </section>
    </div>
  );
}

export default App;
