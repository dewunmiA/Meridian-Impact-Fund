
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/subtle-zebra-3d.png')" }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0F4C5C] mb-4">Let's Drive Change Together</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you are a local implementor, a social impact firm, or a potential partner, we want to hear from you.
        </p>
        <a 
          href="mailto:contact@meridianimpact.org" 
          className="bg-[#0F4C5C] text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-colors duration-300 text-lg shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
