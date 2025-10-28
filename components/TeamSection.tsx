
import React from 'react';
import { TEAM_DATA } from '../constants';

const LineAccent: React.FC = () => (
    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-1/2 max-w-md pointer-events-none" aria-hidden="true">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" className="text-[#D4A056] opacity-10">
            <path d="M404 0L0 404" stroke="currentColor" strokeWidth="4" />
            <path d="M404 100L100 404" stroke="currentColor" strokeWidth="4" />
            <path d="M404 200L200 404" stroke="currentColor" strokeWidth="4" />
            <path d="M404 300L300 404" stroke="currentColor" strokeWidth="4" />
        </svg>
    </div>
);

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
      <LineAccent />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-bold text-[#0F4C5C] mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our dedicated experts are the driving force behind our mission, bringing a wealth of experience and passion to every project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_DATA.map((member, index) => (
            <div key={index} className="text-center">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-[#D4A056] font-semibold mb-2">{member.title}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;