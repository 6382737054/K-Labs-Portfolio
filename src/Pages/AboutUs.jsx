import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Users, TrendingUp, ChevronRight } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState('0');
  
    useEffect(() => {
      let start = 0;
      const end = parseInt(value.substring(0, value.length - 1));
      if (start === end) return;
  
      const totalMilSecDur = duration * 1000;
      const incrementTime = totalMilSecDur / end;
  
      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + value.substring(value.length - 1));
        if (start === end) clearInterval(timer);
      }, incrementTime);
  
      return () => clearInterval(timer);
    }, [value, duration]);
  
    return <span className="text-orange-500">{count}</span>; // Set text color to orange
  };
  

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { icon: <Globe className="h-8 w-8" />, value: '200+', label: 'Total Designs' },
    { icon: <Users className="h-8 w-8" />, value: '100+', label: 'Sites Hosted' },
    { icon: <TrendingUp className="h-8 w-8" />, value: '80+', label: 'Clients' },
    { icon: <Cpu className="h-8 w-8" />, value: '17+', label: 'Years Of Experience' },
  ];

  const tabContent = [
    {
      title: 'Our Vision',
      content: 'Pioneering the future of technology, K Labs envisions a world where innovation drives sustainable progress and transforms industries. We strive to be at the forefront of digital evolution, creating solutions that not only meet the challenges of today but anticipate the needs of tomorrow.'
    },
    {
      title: 'Our Mission',
      content: 'K Labs is committed to delivering unparalleled technological solutions that empower businesses to thrive in the digital age. Through relentless innovation, strategic partnerships, and a passion for excellence, we aim to be the catalyst for our clients\' success and the driving force behind global digital transformation.'
    },
    {
      title: 'Our Values',
      content: 'Innovation, Integrity, Collaboration, and Client-Centricity form the cornerstone of K Labs\' ethos. We believe in pushing boundaries, maintaining the highest ethical standards, fostering a culture of teamwork, and always putting our clients\' needs at the heart of everything we do.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-4">
            Redefining the Future of Tech
          </h1>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            K Labs: Where Visionary Ideas Transform into Groundbreaking Realities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Legacy of Innovation</h2>
            <p className="text-lg text-gray-300 mb-8">
              For over two decades, K Labs has been pushing the boundaries of what's possible in technology. 
              Our journey is marked by groundbreaking innovations, strategic partnerships with industry giants, 
              and a relentless pursuit of excellence that has positioned us at the forefront of the digital revolution.
            </p>
            <ul className="space-y-4">
              {[
                'Artificial Intelligence & Machine Learning',
                'Quantum Computing Solutions',
                'Advanced Cybersecurity Systems',
                'Blockchain Technology Integration'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <ChevronRight className="h-5 w-5 text-blue-400" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-blue-800 bg-opacity-50 p-8 rounded-lg shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Driving Digital Transformation</h3>
            <p className="text-gray-300 mb-6">
              At K Labs, we don't just adapt to the future; we create it. Our team of visionary experts 
              works tirelessly to develop cutting-edge solutions that address the most complex challenges 
              faced by businesses in the digital age.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl font-bold text-blue-400">20+</p>
                <p className="text-sm opacity-75">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-400">100+</p>
                <p className="text-sm opacity-75">Industry Partners</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">K Labs by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg text-center"
              >
                <div className="text-blue-400 mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Guiding Principles</h2>
          <div className="bg-white bg-opacity-10 rounded-lg p-1">
            <div className="flex space-x-1 mb-4">
              {tabContent.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                    activeTab === index ? 'bg-blue-600' : 'hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <p className="text-lg">{tabContent[activeTab].content}</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 text-center"
        >
          {/* Optional additional content can be added here */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
