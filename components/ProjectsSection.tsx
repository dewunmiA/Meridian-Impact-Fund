import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
);

interface AccordionItemProps {
    project: Project;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ project, isOpen, onToggle }) => {
    const buttonBgClass = project.featured ? 'bg-[#D4A056]/10 hover:bg-[#D4A056]/20' : 'hover:bg-gray-50';

    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onToggle}
                className={`w-full flex justify-between items-center text-left py-6 px-4 focus:outline-none transition-colors duration-300 ${buttonBgClass}`}
                aria-expanded={isOpen}
            >
                <div>
                    <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold text-[#0F4C5C]">{project.title}</h3>
                        {project.featured && (
                            <span className="bg-[#D4A056] text-white text-xs font-bold px-2.5 py-1 rounded-full tracking-wider">
                                FEATURED
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-gray-500 font-semibold mt-1">{project.association}</p>
                </div>
                <ChevronDownIcon className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
                <div className={`p-6 ${project.featured ? 'bg-[#D4A056]/5' : 'bg-gray-50/50'}`}>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                {project.coreElements.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Impact & Outcomes</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                {project.outcomes.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                    
                    {project.skills && project.skills.length > 0 && (
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map(skill => (
                                    <span key={skill} className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.url && (
                        <div className="mt-6">
                             <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-[#0F4C5C] hover:text-[#D4A056] transition-colors duration-300">
                                View Project <LinkIcon className="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


const ProjectsSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#0F4C5C] mb-4">Our Work</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        We partner with organizations to design and implement strategies that drive measurable social impact. Here are some of our past projects.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto border-t border-gray-200">
                    {PROJECTS_DATA.map((project, index) => (
                        <AccordionItem 
                            key={index} 
                            project={project}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;