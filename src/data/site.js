export const site = {
  name: "Bynext AI",
  domain: "bynextai.com",
  url: "https://bynextai.com",
  tagline: "Web, Mobile, Software & AI Solutions",
  description:
    "Bynext AI builds modern web applications, mobile apps, custom software and AI-powered solutions for businesses.",
  phones: ["8984859057", "8118009341"],
  emails: ["bibhupbaliarsingh@gmail.com", "raytophankumar@gmail.com"],
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Web Development",
        href: "/services/web-development",
        description: "Modern, scalable and SEO-friendly web applications.",
      },
      {
        label: "Mobile Application",
        href: "/services/mobile-application",
        description: "High-performance mobile applications.",
      },
      {
        label: "Software Application",
        href: "/services/software-application",
        description: "Custom software built around business workflows.",
      },
      {
        label: "AI Application",
        href: "/services/ai-application",
        description: "AI-powered applications and automation.",
      },
    ],
  },
  { label: "Internship", href: "/internship" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Internship", href: "/internship" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile Application", href: "/services/mobile-application" },
    { label: "Software Application", href: "/services/software-application" },
    { label: "AI Application", href: "/services/ai-application" },
  ],
  internships: [
    { label: "MERN Stack", href: "/internship/mern-stack" },
    { label: "Python Full Stack", href: "/internship/python-full-stack" },
    { label: "Web Development", href: "/internship/web-development" },
    { label: "DevOps", href: "/internship/devops" },
    { label: "AI", href: "/internship/ai" },
    { label: "Power BI", href: "/internship/power-bi" },
    { label: "SQL", href: "/internship/sql" },
  ],
};
