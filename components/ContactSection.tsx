
import React from 'react';

const ConcentricCircles: React.FC = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4A056] opacity-5">
            <circle cx="400" cy="400" r="390" stroke="currentColor" strokeWidth="20"/>
            <circle cx="400" cy="400" r="310" stroke="currentColor" strokeWidth="20"/>
            <circle cx="400" cy="400" r="230" stroke="currentColor" strokeWidth="20"/>
        </svg>
    </div>
);

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <ConcentricCircles />
      <div className="container mx-auto px-6 text-center relative z-10">
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