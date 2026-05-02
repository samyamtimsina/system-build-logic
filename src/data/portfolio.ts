export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech?: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  featured?: boolean;
};

import vaccinationImg from "@/assets/project-vaccination.png";
import expenseImg from "@/assets/project-expense.png";
import rustImg from "@/assets/project-rust.png";
import portraitImg from "@/assets/portrait-original.jpeg";

export const projects: Project[] = [
  {
    slug: "vaccination-tracker",
    title: "Vaccination Tracking System",
    tagline: "Healthcare management platform",
    description:
      "A full-stack healthcare management system for digitizing vaccination records for mothers and children with role-based access and automated scheduling.",
    features: [
      "Role-based system (Super Admin, Ward Admin, Ward Officer)",
      "Ward-based data isolation",
      "OTP authentication system",
      "Vaccination scheduling system",
      "Maternal and child health tracking",
      "Nutrition and weight monitoring",
      "Printable vaccination records",
      "Dark mode support",
      "English / Nepali language support",
      "Cron-based automation for reminders (email/SMS ready)",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Axios",
      "React Router",
      "Node.js",
      "Express.js",
      "REST API",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "bcrypt",
      "Git & GitHub",
      "Postman",
      "dotenv",
      "CORS",
    ],
    liveUrl: "https://vaccination-tracker-livid.vercel.app/",
    githubUrl: "https://github.com/samyamtimsina/vaccination-tracker",
    image: vaccinationImg,
    featured: true,
  },
  {
    slug: "expense-tracker",
    title: "Expense Tracker",
    tagline: "Full-stack financial application",
    description:
      "A modern full-stack expense tracking application built with React and Node.js that helps users manage expenses, budgets, and gain financial insights.",
    features: [
      "JWT-based user authentication",
      "Expense tracking with categories",
      "Monthly budget management",
      "Recurring expense automation",
      "Financial insights and analytics",
      "Export expenses to CSV and PDF",
      "Import expenses from CSV",
      "User profile management",
    ],
    tech: [
      "React 19",
      "React Router v7",
      "Node.js / Express",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Zod",
      "Recharts",
      "Tailwind CSS",
      "PDFKit",
    ],
    githubUrl: "https://github.com/samyamtimsina/expensetrackercollege",
    image: expenseImg,
  },
  {
    slug: "rust-todo",
    title: "Rust Todo App",
    tagline: "Systems programming experiment",
    description:
      "A systems-level todo application built in Rust to explore backend fundamentals and low-level programming concepts.",
    features: [
      "Built in pure Rust",
      "Exploration of ownership and borrowing",
      "CLI interface",
      "Foundation for backend systems work",
    ],
    githubUrl: "https://github.com/samyamtimsina/todo_list",
    image: rustImg,
  },
];

export const skills = [
  {
    category: "Core",
    items: ["Node.js", "Express.js", "React", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL (Prisma)", "MongoDB (Mongoose)"],
  },
  {
    category: "Languages",
    items: ["C/C++", "Python"],
  },
  {
    category: "Systems & Tools",
    items: ["Linux", "Neovim", "Git"],
  },
  {
    category: "Security/Auth",
    items: ["JWT", "REST APIs"],
  },
];

export const profile = {
  name: "Samyam Timsina",
  title: "PERN & MERN Stack Developer",
  tagline:
    "Building real-world systems with authentication, automation, and scalable architecture. Equally skilled in PostgreSQL and MongoDB stacks.",
  github: "https://github.com/samyamtimsina",
  email: "timsinasamyam3@gmail.com",
  linkedin: "https://linkedin.com/in/samyam-timsina-259a19236",
  portrait: portraitImg,
};
