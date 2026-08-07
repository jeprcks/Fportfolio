export const techTags = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Laravel",
  "Firebase",
  "Flutter",
  "Dart",
  "Node.js",
];

export type Project = {
  name: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  github: string;
  live?: string;
  previewImages?: string[];
};

export const projects: Project[] = [
  {
    name: "SMARTendance",
    category: "Web Application",
    description:
      "QR Code-based attendance and class monitoring system for teachers, students, and parents.",
    problem:
      "Manual attendance tracking was time-consuming and made it difficult for parents and teachers to monitor attendance.",
    solution:
      "A QR-based attendance system with teacher monitoring, reports, and SMS notifications for parents.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "SMS API"],
    github: "https://github.com/jeprcks/Smartendance",
    live: "https://umapadelementaryschool.vercel.app/login?from=%2F",
    previewImages: [
      "/files/pictures/smartendance1.png",
      "/files/pictures/smartendance2.png",
      "/files/pictures/smartendance3.png",
      "/files/pictures/smartendance4.png",
      "/files/pictures/smartendance5.png",
      "/files/pictures/smartendance6.png",
      "/files/pictures/smartendance7.png",
      "/files/pictures/smartendance8.png",
      "/files/pictures/smartendance9.png",
    ],
  },
  {
    name: "WasteWise",
    category: "Management System",
    description:
      "Community waste management platform with schedule tracking, notifications, route monitoring, and reporting.",
    problem:
      "Community waste collection lacked reliable scheduling, notifications, and performance visibility.",
    solution:
      "A waste management dashboard with route monitoring, reminders, and reporting controls for teams.",
    technologies: ["Web Development", "Database", "SMS Notifications"],
    github: "https://github.com/jeprcks/WasteWise",
  },
  {
    name: "FureverHome",
    category: "Web Platform",
    description:
      "Rescue and adoption platform for dogs with care resources and adoption support.",
    problem:
      "Local shelter animals needed a better adoption platform and care resource hub.",
    solution:
      "A rescue adoption portal that connects shelters, adopters, and volunteers with pet profiles and support resources.",
    technologies: ["Dart", "Firebase"],
    github: "https://github.com/jeprcks/FureverHome",
  },
  {
    name: "Alberto's Pizza Shop",
    category: "E-Commerce",
    description:
      "Online pizza ordering experience with product browsing, cart management, and checkout flow.",
    problem:
      "Small restaurants needed a simpler online ordering experience with menu browsing and checkout.",
    solution:
      "A pizza shop ordering flow with product discovery, cart management, and checkout.",
    technologies: ["Node.js", "Next.js", "E-Commerce"],
    github: "https://github.com/jeprcks/AlbertosPizzaShop",
  },
];

export const services = [
  {
    title: "Websites",
    description:
      "Modern, responsive websites for businesses, organizations, portfolios, and personal brands.",
    previewHeading: "Web experiences designed to convert",
    previewPoints: [
      "Landing pages with strong clear calls to action.",
      "Branded responsive layouts for every device.",
      "Fast, readable, and polished visual storytelling.",
    ],
  },
  {
    title: "Web Applications",
    description:
      "Custom dashboards, management systems, monitoring systems, and business applications.",
    previewHeading: "User workflows built for scale",
    previewPoints: [
      "Dashboard interfaces with real-time clarity.",
      "Intuitive user flows for complex workflows.",
      "Performance-focused app architecture.",
    ],
  },
  {
    title: "E-Commerce",
    description:
      "Online stores, ordering platforms, product catalogs, and customer-focused shopping experiences.",
    previewHeading: "E-commerce with conversion-first UI",
    previewPoints: [
      "Product browsing that feels effortless.",
      "Optimized cart and checkout experience.",
      "Sales-focused visual hierarchy and trust signals.",
    ],
  },
  {
    title: "UI / UX",
    description:
      "Clean, intuitive interfaces designed around usability and user experience.",
    previewHeading: "Interfaces built with clarity",
    previewPoints: [
      "Human-centered design decisions.",
      "Polished micro-interactions and motion.",
      "Design systems that scale with your product.",
    ],
  },
];

export const stats = [
  { label: "2026", caption: "Computer Science Graduate" },
  { label: "4+", caption: "Featured Projects" },
  { label: "Frontend", caption: "Primary Focus" },
  { label: "Always", caption: "Learning & Building" },
];

export const skills = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Laravel", "Node.js", "Firebase", "APIs", "Databases"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "AI Development Tools"],
  },
];

export const timeline = [
  {
    title: "OJT Developer",
    company: "MOM Trading and Services",
    period: "2025",
    details:
      "Developed an inventory management system for product, sales, and transaction tracking, with analytics support.",
  },
  {
    title: "University Thesis",
    company: "SMARTendance",
    period: "2026",
    details:
      "Led the Smartendance thesis project, building a QR-based attendance system with teacher and parent support.",
  },
];
