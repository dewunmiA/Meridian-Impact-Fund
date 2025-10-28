import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/africa/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          Championing Equitable Development,
          <br />
          Empowering Communities
        </h1>
        <a 
          href="#contact" 
          className="bg-[#D4A056] text-white font-bold py-3 px-8 rounded-full hover:bg-[#E3B873] transition-colors duration-300 text-lg"
        >
          Partner With Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
