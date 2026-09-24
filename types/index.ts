export interface Service {
  slug: string;
  title: string;
  description: string;
}

export type PortfolioCategory =
  | "بسته‌بندی"
  | "کارت ویزیت"
  | "بروشور"
  | "کاتالوگ"
  | "پوستر"
  | "چاپ تبلیغاتی";

export interface PortfolioItem {
  slug: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  year: string;
  materials: string;
  printingMethod: string;
  challenge: string;
  solution: string;
  gallery: number; // number of gallery placeholder frames to render
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string[]; // paragraphs
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  description: string;
}
