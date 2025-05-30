import { ReactElement } from "react";

export interface Blog {
  id: string;
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
}
// types/skill.ts
export interface Skill {
  id: number;
  name: string;
  icon: ReactElement;
  intro: string;
  link: string;
  projects: string[];
  blogs: string[];
}
export interface item {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}
