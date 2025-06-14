import React from 'react';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface ServiceCardProps {
  service: ServiceFeature;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1 transform">
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 mb-5 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white shadow-sm">
        {service.icon}
      </div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-5">{service.description}</p>
      <ul className="space-y-2 text-sm text-gray-700">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mt-1 mr-2 w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
