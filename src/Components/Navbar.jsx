import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AiFillHome, AiFillInfoCircle, AiFillAppstore } from 'react-icons/ai';
import { FaUsers, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const menuItems = [
    { to: "hero", icon: <AiFillHome className="text-blue-500" />, text: "Home" },
    { to: "about", icon: <AiFillInfoCircle className="text-green-500" />, text: "About" },
    { to: "services", icon: <AiFillAppstore className="text-purple-500" />, text: "Services" },
    { to: "clients", icon: <FaUsers className="text-orange-500" />, text: "Clients" },
    { to: "contact", icon: <FaPhoneAlt className="text-red-500" />, text: "Contact" }
  ];

  const NavLink = ({ item, mobile = false }) => (
    <Link
      activeClass="active"
      to={item.to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={mobile ? closeMenu : undefined}
      className="text-black flex items-center space-x-2 hover:text-orange-500 cursor-pointer p-2 rounded"
    >
      {item.icon}
      <span>{item.text}</span>
    </Link>
  );

  return (
    <header
      className={`${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      } fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4">
        <img
          src="Images/klabslogo.png"
          alt="K Labs Logo"
          className="h-10"
        />

        <button
          onClick={toggleMobileMenu}
          className="text-black md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <NavLink key={index} item={item} />
          ))}
        </nav>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-4 bg-white p-4 border-t border-gray-300 shadow-md">
          {menuItems.map((item, index) => (
            <NavLink key={index} item={item} mobile={true} />
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;