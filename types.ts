
import { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  imageUrl: string;
  name: string;
  title: string;
  bio: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Project {
  title: string;
  association: string;
  description: string;
  coreElements: string[];
  outcomes: string[];
  skills: string[];
  url?: string;
  featured?: boolean;
}