import { Author } from "./Author";

export interface Post {
  title: string;
  content?: string;
  slug: string;
  excerpt: string;
  date: string;
  coverImage: string;
  author: Author;
}
