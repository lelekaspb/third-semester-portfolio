const model = (function () {
  const profile = {
    name: "Olga Baeva",
    role: "Full stack developer",
    headline: "Websites, APIs and CRM systems, built to work.",
    intro:
      "I plan, build, test and launch web solutions, from the business need to a polished result. Based in Copenhagen, working remotely.",
    photo: "assets/photos/olga_photo_wide.jpg",
    photoAlt: "Olga Baeva",
    email: "olga@baeva.dk",
    github: "https://github.com/lelekaspb",
    linkedin: "https://www.linkedin.com/in/olga-baeva/",
  };

  const nav = [
    { label: "Projects", href: "#projects" },
    { label: "How I work", href: "#approach" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const heroButtons = [
    { label: "View projects", href: "#projects", primary: true },
    { label: "Get in touch", href: "#contact" },
    {
      label: "Download CV",
      href: "assets/cv/Olga_Baeva_CV.pdf",
      download: "Olga_Baeva_CV.pdf",
    },
  ];

  const projects = {
    crm: {
      title: "Simple CRM system",
      summary:
        "A CRM for managing bids by status, from new to archived, alongside products.",
      imageAlt: "Simple CRM system interface",
      role: "Individual project: stores bids in the browser, filters them by status and category, and updates the counts when a bid is edited.",
      imageSrc: "assets/images/crm.jpg",
      technology: [
        "HTML",
        "CSS",
        "JS",
        "MVC pattern",
        "localStorage",
        "URL parameters",
        "ES5 modules",
      ],
      link: "https://lelekaspb.github.io/crm/",
      repository: "https://github.com/lelekaspb/crm",
    },
    daos: {
      title: "Musik Samspil",
      summary:
        "A Danish site where amateur musicians find each other through ads and play together, filtered by instrument.",
      imageAlt: "Musik Samspil website",
      role: "Full-stack study project: sign-in with server-side validation, and users can edit only their own orchestras and posts.",
      imageSrc: "assets/images/daos2.jpg",
      technology: [
        "TypeScript",
        "React",
        "Node.js",
        "Nest.js",
        "JWT",
        "bcrypt",
        "MongoDB",
        "Mongoose",
      ],
      link: "https://teal-liger-63857f.netlify.app/",
      repository: "https://github.com/lelekaspb/daos-backend",
    },
    wildorchid: {
      title: "Beauty salon website",
      summary:
        "A Danish and English website for a salon, with services, gift cards and booking.",
      imageAlt: "Wild Orchid beauty salon website",
      role: "Available in two languages with React INTL; form submissions are saved and the salon is notified by email.",
      imageSrc: "assets/images/wildorchid.jpg",
      technology: [
        "React.js",
        "CSS modules",
        "React INTL",
        "React Router DOM",
        "AJAX & Fetch API",
      ],
      link: "https://resilient-custard-075d47.netlify.app/",
      repository: "https://github.com/lelekaspb/wildorchid-after-submit",
    },
    wildshop: {
      title: "Online shop",
      summary:
        "A study-project webshop with product categories, such as hair removal.",
      imageAlt: "Wild Orchid online shop",
      role: "Bachelor's final project: a shop with a CMS for up to 600 products, a stock-aware cart, and back-in-stock subscriptions.",
      imageSrc: "assets/images/wildshop.png",
      technology: [
        "Next.js",
        "TypeScript",
        "Sanity",
        "next-sanity",
        "sanity/client",
        "react-responsive-carousel",
      ],
      link: "https://wildshop.vercel.app/",
      repository: "https://github.com/lelekaspb/wildshop",
    },
  };

  const featured = ["crm", "daos", "wildorchid", "wildshop"];

  const approach = {
    eyebrow: "Approach",
    title: "How I work",
    steps: [
      {
        title: "Plan",
        text: "Clarify the business need and agree on a small first version.",
      },
      { title: "Build", text: "Short iterations you can review along the way." },
      {
        title: "Test",
        text: "Automated unit and feature tests as part of the build.",
      },
      { title: "Launch", text: "Repeatable releases through CI/CD." },
    ],
  };

  const skills = {
    eyebrow: "Skills",
    title: "Tools I work with",
    groups: [
      {
        title: "Frontend",
        items: [
          "HTML",
          "CSS/Sass",
          "JavaScript/TypeScript",
          "React",
          "TanStack Query",
          "Redux",
        ],
      },
      {
        title: "Backend",
        items: [
          "Node.js/Express.js/NestJS",
          "Python/Flask/FastAPI",
          "PHP/Laravel",
          "C#",
        ],
      },
      {
        title: "Data",
        items: ["PostgreSQL", "MongoDB/Mongoose", "SQL & ORM"],
      },
      {
        title: "Testing & tools",
        items: [
          "Unit testing/Pytest",
          "End-to-end testing",
          "CI/CD",
          "Docker",
          "Git & GitHub",
          "Postman",
          "Swagger",
        ],
      },
    ],
  };

  const about = {
    eyebrow: "About",
    title: "Developer with a testing mindset",
    paragraphs: [
      "I have a bachelor’s in web development and I’m completing a master’s in computer science. I built frontend, backend and APIs for a recruitment SaaS platform at Recruitio, and I now work as a QA software engineer on firmware verification at GN Hearing.",
      "Languages: English, Danish, Russian.",
    ],
    experienceTitle: "Experience",
    experience: [
      { role: "QA Software Engineer", company: "GN Hearing", period: "2026 – now" },
      { role: "Full Stack Developer", company: "Recruitio" },
      { role: "Software Engineer Intern", company: "CSIS Security Group" },
    ],
  };

  const contact = {
    title: "Have a project in mind?",
    text: "Tell me what you need and we will define the scope together.",
    buttons: [
      { label: profile.email, href: "mailto:" + profile.email, primary: true },
      { label: "LinkedIn", href: profile.linkedin },
      { label: "GitHub", href: profile.github },
    ],
  };

  const footer = {
    copyright: "© 2026 " + profile.name,
    links: [
      { label: "GitHub", href: profile.github },
      { label: "LinkedIn", href: profile.linkedin },
    ],
  };

  return {
    profile,
    nav,
    heroButtons,
    projects,
    featured,
    approach,
    skills,
    about,
    contact,
    footer,
  };
})();
