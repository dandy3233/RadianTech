import React from 'react';
import { CheckCircle, Clock, Users, Shield, Award } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Expertise & Experience",
      description: "Our team brings years of industry experience and technical expertise to every project we undertake."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timely Delivery",
      description: "We are committed to delivering high-quality solutions within agreed timelines and budgets."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client-Centric Approach",
      description: "We prioritize understanding your unique needs and challenges to deliver tailored solutions."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Reliability",
      description: "Our solutions are built with security at their core, ensuring your data and operations are protected."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Recognition",
      description: "Our work has been recognized with multiple industry awards for excellence and innovation."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Radian Technology?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Partner with us to leverage cutting-edge technology solutions that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-blue-700/30 backdrop-blur-sm p-6 rounded-xl hover:bg-blue-700/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-blue-100">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;