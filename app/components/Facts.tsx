'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCheck, Users, Award, Heart } from 'lucide-react';

interface FactItem {
  icon: React.ReactNode;
  number: number;
  title: string;
}

const Facts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationCompleted = useRef(false);

  const facts: FactItem[] = [
    {
      icon: <CheckCheck className="h-8 w-8" />,
      number: 450,
      title: "Completed Projects"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: 100,
      title: "Skilled Professionals"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: 25,
      title: "Industry Awards"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: 10000,
      title: "Happy Customers"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !animationCompleted.current) {
      animationCompleted.current = true;

      const intervals = facts.map((fact, index) => {
        const targetNumber = fact.number;
        const duration = 2000; // ms
        const steps = 50;
        const stepValue = targetNumber / steps;
        let currentStep = 0;

        return setInterval(() => {
          if (currentStep < steps) {
            setCounts(prevCounts => {
              const newCounts = [...prevCounts];
              newCounts[index] = Math.round(stepValue * currentStep);
              return newCounts;
            });
            currentStep++;
          } else {
            setCounts(prevCounts => {
              const newCounts = [...prevCounts];
              newCounts[index] = targetNumber;
              return newCounts;
            });
            clearInterval(intervals[index]);
          }
        }, duration / steps);
      });

      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }
  }, [isVisible, facts]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                {fact.icon}
              </div>
              <h3 className="text-4xl font-bold text-blue-900 mb-2">{counts[index]}+</h3>
              <p className="text-gray-600">{fact.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;