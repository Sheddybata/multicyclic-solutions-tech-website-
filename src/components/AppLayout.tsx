import React, { useState } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import WhyChooseUs from './WhyChooseUs';
import ClientsSection from './ClientsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        <div data-aos="fade-up">
          <HeroSection />
        </div>
        <div data-aos="fade-up">
          <AboutSection />
        </div>
        <div data-aos="fade-up">
          <ServicesSection />
        </div>
        <div data-aos="fade-up">
          <WhyChooseUs />
        </div>
        <div data-aos="fade-up">
          <ClientsSection />
        </div>
        <div data-aos="fade-up">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;