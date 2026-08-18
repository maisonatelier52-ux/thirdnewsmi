"use client";

import { use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHeroSection from "@/components/category/CategoryHeroSection";
import CategoryGridSection from "@/components/category/CategoryGridSection";
import CategoryHighlightsSection from "@/components/category/CategoryHighlightsSection";
import { getAllArticles, getArticlesByCategory } from "@/lib/dataLoader";
import { Article } from "@/types/article";
import { notFound, useRouter } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const rawCategory = resolvedParams.category;
  const router = useRouter();

  const validCategories = ["business", "technology", "world", "design", "science", "culture"];
  
  if (!validCategories.includes(rawCategory.toLowerCase())) {
    notFound();
  }

  const category = rawCategory.toLowerCase();
  const allArticles = getAllArticles();
  const categoryArticles = getArticlesByCategory(category);

  const handleSelectCategory = (catId: string) => {
    if (catId === "all") {
      router.push("/");
    } else {
      router.push(`/${catId}`);
    }
  };

  const handleOpenArticle = (art: Article) => {
    router.push(`/${art.category.toLowerCase()}/${art.slug}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-red-700 selection:text-white">
      {/* Navigation Header with Active Category Highlight */}
      <Header
        selectedCategory={category}
        onSelectCategory={handleSelectCategory}
        articles={allArticles}
        onOpenArticle={handleOpenArticle}
      />

      <main className="flex-1 space-y-0">
        {/* SECTION 1: Category Hero & Lead Story */}
        <CategoryHeroSection
          categoryName={category}
          articles={categoryArticles}
          onOpenArticle={handleOpenArticle}
        />

        {/* SECTION 2: Full Category Dispatches & Dossier Grid */}
        <CategoryGridSection
          categoryName={category}
          articles={categoryArticles}
          onOpenArticle={handleOpenArticle}
        />

        {/* SECTION 3: Category Thought Leadership & Opinion Highlights */}
        <CategoryHighlightsSection
          categoryName={category}
          articles={categoryArticles}
          onOpenArticle={handleOpenArticle}
        />
      </main>

      {/* Architectural Footer */}
      <Footer />
    </div>
  );
}
