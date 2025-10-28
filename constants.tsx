import React from 'react';
import { Service, TeamMember, NavLink, Project } from './types';

const GlobeIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.053.053a.5.5 0 010 .707l-.053.053L6.5 6.5l-1.207-1.207a.5.5 0 01.707-.707l.053.053L6.5 5.293l1.207-1.207a.5.5 0 01.707.707L7.707 4.5zM12 21a9 9 0 100-18 9 9 0 000 18z" />
  </svg>
);

const UsersIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 5.197M15 21a6 6 0 00-9-5.197" />
  </svg>
);

const ChartBarIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'What We Do' },
  { href: '#impact', label: 'Our Impact' },
  { href: '#projects', label: 'Our Work' },
  { href: '#team', label: 'Our Team' },
  { href: '#contact', label: 'Contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    icon: <GlobeIcon className="h-12 w-12 text-[#0F4C5C]" />,
    title: 'Strategic Resource Mobilization',
    description: 'We connect local implementors with global resources, securing funding and support to scale impactful projects.'
  },
  {
    icon: <UsersIcon className="h-12 w-12 text-[#0F4C5C]" />,
    title: 'Inclusive Partnership Fostering',
    description: 'We build bridges between communities, social impact firms, and stakeholders to create powerful, collaborative networks for change.'
  },
  {
    icon: <ChartBarIcon className="h-12 w-12 text-[#0F4C5C]" />,
    title: 'Capacity Maximization',
    description: 'We provide expert guidance and strategic planning to help organizations enhance their capabilities and achieve sustainable, transformative results.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: '#Creatives4Dev',
    association: 'Associated with Eden Venture Group',
    description: 'A creator-led initiative that upskills creatives, artists and content creators into development actors who can turn complex policy and program goals into clear, high-impact content. It connects storytellers, designers, and strategists with NGOs, coalitions, and public agencies to drive behavior change, mobilize communities, and support policy uptake.',
    coreElements: [
      'Creator network: Recruits and trains creators in policy literacy, ethics, and impact storytelling across themes like WEE, MNCH, climate, youth, and the creative economy.',
      'Responsible AI studio: Workflow for content generation, translation, accessibility, and QA with bias, safety, and attribution guardrails.',
      'Toolkits and playbooks: Ready-to-use campaign kits, brand systems, message maps, and AI prompt libraries in local languages for fast deployment.',
      'Co-creation labs: Time-boxed sprints that pair practitioners with creator squads to translate briefs into tested assets and activation plans.',
    ],
    outcomes: [
      'Built a repeatable pipeline from brief to measurable campaign delivery, reducing time-to-launch.',
      'Produced reusable content kits adopted by NGOs and social enterprises for field and digital use.',
      'Established a growing national network of creators and advocacy partners to scale rapid response.',
      'Set up a learning loop that ties reach and engagement to shifts in awareness, intent, and participation.',
    ],
    skills: ['Project Management', 'Policy Advocacy', 'Communications for Development', 'Community Management'],
    featured: true,
  },
  {
    title: '#WEELiftNaija',
    association: 'Associated with Eden Venture Group',
    description: 'A national advocacy and public education campaign focused on Nigeria’s Women’s Economic Empowerment (WEE) Policy. It was designed to translate the policy from a technical government framework into something everyday Nigerians—especially women, communities, and civil society groups—could understand and act on.',
    coreElements: [
      'Policy Translation: Broke down the national WEE Policy into simple, actionable messages that highlighted how it affects women’s daily lives, from land rights to access to justice and economic protections.',
      'Public Engagement: Activated across social media platforms (Instagram, X, YouTube) to demystify policy language and make advocacy accessible through explainers, reels, and campaign graphics.',
      'Days of Advocacy: Organized thematic activations in communities and online, spotlighting issues like access to land, justice, and finance for women.',
      'Partnerships: Worked with NGOs, CSO, Govt agencies, faith groups, and community actors to localize and ground the campaign in real experiences.',
      'WEE Champions: Mobilized a volunteer network of “champions” who carried messages into their own communities and online spaces, creating peer-to-peer advocacy momentum.',
    ],
    outcomes: [
      'Raised awareness of the WEE Policy nationwide, shifting it from an elite policy conversation into a grassroots advocacy movement.',
      'Generated cross-sector collaboration between policymakers, NGOs, media, and community actors.',
      'Produced multimedia advocacy content that sustained visibility of WEE issues across digital platforms.',
    ],
    skills: ['Project Management', 'Strategic Partnerships', 'Policy Advocacy', 'Collaboration', 'Communication for Development', 'Community Impact', 'Advocacy Campaigns'],
    url: 'https://trello.com/b/j095Ht2g',
    featured: true,
  },
  {
    title: '#TransformingTogetherMNCH',
    association: 'Associated with Eden Venture Group',
    description: 'An advocacy initiative focused on addressing Nigeria’s alarming maternal, newborn, and child health outcomes. It seeks to bring visibility, policy action, and collaborative solutions through stakeholder engagement, community involvement, and innovation.',
    coreElements: [
      'Physical Convenings: The initiative hosted major summits to convene government officials, medical professionals, NGOs, private sector actors, civil society, and the public.',
      'Community engagement programming',
      'Digital media & content (public awareness via online media, reports, digital narratives)',
      'Stakeholder engagement sessions (roundtables, panels, policy discourse) involving government, NGOs, research institutions, health professionals, etc.',
      'Free Women’s Health Medical Testing: During the summit(s), EVG partnered with health providers to offer free medical screenings for women in Lagos and Abuja.',
    ],
    outcomes: [
      'Raise awareness of barriers to maternal and child health: infrastructure gaps, access to care, policy enforcement, etc.',
      'Facilitate open dialogues among stakeholders to produce actionable solutions.',
      'Advocate for policy enforcement and sustainable improvements in medical infrastructure and service delivery.',
      'Drive community-led action and build accountability structures through public engagement and free testing.',
    ],
    skills: ['Project Management', 'Strategic Partnerships', 'Policy Advocacy', 'Collaboration', 'Advocacy Comms', 'Community Impact', 'Digital Communication', 'Advocacy Campaigns'],
    url: 'https://edenventuregroup.com/mnch/',
  },
  {
    title: 'Lagos Business School',
    association: 'Resource Mobilization & Partnerships Strategy',
    description: 'The Challenge: Lagos Business School (LBS) needed to establish its first institutional fundraising framework to align donor outreach with its core academic strategy. Our Strategy: we designed a 50-page strategic roadmap covering governance, donor reporting, and alumni giving. We applied the ANCHOR Framework to build cross-departmental alignment for execution.',
    coreElements: [
        'Designed LBS’s first institutional fundraising framework, aligning donor outreach with academic strategy.',
        'Authored 50-page strategic roadmap covering governance, alumni giving, and external relations.',
        'Introduced stewardship KPIs and donor-reporting systems.',
        'Applied ANCHOR Framework to build cross-department alignment and execution discipline.'
    ],
    outcomes: [
      'Delivered comprehensive institutional fundraising strategy.',
      'Established stewardship KPIs and reporting systems.',
      'Fostered internal alignment for implementation.',
    ],
    skills: [],
  },
];

export const TEAM_DATA: TeamMember[] = [
  {
    imageUrl: 'https://picsum.photos/seed/person1/400/400',
    name: 'Dewunmi Alugbin',
    title: 'Founder',
    bio: 'With over 20 years in international development, she is passionate about creating equitable systems for community-led growth.'
  },
  {
    imageUrl: 'https://picsum.photos/seed/person2/400/400',
    name: 'Maliz Mahop',
    title: 'Director of Partnerships',
    bio: 'He specializes in forging cross-sectoral alliances that leverage global expertise for local impact.'
  },
  {
    imageUrl: 'https://picsum.photos/seed/person3/400/400',
    name: 'Funmi Ajala',
    title: 'Head of Communications Strategy',
    bio: 'She brings a data-driven approach to social impact, ensuring our interventions are both effective and sustainable.'
  },
  {
    imageUrl: 'https://picsum.photos/seed/person4/400/400',
    name: 'Adeoti Osifeso',
    title: 'Lead Field Coordinator',
    bio: 'He works on the ground, ensuring our strategies are culturally relevant and directly address community needs.'
  }
];