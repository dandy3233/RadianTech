import React from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMission: React.FC = () => {
  return (
    <section id="vision" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 transform transition-transform hover:scale-105 hover:shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-6">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To be the leading technology partner that empowers businesses to thrive in the digital era through innovative solutions and exceptional service. We envision a future where technology seamlessly enhances human potential and drives sustainable growth for our clients.
            </p>
          </div>
          
          <div className="bg-blue-900 p-8 rounded-xl shadow-sm text-white transform transition-transform hover:scale-105 hover:shadow-md">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-blue-100 mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-blue-100 leading-relaxed">
              To deliver transformative technology solutions that solve complex business challenges and create lasting value. We are committed to fostering innovation, maintaining technical excellence, and building strong partnerships with our clients to achieve their goals and exceed their expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;