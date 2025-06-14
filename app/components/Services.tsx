'use client';

import React from 'react';
import { Database, Code, BookOpen, ShoppingCart, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Smart ERP",
      description: "Intelligent enterprise resource planning solutions tailored to streamline your business operations, improve efficiency, and provide real-time insights for strategic decision-making.",
      features: ["Integrated modules", "Real-time analytics", "Process automation", "Custom dashboards"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Demand Based Software",
      description: "Bespoke software solutions designed to address your specific business challenges and requirements, delivering a perfect fit for your unique operational needs.",
      features: ["Tailored development", "Scalable architecture", "User-centric design", "Continuous support"]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Hybrid Learning",
      description: "Innovative learning management systems that combine digital and traditional educational approaches, creating engaging and effective learning experiences for all users.",
      features: ["Blended learning tools", "Interactive content", "Progress tracking", "Mobile accessibility"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "E-commerce Development",
      description: "End-to-end e-commerce solutions that help businesses establish a strong online presence, optimize the customer journey, and maximize sales conversions.",
      features: ["Seamless UX/UI", "Secure payment gateways", "Inventory management", "Marketing tools"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services & Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver comprehensive technology solutions designed to transform your business operations and drive growth in the digital era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            Discuss your project with us <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;