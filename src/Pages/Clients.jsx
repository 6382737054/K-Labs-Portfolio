import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaStar, FaArrowRight, FaTimes } from 'react-icons/fa';

const topClients = [
  {
    id: 1,
    name: "Namma School Namma Ooru Palli (NSNOP)",
    industry: "Technology",
    logo: "/Images/NSOPlogo.png",
    image: "/Images/NSOP.png",
    description: "Our vision is to transform government schools in Tamil Nadu into highly desirable institutions for students from all socio-economic backgrounds, ensuring equitable and high-quality education. We aim to improve every aspect of the school experience, from infrastructure and health to nutrition, teaching methods, sports, culture, and skill development, preparing students to thrive in a rapidly evolving world. By uniting community members, individuals, and corporations committed to investing in and nurturing the next generation, we seek to fulfill this promise.,",
    featuredProject: "Our vision is to transform government schools in Tamil Nadu into highly desirable institutions for students",
    website: "https://nammaschool.tnschools.gov.in/#/", 
  },
  {
    id: 2,
    name: "Naan Mudhalvan",
    industry: "Technology",
    logo: "/Images/NaanMudhalvanLogo.png",
    image: "/Images/NaanMudhalvan.png",
    description: "The Naan Mudhalvan scheme aims to transform higher education in Tamil Nadu by raising the Gross Enrolment Ratio from 51% to 100% in the next three years. Its core objective is to ensure that all students can pursue meaningful higher education after finishing school. The scheme is driven by a set of essential missions designed to make this ambitious goal achievable",
    featuredProject: "Our main mission is to invest in the quality of education, especially in higher education.",
    website: "https://naanmudhalvan.tnschools.gov.in/", 
  },
  {
    id: 3,
    name: "SDAT ChampionsFoundation",
    industry: "Technology",
    logo: "/Images/SDATLogo.png",
    image: "/Images/SDAT.png",
    description: "",
    featuredProject: "An initiative to partner with citizens and corporate to revamp sports in Tamil Nadu.",
    website: "https://tnchampions.sdat.in/home", 
  },
  {
    id: 4,
    name: "Tamil Nadu Public Service Commission.",
    industry: "Education",
    logo: "/Images/TNPSCLogo.png",
    image: "/Images/TNPSC.png",
    description: "As mandated by the Constitution of India, the Tamil Nadu Public Service Commission consistently aims to create and nurture a public service that is independent, impartial, ethical, effective, and capable of meeting the new challenges faced by the government. It strives to be responsive to the growing expectations of the public at large, with particular attention to marginalized sections.",
    featuredProject: "Ensure a transparent recruitment process for the state civil services by technology solutions.",
    website: "https://www.tnpsc.gov.in/", 
  },
  {
    id: 5,
    name: "Adi Dravidar and Tribal Welfare Department - Legal Management System",
    industry: "Technology",
    logo: "/Images/AdriDravidarLogo.png",
    image: "/Images/AdriDravidar.png",
    description: "The legal case management software greatly aids the Adi Dravidar and Tribal Welfare Department by providing an efficient way to track and manage legal cases. It allows for real-time monitoring of case statuses, reducing the need for paper reports and making document storage much easier through a centralized digital system. This shift from physical paperwork to a digital platform simplifies case management, improves access to important information, and helps the department work more effectively, delivering justice more promptly.",
    featuredProject: "Adi Dravidar and Tribal Welfare Department",
    website: "https://adwlms.com/login", 
  },
  {
    id: 6,
    name: "Parunthu - Greater Chennai Police",
    industry: "Technology",
    logo: "/Images/Parunthulogo.png",
    image: "/Images/Parunthu.png",
    description: "Parundhu is an enhanced 14-hour monitoring platform that has facilities to record the details of history sheet offenders and non-history sheet offenders maintained in 104 police stations in GCP jurisdiction. It must be noted that alert messages would be sent immediately to the senior police officers when the accused is remanded or when the accused files a bail petition, when the accused is granted bail, and when the accused is released from prison.",
    featuredProject: "Facilities to record the details of history sheet offenders and non-history sheet offenders maintained in 104 police stations in GCP jurisdiction.",
    website: "https://parundhu.a2zweb.in/login", 
  },
  {
    id: 7,
    name: "Women's Development Corporation",
    industry: "Technology",
    logo: "/Images/WomenDevlogo.png",
    image: "/Images/WomenDev",
    description: "Pioneering quantum computing solutions for complex problem-solving",
    featuredProject: "Various ERP solutions have been developed for the TN Women’s Development Corporation based on their needs and requirements",
    website: "https://mathikalam.org/", 
  },
  {
    id: 8,
    name: "Viru Care - Risk Protection FrameWork",
    industry: "Health Care",
    logo: "/Images/Virucarelogo.png",
    image: "/Images/Virucare.png",
    description: "Viru Care risk management framework is introduced to identify and track the High Risk Mothers, who need Intensive monitoring and super Specialty medical care, using the the data obtained through continuous Monitoring, Counselling, Medical care, Maternal health condition, Nutrition status of the pregnant women in the district. The system uses Artificial Intelligence, Counselling through online telephony, Continuous monitoring mechanism among others to control the maternal mortality and to improve the maternal health.",
    featuredProject: "Project developed to monitor pregnancy stages  throughout the process for Virudhunagar District",
    website: "https://virucare.in/index", 
  },
  {
    id: 9,
    name: "TN Watershed Management",
    industry: "Urban Development",
    logo: "/Images/Watershedlogo.png",
    image: "/Images/WaterShed.png",
    description: "A single agency to implement watershed development projects in a scientific manner, with the prime objective to conserve natural resources and develop these resources in a sustainable and participatory way to improve the livelihoods of the watershed community, besides enhancing agricultural productivity.",
    featuredProject: "Tamil Nadu Watershed Development Agency (TAWDEVA)",
    website: "https://tnwatershed.a2zweb.in/", 
  },
  {
    id: 10,
    name: "TN Text Books",
    industry: "Education ",
    logo: "/Images/textbooklogo.png",
    image: "/Images/textbook.png",
    description: "The Textbook Corporation is continuously endeavoring to supply quality textbooks at affordable prices to the school students of Tamil Nadu in a timely manner. Continuous efforts are being made to upgrade the quality of textbooks.",
    featuredProject: "Software was developed for ordering of books online through the TN Books portal.",
    website: "https://tbook.a2zweb.in/index.html", 
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
          <h2 className="text-5xl font-bold mb-4 tracking-tight">Our Esteemed Projects</h2>
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
