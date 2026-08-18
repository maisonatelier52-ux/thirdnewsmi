import { Article } from "@/types/article";

import businessArticles from "@/data/categories/business/articles.json";
import technologyArticles from "@/data/categories/technology/articles.json";
import worldArticles from "@/data/categories/world/articles.json";
import designArticles from "@/data/categories/design/articles.json";
import scienceArticles from "@/data/categories/science/articles.json";
import cultureArticles from "@/data/categories/culture/articles.json";

export const CATEGORIES = [
  { id: "all", label: "All Stories", count: 18 },
  { id: "business", label: "Business", count: businessArticles.length },
  { id: "technology", label: "Technology", count: technologyArticles.length },
  { id: "world", label: "World Affairs", count: worldArticles.length },
  { id: "design", label: "Design & Urban", count: designArticles.length },
  { id: "science", label: "Science & DeepTech", count: scienceArticles.length },
  { id: "culture", label: "Culture & Arts", count: cultureArticles.length },
];

export function getAllArticles(): Article[] {
  return [
    ...(businessArticles as Article[]),
    ...(technologyArticles as Article[]),
    ...(worldArticles as Article[]),
    ...(designArticles as Article[]),
    ...(scienceArticles as Article[]),
    ...(cultureArticles as Article[]),
  ];
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === "all") return getAllArticles();
  const all = getAllArticles();
  const catArticles = all.filter((item) => item.category.toLowerCase() === category.toLowerCase());
  const otherArticles = all.filter((item) => item.category.toLowerCase() !== category.toLowerCase());
  return [...catArticles, ...otherArticles];
}

export function getHeroArticles(): Article[] {
  const all = getAllArticles();
  // Picks premier lead stories across tech, world, business, science
  return [all[3], all[0], all[6], all[9], all[12]];
}

export function getExecutiveBriefingArticles(): Article[] {
  const all = getAllArticles();
  return [all[1], all[4], all[7], all[10], all[13]];
}

export function getVisualNarrativeArticles(): Article[] {
  const all = getAllArticles();
  return [all[9], all[6], all[15], all[3]];
}

export function getOpinionArticles(): Article[] {
  const all = getAllArticles();
  return [all[16], all[12], all[8], all[2]];
}

export function getArticleBySlug(slug: string): Article | undefined {
  const all = getAllArticles();
  return all.find((item) => item.slug.toLowerCase() === slug.toLowerCase());
}
