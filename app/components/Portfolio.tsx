'use client';

import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'erp', label: 'ERP Solutions' },
    { id: 'ecommerce', label: 'E-commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Enterprise Resource Planning System',
      category: 'erp',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Custom ERP solution for manufacturing company'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'ecommerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Full-featured online shopping platform'
    },
    {
      id: 3,
      title: 'Mobile Banking Application',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Secure and intuitive mobile banking app'
    },
    {
      id: 4,
      title: 'Healthcare Management System',
      category: 'web',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Comprehensive healthcare management solution'
    },
    {
      id: 5,
      title: 'Learning Management System',
      category: 'web',
      image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interactive learning platform for educational institutions'
    },
    {
      id: 6,
      title: 'E-commerce Mobile App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Native mobile shopping experience'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Check Some of our Selected Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">{project.category.toUpperCase()}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900 mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;