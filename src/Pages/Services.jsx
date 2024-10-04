import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaPaintBrush, FaCloud, FaDatabase, FaShieldAlt, FaChartLine, FaBullhorn, FaSearch, FaHandsHelping } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Crafting bespoke, high-performance web solutions that drive business growth and enhance user engagement.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Developing cutting-edge mobile applications that seamlessly integrate with your business ecosystem.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Design',
    description: 'Creating intuitive, visually stunning interfaces that elevate brand perception and user satisfaction.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Services',
    description: 'Implementing scalable, secure cloud solutions to optimize operations and foster innovation.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Management',
    description: 'Architecting robust database solutions for efficient data storage, retrieval, and analysis.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Cybersecurity',
    description: 'Implementing state-of-the-art security measures to safeguard your digital assets and maintain trust.',
  },
  {
    icon: <FaChartLine />,
    title: 'Data Analytics',
    description: 'Harnessing the power of data to uncover actionable insights and drive informed decision-making.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Digital Marketing',
    description: 'Crafting data-driven marketing strategies to amplify your brand presence and drive customer acquisition.',
  },
  {
    icon: <FaSearch />,
    title: 'SEO Optimization',
    description: 'Elevating your digital footprint through advanced SEO techniques to attract high-quality traffic.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'IT Consulting',
    description: 'Providing strategic IT guidance to align technology investments with your business objectives.',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Innovative Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg bg-gray-800 cursor-pointer group"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        variants={{
          hover: {
            opacity: 0.1,
          }
        }}
      />
      <motion.div
        className="absolute inset-0 radial-gradient opacity-0"
        variants={{
          hover: {
            opacity: 1,
            background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
          }
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      />
      <div className="relative p-6 z-10">
        <div className="text-3xl text-blue-400 mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-orange-500">{service.title}</h3>
        <p className="text-gray-300 leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default Services;