import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Facts from './components/Facts';
import Technologies from './components/Technologies';
import Customers from './components/Customers';
import ContactForm from './components/ContactForm';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
// import ServiceCard from './components/ServiceCard';


function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <VisionMission />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Facts />
      <Technologies />
      <Customers />
      <ContactForm />
      <Partners />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;