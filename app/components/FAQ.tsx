'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "What services does RadianTech offer?",
      answer: "RadianTech provides a comprehensive range of technology solutions including Smart ERP systems, custom software development, hybrid learning platforms, and e-commerce solutions. Our services are designed to address complex business challenges and drive digital transformation."
    },
    {
      question: "How does your development process work?",
      answer: "Our development process follows an agile methodology with clearly defined phases: discovery and requirements gathering, planning and design, development, testing, deployment, and ongoing support and maintenance. We maintain transparent communication throughout the process to ensure your project meets all requirements and expectations."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a diverse range of industries including healthcare, finance, education, retail, manufacturing, and professional services. Our solutions are customized to address the specific challenges and requirements of each industry while leveraging our technical expertise and best practices."
    },
    {
      question: "How do you ensure the security of developed applications?",
      answer: "Security is a top priority in all our development work. We implement industry-standard security protocols, conduct regular security audits, use secure coding practices, perform penetration testing, and stay updated on the latest security threats and countermeasures to ensure your applications and data remain protected."
    },
    {
      question: "What support do you provide after project completion?",
      answer: "We offer comprehensive post-launch support including technical maintenance, performance monitoring, security updates, feature enhancements, and responsive customer support. We also provide training for your team to ensure they can effectively use and manage the implemented solutions."
    },
    {
      question: "How do you handle project timelines and budgets?",
      answer: "We establish clear project timelines and budgets during the initial planning phase. Our project management team uses robust tracking tools to monitor progress, identify potential delays early, and implement mitigation strategies when necessary. We maintain transparent communication regarding project status and any changes that might affect the timeline or budget."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and expertise.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-medium text-blue-900">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can t find the answer you re looking for?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;