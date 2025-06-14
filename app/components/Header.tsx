'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Info,
  Layers,
  Image,
  MessageSquare,
  Phone,
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="./logo/logo.png"
              alt="RadianTech Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-gray-900">RadianTech</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#vision" className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors">
              <Info className="h-4 w-4" /> About
            </a>
            <a href="#services" className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors">
              <Layers className="h-4 w-4" /> Services
            </a>
            <a href="#portfolio" className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors">
              <Image className="h-4 w-4" /> Portfolio
            </a>
            <a href="#testimonials" className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors">
              <MessageSquare className="h-4 w-4" /> Testimonials
            </a>
            <a href="#contact" className="flex items-center gap-1 text-gray-900 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4" /> Contact
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700 transition-colors"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            <a href="#vision" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              <Info className="h-4 w-4" /> About
            </a>
            <a href="#services" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              <Layers className="h-4 w-4" /> Services
            </a>
            <a href="#portfolio" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              <Image className="h-4 w-4" /> Portfolio
            </a>
            <a href="#testimonials" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              <MessageSquare className="h-4 w-4" /> Testimonials
            </a>
            <a href="#contact" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              <Phone className="h-4 w-4" /> Contact
            </a>
            <a
              href="#contact"
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors"
              onClick={toggleMenu}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
