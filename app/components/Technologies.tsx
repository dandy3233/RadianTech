import React from 'react';
import { Code, Database, Cloud, Layout, Server, Shield } from 'lucide-react';

const Technologies: React.FC = () => {
  const technologies = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Modern Frameworks",
      description: "Building with the latest front-end and back-end frameworks"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Advanced Databases",
      description: "Optimized database solutions for performance and scalability"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Infrastructure",
      description: "Secure and scalable cloud-based deployment options"
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring seamless user experience"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "DevOps Excellence",
      description: "Continuous integration and delivery for rapid deployment"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Protocols",
      description: "Advanced security measures protecting your data"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Smart Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;