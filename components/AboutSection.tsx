
import React from 'react';

const DottedPattern: React.FC = () => (
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 pointer-events-none" aria-hidden="true">
        <svg width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#D4A056] opacity-20">
            <defs>
                <pattern id="about-dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="4" cy="4" r="2" fill="currentColor"/>
                </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#about-dot-pattern)"/>
        </svg>
    </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="wow fadeIn">
            <img src="https://picsum.photos/seed/communitywork/800/600" alt="Community Collaboration" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
          </div>
          <div className="relative">
            <DottedPattern />
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-[#0F4C5C] mb-4">Our Vision for Africa</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We envision an Africa where community needs lead the way, driven by equitable access to opportunity and resources. A future where every individual, regardless of background, has the power to thrive and contribute to a prosperous, healthy, and resilient continent.
                </p>
                <div className="border-l-4 border-[#D4A056] pl-4">
                    <h3 className="text-xl font-semibold text-[#0F4C5C] mb-2">Our Mission</h3>
                    <p className="text-gray-600 italic">
                    To champion equitable development and empower communities through collaboration. We foster inclusive partnerships that help local implementors and social impact firms mobilize strategic resources, maximizing their capacity to drive sustainable change.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;