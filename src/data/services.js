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
    image: "/projects/shopflow-ecommerce.png",
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
    image: "/projects/fittrack-mobile-app.png",
    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-Platform Apps",
      "API Integration",
      "Authentication",
      "Push Notifications",
    ],
    ctaLabel: "Explore Mobile Application",
    metaTitle: "Mobile Application Development | Bynext AI",
    metaDescription:
      "Bynext AI develops Android and iOS mobile applications with strong API integration, clean design and reliable performance.",
  },
  {
    slug: "software-application",
    icon: "Cpu",
    title: "Software Application",
    shortDescription:
      "Custom software built around your exact operational workflows and business logic.",
    description:
      "When off-the-shelf software falls short, we design custom systems, CRMs, internal tools and reporting portals that fit your team's exact workflow.",
    tags: ["Custom Software", "CRMs", "APIs", "Dashboards"],
    image: "/projects/enterprise-crm-system.png",
    features: [
      "Custom CRM Systems",
      "Internal Business Tools",
      "API Development & Integration",
      "Database Architecture",
      "Workflow Automation",
      "Maintenance & Support",
    ],
    ctaLabel: "Explore Software Application",
    metaTitle: "Custom Software Application Development | Bynext AI",
    metaDescription:
      "Bynext AI builds custom software applications, CRMs, internal tools and backend architectures tailored to business processes.",
  },
  {
    slug: "ai-application",
    icon: "Bot",
    title: "AI Application",
    shortDescription:
      "Build intelligent applications using modern AI technologies to automate workflows and create smarter experiences.",
    description:
      "We help businesses integrate practical artificial intelligence — from smart chatbots and document assistants to custom model integrations and workflow automation.",
    tags: ["LLMs", "AI Chatbots", "Python", "Automation"],
    image: "/projects/smartassist-ai-chatbot.png",
    features: [
      "AI Chatbot Integration",
      "Custom AI Assistant Tools",
      "Workflow Automation",
      "LLM API Integration",
      "Data Processing Pipelines",
      "Smart Content Assistants",
    ],
    ctaLabel: "Explore AI Application",
    metaTitle: "AI Application Development & Integration | Bynext AI",
    metaDescription:
      "Bynext AI develops AI-powered applications, chatbots, automated workflows and custom model integrations for modern businesses.",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
