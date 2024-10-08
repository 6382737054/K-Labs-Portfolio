import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-red-600" />, text: 'No 3, Krishnamma Rd, near TAJ Hotel, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034' },
    { icon: <FaPhone className="text-blue-600" />, text: '+91 98419 23808' },
    { icon: <FaEnvelope className="text-gray-600" />, text: 'infot@klabsindia.com' },
    { icon: <FaWhatsapp className="text-green-500" />, text: '+91 98419 23808' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="text-blue-700" />, url: 'https://www.linkedin.com/company/klabs', name: 'LinkedIn' },
    { icon: <FaWhatsapp className="text-green-500" />, url: 'https://wa.me/15559876543', name: 'WhatsApp' },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 min-h-screen flex items-center justify-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10 max-w-5xl w-full"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center text-indigo-800">Get in Touch</h2>
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-indigo-700">Contact Information</h3>
            <ul className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start sm:items-center justify-start sm:justify-center space-x-3 sm:space-x-4 text-gray-700"
                >
                  <span className="text-xl sm:text-2xl mt-1 sm:mt-0">{item.icon}</span>
                  <span className="text-sm sm:text-lg text-left">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-lg sm:text-xl transition-colors"
                >
                  {link.icon}
                  <span className="text-indigo-600 hover:text-indigo-800">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full font-semibold text-base sm:text-lg hover:bg-indigo-700 transition-colors shadow-md"
              onClick={() => window.open('https://www.klabsindia.com/', '_blank')}
            >
              Visit Our Website
            </motion.button>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-lg sm:text-xl text-gray-600">Ready to innovate? Let's create something extraordinary together!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;