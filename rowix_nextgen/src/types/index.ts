// Data Types
export interface Stat {
  label: string;
  value: string;
}

export interface Reason {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
  active?: boolean;
}

export interface HeaderData {
  logo: string;
  navLinks: NavLink[];
  ctaText: string;
}

export interface HeroData {
  title: string;
  titleHighlight: string;
  ctaText: string;
  description: string;
  marqueeItems: string[];
  featuredProject: {
    image: string;
    title: string;
    category: string;
  };
}

export interface Work {
  id: number;
  title: string;
  category: string;
  timeTaken: string;
  description: string;
  technologies: string[];
  image: string;
  icon: string;
  teamMembers: string[];
}

export interface ProjectCardProps {
  project: Work;
  isLoading?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  title: string;
  content: string;
  avatar: string;
}

export interface TestimonialCardProps {
  testimonial?: Testimonial;
  isLoading?: boolean;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQItemProps {
  faq: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export interface FooterLink {
  name: string;
  href: string;
  badge?: string;
}

export interface FooterLinkSection {
  title: string;
  links: FooterLink[];
}

export interface FooterCTA {
  title: string;
  text: string;
  buttonText: string;
}

export interface SocialItem {
  id: number;
  name: string;
  description: string;
  icon: string;
  href: string;
}

export interface FooterData {
  cta: FooterCTA;
  socials: SocialItem[];
  linkSections: FooterLinkSection[];
  newsletter: {
    title: string;
    placeholder: string;
  };
  copyright: string;
  legalLinks: FooterLink[];
}

export interface SocialCardProps {
  social: SocialItem;
}

export interface MockData {
  header: HeaderData;
  hero: HeroData;
  stats: Stat[];
  whyUs: Reason[];
  services: Service[];
  works: Work[];
  testimonials: Testimonial[];
  faq: FAQItem[];
  footer: FooterData;
}

// Hook Return Types
export interface UseMockDataReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

// Component Props
export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'icon';
  className?: string;
  onClick?: () => void;
}

export interface StatCardProps {
  label: string;
  value: string;
  isLoading?: boolean;
}

export interface ReasonCardProps {
  title?: string;
  description?: string;
  isLoading?: boolean;
}

export interface ServiceCardProps {
  service?: Service;
  isLoading?: boolean;
}
