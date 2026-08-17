export const services = [
  {
    slug: "web-development",
    icon: "Code2",
    title: "Web Development",
    shortDescription:
      "Fast, responsive and scalable websites and web applications designed for modern businesses.",
    description:
      "We design and build websites and web applications that load fast, rank well and scale with your business. Every build is engineered with clean architecture, strong SEO foundations and a maintainable codebase.",
    tags: ["Next.js", "React", "Node.js", "SEO"],
    features: [
      "Business Websites",
      "Corporate Websites",
      "E-commerce",
      "Admin Dashboards",
      "Full-Stack Applications",
      "SEO-Friendly Websites",
    ],
    ctaLabel: "Explore Web Development",
    metaTitle: "Web Development Services | Bynext AI",
    metaDescription:
      "Bynext AI builds fast, responsive and SEO-friendly websites and web applications using Next.js, React and Node.js.",
  },
  {
    slug: "mobile-application",
    icon: "Smartphone",
    title: "Mobile Application",
    shortDescription:
      "Build powerful mobile experiences for Android and iOS using modern application technologies.",
    description:
      "From native-feel cross-platform apps to full API integrations, we build mobile products that are fast, reliable and ready for the app stores.",
    tags: ["React Native", "Android", "iOS", "APIs"],
    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Apps",
      "API Integration",
      "Authentication",
      "Push Notifications",
    ],
    ctaLabel: "Explore Mobile Apps",
    metaTitle: "Mobile Application Development | Bynext AI",
    metaDescription:
      "Bynext AI develops high-performance Android, iOS and cross-platform mobile applications with secure API integration.",
  },
  {
    slug: "software-application",
    icon: "AppWindow",
    title: "Software Application",
    shortDescription:
      "Custom software solutions designed around organizational workflows and business requirements.",
    description:
      "We build custom software that fits how your business actually works, from internal management tools to full enterprise systems.",
    tags: ["MERN", "Python", "Database", "Cloud"],
    features: [
      "Business Management Systems",
      "CRM",
      "ERP",
      "Billing Software",
      "Management Dashboards",
      "Custom Enterprise Software",
    ],
    ctaLabel: "Explore Software Solutions",
    metaTitle: "Custom Software Application Development | Bynext AI",
    metaDescription:
      "Bynext AI builds custom software applications including CRM, ERP and business management systems for growing companies.",
  },
  {
    slug: "ai-application",
    icon: "Sparkles",
    title: "AI Application",
    shortDescription:
      "Build intelligent applications using modern AI technologies to automate workflows and create smarter experiences.",
    description:
      "We integrate modern AI capabilities into practical business tools — chatbots, assistants and automation that reduce manual work.",
    tags: ["AI APIs", "Python", "Automation", "LLM"],
    features: [
      "AI Chatbots",
      "AI Assistants",
      "AI Automation",
      "AI Content Applications",
      "AI Business Tools",
      "AI API Integration",
    ],
    ctaLabel: "Explore AI Solutions",
    metaTitle: "AI Application Development | Bynext AI",
    metaDescription:
      "Bynext AI builds AI-powered chatbots, assistants and automation tools that streamline business workflows.",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
