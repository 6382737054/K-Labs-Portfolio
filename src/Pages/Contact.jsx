import React from 'react';
import { MapPin, Phone, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact = () => {
  // Chennai coordinates
  const position = [13.0569, 80.2449];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      label: "Visit Us",
      text: "No 3, Krishnamma Rd, near TAJ Hotel, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034",
      detail: "Monday - Friday: 9:00 AM - 6:00 PM"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      label: "Call Us",
      text: "+91 98419 23808",
      detail: "24/7 Customer Support"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-500" />,
      label: "Email Us",
      text: "infot@klabsindia.com",
      detail: "We'll respond within 24 hours"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/company/klabs',
      name: 'LinkedIn',
      bgColor: 'bg-blue-600'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      url: 'https://wa.me/15559876543',
      name: 'WhatsApp',
      bgColor: 'bg-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-300">Let's create something extraordinary together</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-white/10 rounded-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.label}</h3>
                      <p className="text-gray-300 mb-1">{item.text}</p>
                      <p className="text-sm text-gray-400">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${link.bgColor} p-3 rounded-full hover:opacity-90 transition-opacity`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8">
              <h2 className="text-3xl font-semibold text-white mb-8">Our Location</h2>
              <div className="h-96 rounded-2xl overflow-hidden">
                <MapContainer 
                  center={position} 
                  zoom={16} 
                  style={{ height: "100%", width: "100%" }}
                  scrollWheelZoom={false}
                  dragging={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      KLabs India<br/>
                      No 3, Krishnamma Rd,<br/>
                      Nungambakkam, Chennai
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <button 
              onClick={() => window.open('https://www.klabsindia.com/', '_blank')}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-colors"
            >
              Visit Our Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;