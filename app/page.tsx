"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import HeroMosaicSection from "@/components/HeroMosaicSection";
import ExecutiveBriefingSection from "@/components/ExecutiveBriefingSection";
import CategoryDeepDiveSection from "@/components/CategoryDeepDiveSection";
import VisualNarrativeSection from "@/components/VisualNarrativeSection";
import OpinionPerspectiveSection from "@/components/OpinionPerspectiveSection";
import ArchiveDigestSection from "@/components/ArchiveDigestSection";
import InvestigativeReportsSection from "@/components/InvestigativeReportsSection";
import Footer from "@/components/Footer";

import {
  getAllArticles,
  getHeroArticles,
  getExecutiveBriefingArticles,
  getVisualNarrativeArticles,
  getOpinionArticles,
} from "@/lib/dataLoader";
import { Article } from "@/types/article";

export default function Home() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const allArticles = getAllArticles();
  const briefingArticles = getExecutiveBriefingArticles();
  const visualArticles = getVisualNarrativeArticles();
  const opinionArticles = getOpinionArticles();
  const investigativeArticles = allArticles;

  const handleSelectCategory = (cat: string) => {
    if (cat === "all") {
      setSelectedCategory("all");
    } else {
      router.push(`/${cat}`);
    }
  };

  const handleOpenArticle = (art: Article) => {
    router.push(`/${art.category.toLowerCase()}/${art.slug}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-red-700 selection:text-white">
      {/* Navigation Header */}
      <Header
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        articles={allArticles}
        onOpenArticle={handleOpenArticle}
      />

      <main className="flex-1 space-y-0">
        {/* SECTION 1: Hero Mosaic & Lead Dispatch */}
        <HeroMosaicSection
          articles={allArticles}
          onOpenArticle={handleOpenArticle}
        />

        {/* SECTION 2: Executive Briefing & Intelligence Deck */}
        <ExecutiveBriefingSection
          articles={briefingArticles}
          onOpenArticle={handleOpenArticle}
        />

        {/* SECTION 3: Category Deep Dives Radar */}
        <CategoryDeepDiveSection
          articles={allArticles}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenArticle={handleOpenArticle}
        />

        {/* SECTION 4: Cinematic Visual Photojournalism Gallery */}
        <VisualNarrativeSection
          articles={visualArticles}
          onOpenArticle={handleOpenArticle}
        />

        {/* SECTION 5: Thinkers, Authors & Opinion Perspective Deck */}
        <OpinionPerspectiveSection
          articles={opinionArticles}
          onOpenArticle={handleOpenArticle}
        />

        {/* SECTION 6: Monolith Archive, Newsletter Digest & Topic Index */}
        <ArchiveDigestSection
          articles={allArticles}
          onOpenArticle={handleOpenArticle}
        />

        {/* SECTION 7: Deep-Dive Global Investigative Inquiries */}
        <InvestigativeReportsSection
          articles={investigativeArticles}
          onOpenArticle={handleOpenArticle}
        />
      </main>

      {/* Architectural Footer */}
      <Footer />
    </div>
  );
}
