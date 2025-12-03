import { MockData } from '../types';
import teamMember1 from '../assets/images/team/team_member_1.png';
import teamMember2 from '../assets/images/team/team_member_2.png';
import teamMember3 from '../assets/images/team/team_member_3.png';
import teamMember4 from '../assets/images/team/team_member_4.png';
import teamMember5 from '../assets/images/team/team_member_5.png';
import testimonial1 from '../assets/images/testimonials/testimonial1.png';
import testimonial2 from '../assets/images/testimonials/testimonial2.png';
import testimonial3 from '../assets/images/testimonials/testimonial3.png';
import testimonial4 from '../assets/images/testimonials/testimonial4.png';

export const DB: MockData = {
  header: {
    logo: "Logo.svg",
    navLinks: [
      { name: "HOME", href: "#home", active: true },
      { name: "SERVICES", href: "#services" },
      { name: "PROJECTS", href: "#projects" },
      { name: "ABOUT", href: "#about" },
      { name: "CAREERS", href: "#careers" },
      { name: "BLOGS", href: "#blogs" }
    ],
    ctaText: "CONTACT US"
  },
  hero: {
    title: "DIGITAL SOLUTIONS",
    titleHighlight: "THAT DRIVE SUCCESS",
    ctaText: "START A PROJECT",
    description: "At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.",
    marqueeItems: [
      "MARKETING",
      "WEBSITE DESIGN",
      "BRANDING",
      "WEBSITE DEVELOPMENT",
      "MOBILE APP DEVELOPMENT",
      "DIGITAL"
    ],
    featuredProject: {
      image: "heroimg.png",
      title: "ESTATEIN REAL ESTATE",
      category: "Web Development"
    }
  },
  stats: [
    { label: "CLIENTS", value: "200+" },
    { label: "PROJECTS", value: "280+" },
    { label: "HAPPY CLIENTS", value: "100%" },
    { label: "FOLLOWER", value: "420K" },
    { label: "Years Of Experience", value: "10+" }
  ],
  whyUs: [
    {
      title: "EXPERTISE IN CUTTING-EDGE TECHNOLOGIES",
      description: "NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions."
    },
    {
      title: "PROVEN TRACK RECORD OF SUCCESS", 
      description: "NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs."
    },
    {
      title: "CLIENT-CENTRIC APPROACH",
      description: "At NexGen, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process."
    },
    {
      title: "DEDICATED TEAM OF PROFESSIONALS",
      description: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business."
    }
  ],
  services: [
    {
      title: "WEB DESIGN",
      description: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
      price: "STARTS FROM $1,500",
      icon: "PenTool"
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      description: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
      price: "STARTS FROM $2,500",
      icon: "Smartphone"
    },
    {
      title: "WEB DEVELOPMENT",
      description: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices.",
      price: "STARTS FROM $1,800",
      icon: "Code2"
    },
    {
      title: "DIGITAL MARKETING",
      description: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies.",
      price: "STARTS FROM $1,200",
      icon: "LayoutGrid"
    }
  ],
  works: [
    {
      id: 1,
      title: "ZENITH FITNESS APP",
      category: "Mobile App Development",
      timeTaken: "6 months",
      description: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
      technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
      image: "works/zenith.png",
      icon: "Star",
      teamMembers: [teamMember1, teamMember2, teamMember3, teamMember4, teamMember5]
    },
    {
      id: 2,
      title: "A-AURA ECOMMERCE",
      category: "Web Design & Development",
      timeTaken: "3 months",
      description: "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
      technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
      image: "works/a-aura.png",
      icon: "Lightbulb",
      teamMembers: [teamMember1, teamMember2, teamMember3, teamMember4, teamMember5]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Thompson",
      role: "CEO of BlueBloom",
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      content: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      avatar: testimonial1
    },
    {
      id: 2,
      name: "Wade Warren",
      role: "Art Director",
      title: "NEXGEN TURNED OUR BUSINESS AROUND!",
      content: "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      avatar: testimonial2
    },
    {
      id: 3,
      name: "Lisa Williams",
      role: "CEO of HealthTech",
      title: "WORKING WITH NEXGEN WAS A PLEASURE.",
      content: "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      avatar: testimonial3
    },
    {
      id: 4,
      name: "Jennifer Lee",
      role: "COO of Foodie Haven",
      title: "NEXGEN'S WEB DESIGN TEAM BROUGHT OUR VISION TO LIFE.",
      content: "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
      avatar: testimonial4
    }
  ],
  faq: [
    {
      id: 1,
      question: "How long does it take to complete a web development project?",
      answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
    },
    {
      id: 2,
      question: "Can you handle large-scale mobile app development projects?",
      answer: "Yes, we have extensive experience in building scalable mobile applications that can handle millions of users."
    },
    {
      id: 3,
      question: "Can you integrate third-party APIs into our mobile app?",
      answer: "Absolutely. We specialize in seamless integration of payment gateways, social media, maps, and other third-party services."
    },
    {
      id: 4,
      question: "How do you ensure cross-platform compatibility for mobile apps?",
      answer: "We use modern frameworks like React Native and Flutter to ensure your app performs flawlessly on both iOS and Android."
    },
    {
      id: 5,
      question: "What is your approach to user experience (UX) design?",
      answer: "We follow a user-centric approach, starting with research and wireframing to ensure intuitive navigation and engagement."
    }
  ],
  footer: {
    cta: {
      title: "READY TO TRANSFORM YOUR DIGITAL PRESENCE?",
      text: "Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.",
      buttonText: "GET IN TOUCH"
    },
    socials: [
      {
        id: 1,
        name: "INSTAGRAM",
        description: "Share visually appealing snippets of our latest web projects.",
        icon: "Instagram",
        href: "https://instagram.com"
      },
      {
        id: 2,
        name: "TWITTER",
        description: "Tweet about interesting coding challenges you've overcome.",
        icon: "Twitter",
        href: "https://twitter.com"
      },
      {
        id: 3,
        name: "DRIBBBLE",
        description: "Showcase design elements of our web projects.",
        icon: "Dribbble",
        href: "https://dribbble.com"
      },
      {
        id: 4,
        name: "BEHANCE",
        description: "Create detailed presentations for our projects.",
        icon: "Behance",
        href: "https://behance.net"
      }
    ],
    linkSections: [
      {
        title: "Home",
        links: [
          { name: "Why Us", href: "#why-us" },
          { name: "About Us", href: "#about" },
          { name: "Testimonials", href: "#testimonials" },
          { name: "FAQ's", href: "#faq" }
        ]
      },
      {
        title: "Services",
        links: [
          { name: "Web Development", href: "#services" },
          { name: "App Development", href: "#services" },
          { name: "Web Design", href: "#services" },
          { name: "Digital Marketing", href: "#services" }
        ]
      },
      {
        title: "Projects",
        links: [
          { name: "Klothink", href: "#projects" },
          { name: "Zenith", href: "#projects" },
          { name: "Novus", href: "#projects" },
          { name: "Apex", href: "#projects" }
        ]
      },
      {
        title: "Blogs",
        links: [
          { name: "Business", href: "#blogs" },
          { name: "Design", href: "#blogs", badge: "Soon" },
          { name: "Development", href: "#blogs", badge: "Soon" }
        ]
      }
    ],
    newsletter: {
      title: "SUBSCRIBE TO OUR NEWSLETTER",
      placeholder: "Enter your email"
    },
    copyright: "© 2024 NextGen. All rights reserved.",
    legalLinks: [
      { name: "Terms & Conditions", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" }
    ]
  }
};
