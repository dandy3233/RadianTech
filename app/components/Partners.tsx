import React from 'react';

const Partners: React.FC = () => {
  // Using Pexels stock photos as placeholders for partner logos
  const partners = [
    {
      name: 'Partner 1',
      logo: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Partner 2',
      logo: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Partner 3',
      logo: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Partner 4',
      logo: 'https://images.pexels.com/photos/1337247/pexels-photo-1337247.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Partner 5',
      logo: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver exceptional technology solutions and services.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="p-4 rounded-lg bg-white shadow-sm border border-gray-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 md:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;