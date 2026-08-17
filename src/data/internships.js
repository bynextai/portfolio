export const internships = [
  {
    slug: "mern-stack",
    icon: "Layers",
    title: "MERN Stack Development",
    stack: "React • Node.js • Express • MongoDB",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    overview:
      "Learn to build complete full-stack applications using MongoDB, Express, React and Node.js, from database design through to deployment.",
    learn: [
      "Building REST APIs with Express and Node.js",
      "Designing schemas with MongoDB",
      "Building interactive UIs with React",
      "Connecting frontend and backend into one application",
      "Authentication and authorization",
      "Deploying full-stack applications",
    ],
    projects: [
      "Task management application",
      "E-commerce product catalog",
      "Admin dashboard with authentication",
    ],
    outcomes: [
      "Practical experience with the MERN stack",
      "Understanding of full-stack architecture",
      "A portfolio-ready project",
      "Exposure to real development workflows",
    ],
  },
  {
    slug: "python-full-stack",
    icon: "Braces",
    title: "Python Full Stack Development",
    stack: "Python • FastAPI/Django • Database • Frontend",
    technologies: ["Python", "FastAPI", "Django", "Database", "Frontend"],
    overview:
      "Get hands-on with backend development in Python and connect it to a functional frontend, covering the full application lifecycle.",
    learn: [
      "Backend development with FastAPI or Django",
      "Working with relational databases",
      "Building and consuming REST APIs",
      "Connecting a frontend to a Python backend",
      "Authentication fundamentals",
      "Testing and deployment basics",
    ],
    projects: [
      "REST API for a business application",
      "Full-stack web application",
      "Database-driven dashboard",
    ],
    outcomes: [
      "Confidence building Python backends",
      "Understanding of full-stack integration",
      "A working project for your portfolio",
      "Practical debugging and testing skills",
    ],
  },
  {
    slug: "web-development",
    icon: "Globe",
    title: "Web Development",
    stack: "HTML • CSS • JavaScript • React",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    overview:
      "Build a strong foundation in modern web development, from semantic HTML and responsive CSS through to interactive React interfaces.",
    learn: [
      "Semantic HTML and accessibility basics",
      "Responsive layouts with modern CSS",
      "JavaScript fundamentals and DOM manipulation",
      "Component-based development with React",
      "Working with APIs on the frontend",
      "Version control with Git",
    ],
    projects: [
      "Responsive landing page",
      "Interactive React application",
      "API-driven web project",
    ],
    outcomes: [
      "A solid foundation in frontend development",
      "Comfort working with React",
      "Real, deployable project experience",
      "A better understanding of production code",
    ],
  },
  {
    slug: "devops",
    icon: "Server",
    title: "DevOps",
    stack: "Linux • Git • Docker • CI/CD • Cloud",
    technologies: ["Linux", "Git", "Docker", "CI/CD", "Cloud"],
    overview:
      "Understand how modern applications are built, tested and deployed, with hands-on exposure to containers, pipelines and cloud environments.",
    learn: [
      "Linux fundamentals for developers",
      "Git workflows for teams",
      "Containerization with Docker",
      "Building CI/CD pipelines",
      "Cloud deployment basics",
      "Monitoring and troubleshooting deployments",
    ],
    projects: [
      "Dockerized application",
      "CI/CD pipeline for a sample project",
      "Cloud deployment walkthrough",
    ],
    outcomes: [
      "Practical DevOps fundamentals",
      "Comfort with Docker and CI/CD tools",
      "Understanding of deployment workflows",
      "Exposure to real infrastructure practices",
    ],
  },
  {
    slug: "ai",
    icon: "BrainCircuit",
    title: "AI Development",
    stack: "Python • AI APIs • Machine Learning • AI Applications",
    technologies: ["Python", "AI APIs", "Machine Learning", "AI Applications"],
    overview:
      "Explore how AI is applied in real products, from working with AI APIs to building small machine learning and automation projects.",
    learn: [
      "Python for AI development",
      "Working with AI and LLM APIs",
      "Machine learning fundamentals",
      "Building simple AI-powered applications",
      "Prompt design and automation basics",
      "Evaluating and improving AI outputs",
    ],
    projects: [
      "AI-powered chatbot",
      "Automation script using AI APIs",
      "Simple machine learning model",
    ],
    outcomes: [
      "Practical exposure to applied AI",
      "Experience integrating AI APIs",
      "A working AI project for your portfolio",
      "Understanding of AI application design",
    ],
  },
  {
    slug: "power-bi",
    icon: "BarChart3",
    title: "Power BI & Data Analytics",
    stack: "Power BI • SQL • Data Visualization • Analytics",
    technologies: ["Power BI", "SQL", "Data Visualization", "Analytics"],
    overview:
      "Learn to turn raw data into clear business insights using Power BI, SQL and structured data analysis techniques.",
    learn: [
      "Data cleaning and preparation",
      "Writing SQL queries for analysis",
      "Building dashboards in Power BI",
      "Data visualization best practices",
      "Working with real-world datasets",
      "Presenting insights clearly",
    ],
    projects: [
      "Sales performance dashboard",
      "Business analytics report",
      "Interactive Power BI dashboard",
    ],
    outcomes: [
      "Practical Power BI and SQL skills",
      "Experience analyzing real datasets",
      "A dashboard project for your portfolio",
      "Stronger data storytelling skills",
    ],
  },
  {
    slug: "sql",
    icon: "Database",
    title: "SQL & Database",
    stack: "SQL • MySQL • PostgreSQL • Database Design",
    technologies: ["SQL", "MySQL", "PostgreSQL", "Database Design"],
    overview:
      "Build a strong foundation in relational databases, from schema design to writing efficient, production-ready SQL queries.",
    learn: [
      "Relational database concepts",
      "Database and schema design",
      "Writing SQL queries and joins",
      "Indexing and query optimization basics",
      "Working with MySQL and PostgreSQL",
      "Data integrity and normalization",
    ],
    projects: [
      "Database schema for a business application",
      "Query optimization exercise",
      "Reporting queries for a sample dataset",
    ],
    outcomes: [
      "Solid understanding of relational databases",
      "Comfort writing production SQL",
      "Experience designing real schemas",
      "A stronger foundation for data-focused roles",
    ],
  },
];

export const getInternshipBySlug = (slug) =>
  internships.find((internship) => internship.slug === slug);
