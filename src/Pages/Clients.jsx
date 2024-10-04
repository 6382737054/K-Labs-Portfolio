import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaStar, FaArrowRight, FaTimes } from 'react-icons/fa';

const topClients = [
  {
    id: 1,
    name: "Global Tech Solutions",
    industry: "Technology",
    logo: "/Images/klabslogo.png",
    image: "/Images/klabslogo.png",
    description: "Fortune 500 technology leader revolutionizing cloud computing solutions,Fortune 500 technology leader revolutionizing cloud computing solutions,",
    featuredProject: "Implemented a scalable cloud infrastructure, resulting in 40% cost reduction",
    website: "https://globaltechsolutions.com", 
  },
  {
    id: 2,
    name: "FinTech Pioneers",
    industry: "Finance",
    logo: "/images/fintech-pioneers-logo.png",
    image: "/images/fintech-pioneers-project.jpg",
    description: "Leading financial technology firm transforming digital banking",
    featuredProject: "Developed an AI-driven fraud detection system, improving accuracy by 30%",
    website: "https://fintechpioneers.com", 
  },
  {
    id: 3,
    name: "HealthTech Advances",
    industry: "Healthcare",
    logo: "/images/healthtech-advances-logo.png",
    image: "/images/healthtech-advances-project.jpg",
    description: "Revolutionary healthcare technology provider improving patient care",
    featuredProject: "Created a telemedicine platform, increasing patient reach by 250%",
    website: "https://healthtechadvances.com", 
  },
  {
    id: 4,
    name: "EcoSolutions Inc.",
    industry: "Environmental",
    logo: "/images/ecosolutions-logo.png",
    image: "/images/ecosolutions-project.jpg",
    description: "Sustainable technology solutions for a greener future",
    featuredProject: "Launched an IoT-based smart energy management system, reducing emissions by 20%",
    website: "https://ecosolutions.com", 
  },
  {
    id: 5,
    name: "AI Frontiers",
    industry: "Artificial Intelligence",
    logo: "/images/ai-frontiers-logo.png",
    image: "/images/ai-frontiers-project.jpg",
    description: "Cutting-edge AI research and development company",
    featuredProject: "Developed a natural language processing model with 95% accuracy in sentiment analysis",
    website: "https://aifrontiers.com", 
  },
  {
    id: 6,
    name: "CyberShield Dynamics",
    industry: "Cybersecurity",
    logo: "/images/cybershield-dynamics-logo.png",
    image: "/images/cybershield-dynamics-project.jpg",
    description: "Leading provider of advanced cybersecurity solutions for enterprise",
    featuredProject: "Implemented a zero-trust security architecture, reducing data breaches by 75%",
    website: "https://cybershielddynamics.com", 
  },
  {
    id: 7,
    name: "Quantum Computing Co.",
    industry: "Quantum Technology",
    logo: "/images/quantum-computing-co-logo.png",
    image: "/images/quantum-computing-co-project.jpg",
    description: "Pioneering quantum computing solutions for complex problem-solving",
    featuredProject: "Developed a quantum algorithm that optimized supply chain logistics, saving $10M annually",
    website: "https://quantumcomputingco.com", 
  },
  {
    id: 8,
    name: "BioTech Innovations",
    industry: "Biotechnology",
    logo: "/images/biotech-innovations-logo.png",
    image: "/images/biotech-innovations-project.jpg",
    description: "Cutting-edge biotechnology firm advancing medical research",
    featuredProject: "Created a CRISPR-based gene therapy, showing promising results in clinical trials",
    website: "https://biotechinnovations.com", 
  },
  {
    id: 9,
    name: "Smart City Planners",
    industry: "Urban Development",
    logo: "/images/smart-city-planners-logo.png",
    image: "/images/smart-city-planners-project.jpg",
    description: "Innovative urban planning solutions for sustainable cities",
    featuredProject: "Designed an AI-powered traffic management system, reducing congestion by 35%",
    website: "https://smartcityplanners.com", 
  },
  {
    id: 10,
    name: "AeroSpace Dynamics",
    industry: "Aerospace",
    logo: "/images/aerospace-dynamics-logo.png",
    image: "/images/aerospace-dynamics-project.jpg",
    description: "Advanced aerospace technologies for commercial and defense sectors",
    featuredProject: "Developed a new composite material, reducing aircraft weight by 15% and improving fuel efficiency",
    website: "https://aerospacedynamics.com", 
  },
];

const TopClients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClients, setFilteredClients] = useState(topClients);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {
    const filtered = topClients.filter(client =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.industry.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClients(filtered);
  }, [searchTerm]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white" id="top-clients">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 tracking-tight">Our Elite Clientele</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partnering with industry titans to drive transformative innovation across sectors
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search our clients..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-500"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredClients.map((client, index) => (
            <ClientCard 
              key={client.id} 
              client={client} 
              onSelect={() => setSelectedClient(client)}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedClient && (
          <ClientModal client={selectedClient} onClose={() => setSelectedClient(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

const ClientCard = ({ client, onSelect, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -5 }}
      onClick={onSelect}  // Clicking on the card opens the modal
    >
      <div className="p-6">
        <img src={client.logo} alt={client.name} className="h-16 object-contain mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
        <div className="text-sm text-gray-300">{client.industry}</div>
      </div>

      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h4 className="text-xl font-bold mb-4">{client.featuredProject}</h4>

        {/* Preventing event propagation when the button is clicked */}
        <a
          href={client.website} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}  // Prevent the modal from opening
          className="bg-white text-black font-semibold px-4 py-2 rounded-full mt-4 transition transform hover:scale-105"
        >
          Visit Website
        </a>
      </motion.div>
    </motion.div>
  );
};


const ClientModal = ({ client, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg overflow-hidden max-w-3xl w-full max-h-[90vh] h-auto shadow-2xl sm:max-w-[95%] sm:h-auto sm:max-h-[95vh]"
      >
        {/* Full image display */}
        <div className="relative">
          <img 
            src={client.image} 
            alt={`${client.name} Project`} 
            className="w-full h-auto max-h-[60vh] object-contain" // Ensures the full image is visible
          />
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable content for mobile */}
        <div className="p-6 overflow-y-auto max-h-[30vh] sm:max-h-[35vh]">
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{client.name}</h2>
            <p className="text-gray-700 text-lg">{client.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


export default TopClients;
