import React from 'react';

const Customers: React.FC = () => {
  // Using Pexels stock photos as placeholders for client logos
  const customers = [
    {
      name: 'TechCorp',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Innovate Inc',
      logo: 'https://images.pexels.com/photos/267351/pexels-photo-267351.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Global Systems',
      logo: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Nexus Group',
      logo: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Future Solutions',
      logo: 'https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Elite Tech',
      logo: 'https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Smart Systems',
      logo: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Ace Innovations',
      logo: 'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Discover Our Customers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across diverse industries to deliver exceptional technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {customers.map((customer, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-4 md:p-6 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-sm"
            >
              <img
                src={customer.logo}
                alt={`${customer.name} logo`}
                className="max-h-12 md:max-h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;