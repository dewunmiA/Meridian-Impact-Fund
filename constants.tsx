
import React from 'react';
import { Service, TeamMember, NavLink, Project } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'Vision' },
  { href: '#services', label: 'What We Do' },
  { href: '#projects', label: 'Our Work' },
  { href: '#impact', label: 'Impact' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    title: 'Philanthropy & Legacy Stewardship',
    items: [
      'Strategic structuring of philanthropic portfolios for HNWIs and Family Offices aiming for intergenerational impact.',
      'Developing a "Legacy Roadmap" that aligns personal wealth and values with sustainable ecosystem change.',
      'Crafting and amplifying your unique impact story to define your contribution to the world and inspire others.',
    ],
  },
  {
    title: 'Strategy & Programme Design',
    items: [
      'Impact theses, theory of change, and portfolio design using the ANCHOR Framework for organizations and coalitions.',
      'Connecting impact strategies to the bottom line for long-term sustainability.',
      'Design of flagship programmes, funds, and accelerators.',
    ],
  },
  {
    title: 'Partnerships & Resource Mobilisation',
    items: [
      'Donor and corporate engagement strategies.',
      'Multi-stakeholder coalitions and MOU design.',
      'Aggregating and structuring funds for large-scale projects.',
    ],
  },
  {
    title: 'Implementation & Ecosystem Building',
    items: [
      'End-to-end programme management and coordination.',
      'Convenings, labs, and platforms that outlast single grants.',
      'Ecosystem building to align incentives across sectors.',
    ],
  },
  {
    title: 'Storytelling, Advocacy & Reporting',
    items: [
      'Narrative architecture and communications toolkits.',
      'Impact reporting and policy advocacy campaigns.',
      'Content and campaigns through vehicles like Creatives4Dev.',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: '#Creatives4Dev',
    association: 'Associated with Eden Venture Group',
    description: 'A creator-led initiative that upskills creatives, artists and content creators into development actors who can turn complex policy and programme goals into clear, high-impact content. It connects storytellers, designers, and strategists with NGOs, coalitions, and public agencies to drive behaviour change, mobilise communities, and support policy uptake.',
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
      'WEE Champions: Mobilised a volunteer network of “champions” who carried messages into their own communities and online spaces, creating peer-to-peer advocacy momentum.',
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
    association: 'Resource Mobilisation & Partnerships Strategy',
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
    imageUrl: 'https://i.pinimg.com/1200x/91/37/2f/91372f3f7d59aa024cd88d69d0aeb641.jpg',
    name: 'Maliz Mahop',
    title: 'Director of Partnerships',
    bio: 'An expert in forging cross-sectoral alliances, leveraging global networks to secure critical resources for local impact initiatives.'
  },
  {
    imageUrl: 'https://i.pinimg.com/1200x/ee/87/ff/ee87ff354264f3ab047da6b16ef911b0.jpg',
    name: 'Funmi Ajala',
    title: 'Head of Communications Strategy',
    bio: 'Spearheads data-driven narrative strategies, ensuring that social impact interventions are communicated effectively to drive policy uptake.'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/fc/b1/fb/fcb1fb0a9e8a987abf960f69e0743ea6.jpg',
    name: 'Adewale Aina',
    title: 'Lead Field Coordinator',
    bio: 'Orchestrates on-the-ground operations, ensuring strategies are culturally responsive and directly address the evolving needs of communities.'
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/bf/43/c9/bf43c98cb979898b12249f052adde17e.jpg',
    name: 'Omolola Oni',
    title: 'Head of Digital Content',
    bio: 'Specializes in storytelling and communications that resonate with audiences and drive measurable results. Deeply committed to gender equality and good governance.'
  },
  {
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGjJCvpSTG3JQ/profile-displayphoto-crop_800_800/B4DZeiBxysHAAI-/0/1750770066357?e=1770854400&v=beta&t=uQ86hC5tOzNxBSdc61BvrvLG_kGdkIZX9SeKXifyKzM',
    name: 'Funsho Sanni',
    title: 'Head of Tax & Regulatory Services',
    bio: 'Ensures impact initiatives are financially sustainable and compliant, structuring funds and operations to maximize value for all stakeholders.'
  }
];
