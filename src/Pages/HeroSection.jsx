import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BarChart2, Lock, Zap } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Innovative Solutions",
      description: "Empowering businesses with cutting-edge technology",
      icon: <Zap className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Data-Driven Insights",
      description: "Transform your decision-making with advanced analytics",
      icon: <BarChart2 className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Secure Infrastructure",
      description: "Protect your assets with state-of-the-art cybersecurity",
      icon: <Lock className="w-12 h-12 text-red-500" />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a5568" />
              <stop offset="100%" stopColor="#2d3748" />
            </linearGradient>
          </defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#grid-gradient)" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
  K Labs Technology And Solutions
  <br />
  Shaping Tomorrow's Technology
</span>

        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-center mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Delivering enterprise-grade solutions that drive innovation and accelerate growth.
        </motion.p>

        <div className="w-full max-w-4xl mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center bg-white bg-opacity-10 rounded-lg p-6"
            >
              {slides[currentSlide].icon}
              <div className="ml-6">
                <h2 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h2>
                <p className="text-gray-300">{slides[currentSlide].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.a
          href="https://www.klabsindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Visit K Labs</span>
          <ExternalLink className="ml-2 w-5 h-5" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;