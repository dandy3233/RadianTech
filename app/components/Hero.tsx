"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

// 3D Globe Component
const Globe = () => {
  return (
    <mesh rotation={[0, 0, 0]}>
      {/* Sphere geometry for globe */}
      <sphereGeometry args={[2.5, 64, 64]} />
      {/* Wireframe tech-style material */}
      <meshStandardMaterial
        color="#60A5FA"
        wireframe
        emissive="#3B82F6"
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      className="pt-20 text-white relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/image copy 2.png')" }}
    >
      {/* Overlay for readability */}
     <div className="absolute inset-0 bg-black/83 z-0" />


      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in">
              Transforming Your Digital<span className="text-blue-300"> Land Scape</span>
            </h1>  
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
              We deliver innovative technology solutions that drive business growth and create exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-blue-50 transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="border border-white text-white px-6 py-3 rounded-md font-medium flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Side: 3D Globe Animation */}
          <div className="md:w-1/2 h-[400px] w-full">
            <Canvas camera={{ position: [5, 3, 5] }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
              <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />
              <Globe />
            </Canvas>
          </div>
        </div>
      </div>

      {/* Bottom white curve */}
      <div className="h-16 bg-white rounded-tl-[50px] rounded-tr-[50px] -mb-1 relative z-10"></div>
    </section>
  );
};

export default Hero;
