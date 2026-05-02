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

import vaccinationImg from "@/assets/project-vaccination.jpg";
import expenseImg from "@/assets/project-expense.jpg";
import rustImg from "@/assets/project-rust.jpg";

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
  "React / Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MongoDB",
  "Prisma ORM",
  "Tailwind CSS",
  "REST APIs",
  "JWT Authentication",
  "Role-Based Access Control",
  "CSV / PDF Exports",
  "Rust (basic)",
];

export const profile = {
  name: "Samyam Timsina",
  title: "Full-Stack Developer",
  tagline:
    "Building real-world systems with authentication, automation, and scalable architecture.",
  github: "https://github.com/samyamtimsina",
  email: "samyamtimsina@gmail.com",
  linkedin: "",
};
