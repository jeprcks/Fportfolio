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
    technologies: ["Web Development", "Database", "SMS Notifications"],
    github: "https://github.com/jeprcks/WasteWise",
  },
  {
    name: "FureverHome",
    category: "Web Platform",
    description:
      "Rescue and adoption platform for dogs with care resources and adoption support.",
    technologies: ["Dart", "Firebase"],
    github: "https://github.com/jeprcks/FureverHome",
  },
  {
    name: "Alberto's Pizza Shop",
    category: "E-Commerce",
    description:
      "Online pizza ordering experience with product browsing, cart management, and checkout flow.",
    technologies: ["Node.js", "Next.js", "E-Commerce"],
    github: "https://github.com/jeprcks/AlbertosPizzaShop",
  },
];

export const services = [
  {
    title: "Websites",
    description:
      "Modern, responsive websites for businesses, organizations, portfolios, and personal brands.",
  },
  {
    title: "Web Applications",
    description:
      "Custom dashboards, management systems, monitoring systems, and business applications.",
  },
  {
    title: "E-Commerce",
    description:
      "Online stores, ordering platforms, product catalogs, and customer-focused shopping experiences.",
  },
  {
    title: "UI / UX",
    description:
      "Clean, intuitive interfaces designed around usability and user experience.",
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
    period: "2024",
    details:
      "Led the Smartendance thesis project, building a QR-based attendance system with teacher and parent support.",
  },
];
