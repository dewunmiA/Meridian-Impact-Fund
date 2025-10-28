
import React from 'react';

const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-[#0F4C5C] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Global Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-4">
            <h3 className="text-5xl font-bold text-[#D4A056]">15+</h3>
            <p className="mt-2 text-lg">Countries Reached</p>
          </div>
          <div className="p-4">
            <h3 className="text-5xl font-bold text-[#D4A056]">$5M+</h3>
            <p className="mt-2 text-lg">In Resources Mobilized</p>
          </div>
          <div className="p-4">
            <h3 className="text-5xl font-bold text-[#D4A056]">120+</h3>
            <p className="mt-2 text-lg">Partnerships Forged</p>
          </div>
          <div className="p-4">
            <h3 className="text-5xl font-bold text-[#D4A056]">50,000+</h3>
            <p className="mt-2 text-lg">Lives Empowered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
