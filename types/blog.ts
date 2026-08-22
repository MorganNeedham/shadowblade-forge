export type BlogCategory =
  | "Forge Notes"
  | "Leatherwork"
  | "Dice Lab"
  | "Field Tests"
  | "Behind the Bench";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string;
  featured: boolean;
};