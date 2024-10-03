import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="mt-16 bg-orange-100 min-h-screen flex flex-col justify-center items-center p-8">
      {/* Company Name */}
      <motion.h1
        className="text-5xl font-bold text-orange-600 mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariant}
      >
        K Labs Technology & Solutions Pvt Ltd
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-xl text-gray-700 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariant}
        transition={{ delay: 0.2 }}
      >
        Knowledge Empowers
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.a
        href="https://klabs.com"
        className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={textVariant}
        transition={{ delay: 0.4 }}
      >
        Visit Our Website
      </motion.a>
    </section>
  );
};

export default Home;
