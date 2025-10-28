import React from 'react';

const servicesData = [
  {
    title: 'Strategic Partnerships & Resource Mobilization',
    items: [
      'Donor ecosystem mapping',
      'Institutional fundraising strategy',
      'Proposal development & negotiation',
    ],
  },
  {
    title: 'Systems Collaboration & Organizational Culture',
    items: [
      'Co-funding architecture & blended finance',
      'Cross-sector facilitation (ANCHOR Framework)',
      'Organizational alignment & capacity building',
    ],
  },
  {
    title: 'Communications & Advocacy',
    items: [
      'Narrative strategy & campaign design',
      'Media & stakeholder engagement',
      'Policy advocacy Campaigns',
    ],
  },
  {
    title: 'Donor Relations & Governance',
    items: [
      'Reporting & accountability systems',
      'Grant compliance & performance metrics',
      'Monitoring & evaluation frameworks',
    ],
  },
];

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);


const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0F4C5C] mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            We provide tailored support to amplify the impact of organizations working on the front lines of social change.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-4 h-20 flex items-center text-[#0F4C5C]">{service.title}</h3>
              <ul className="space-y-3 text-left">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-[#D4A056] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;