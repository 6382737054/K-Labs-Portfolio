import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const topClients = [
  {
    id: 1,  
    name: "Namma School Namma Ooru Palli (NSNOP)",
    industry: "Technology",
    logo: "/Images/NSOPlogo.png",
    image: "/Images/NSOP.png",
    description: "Our vision is to transform government schools in Tamil Nadu into highly desirable institutions for students from all socio-economic backgrounds, ensuring equitable and high-quality education. We aim to improve every aspect of the school experience, from infrastructure and health to nutrition, teaching methods, sports, culture, and skill development, preparing students to thrive in a rapidly evolving world. By uniting community members, individuals, and corporations committed to investing in and nurturing the next generation, we seek to fulfill this promise.",
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
    name: "SDAT Champions Foundation",
    industry: "Technology",
    logo: "/Images/SDATLogo.png",
    image: "/Images/SDAT.png",
    description: "This initiative aims to transform sports in Tamil Nadu by partnering with citizens and corporations to revamp its culture, infrastructure, and ecosystem. The vision is to rejuvenate and energize sports through modern facilities, comprehensive support for athletes, top-notch training, and the promotion of a wide range of sports, including traditional ones. It also focuses on advancing sports science, encouraging diverse forms of sports, and ensuring that sports become accessible and equitable for everyone.",
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
    image: "/Images/WomenDev.png",
    description: "Pioneering quantum computing solutions for complex problem-solving",
    featuredProject: "Various ERP solutions have been developed for the TN Women's Development Corporation based on their needs and requirements",
    website: "https://mathikalam.org/", 
  },
  {
    id: 8,
    name: "Viru Care - Risk Protection FrameWork",
    industry: "Health Care",
    logo: "/Images/Virucarelogo.png",
    image: "/Images/Virucare.png",
    description: "Viru Care risk management framework is introduced to identify and track the High Risk Mothers, who need Intensive monitoring and super Specialty medical care, using the the data obtained through continuous Monitoring, Counselling, Medical care, Maternal health condition, Nutrition status of the pregnant women in the district. The system uses Artificial Intelligence, Counselling through online telephony, Continuous monitoring mechanism among others to control the maternal mortality and to improve the maternal health.",
    featuredProject: "Project developed to monitor pregnancy stages throughout the process for Virudhunagar District",
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
    industry: "Education",
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

  useEffect(() => {
    if (selectedClient) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedClient]);

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

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${selectedClient ? 'blur-sm' : ''}`}>
          {filteredClients.map((client) => (
            <motion.div 
              key={client.id}
              className="relative rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedClient(client)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={client.logo} alt={client.name} className="h-24 mx-auto p-4" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{client.name}</h3>
                <p className="text-gray-600 mb-4">{client.industry}</p>
                <p className="text-gray-700">{client.featuredProject}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedClient && (
            <motion.div 
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-gray-50 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-90vh overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <div className="relative p-6">
                  <button
                    className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 transition-colors duration-200"
                    onClick={() => setSelectedClient(null)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <img src={selectedClient.image} alt={selectedClient.name} className="h-48 mx-auto object-contain mb-4" />
                  <h3 className="text-2xl font-semibold mt-4 text-gray-900">{selectedClient.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedClient.industry}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{selectedClient.description}</p>
                  <a 
                    href={selectedClient.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TopClients;