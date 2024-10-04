import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-red-600" />, text: '123 Tech Street, Silicon Valley, CA 94000' },
    { icon: <FaPhone className="text-blue-600" />, text: '+1 (555) 123-4567' },
    { icon: <FaEnvelope className="text-gray-600" />, text: 'contact@klabs.com' },
    { icon: <FaWhatsapp className="text-green-500" />, text: '+1 (555) 987-6543' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="text-blue-700" />, url: 'https://www.linkedin.com/company/klabs', name: 'LinkedIn' },
    { icon: <FaWhatsapp className="text-green-500" />, url: 'https://wa.me/15559876543', name: 'WhatsApp' },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 min-h-screen flex items-center justify-center p-8">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-10 max-w-5xl w-full"
      >
        <h2 className="text-5xl font-bold mb-8 text-center text-indigo-800">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-indigo-700">Contact Information</h3>
            <ul className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 text-gray-700"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg">{item.text}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <h4 className="text-2xl font-semibold mb-4 text-indigo-700">Connect with Us</h4>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-xl transition-colors"
                  >
                    {link.icon}
                    <span className="text-indigo-600 hover:text-indigo-800">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-indigo-700">Our Location</h3>
            <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6415758375604!2d-122.08409498469226!3d37.422365879825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors w-full shadow-md"
              onClick={() => window.open('https://www.klabs.com', '_blank')}
            >
              Visit Our Website
            </motion.button>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600">Ready to innovate? Let's create something extraordinary together!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;