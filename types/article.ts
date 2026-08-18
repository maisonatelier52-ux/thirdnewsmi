export interface DescriptionParagraph {
  subtitle: string;
  text: string;
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
  slug: string;
  email: string;
}

export interface Article {
  category: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  shortdescription: string;
  description: DescriptionParagraph[];
  author: Author;
  readTime?: string;
  trendingIndex?: number;
}
