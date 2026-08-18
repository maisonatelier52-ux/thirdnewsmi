"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CategoryHighlightsSectionProps {
  categoryName: string;
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function CategoryHighlightsSection({
  categoryName,
  articles,
  onOpenArticle,
}: CategoryHighlightsSectionProps) {
  if (!articles || articles.length === 0) return null;

  const opinionHighlights = articles.slice(5, 9).length === 4 ? articles.slice(5, 9) : articles.slice(0, 4);

  return (
    <section className="w-full py-12 md:py-16 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="pb-4 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 capitalize tracking-tight">
            {categoryName} Perspectives & Analysis
          </h2>
        </div>

        {/* 4 Column Sharp Vertical Editorial Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-start">
          {opinionHighlights.map((art, idx) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => onOpenArticle(art)}
              className={`group cursor-pointer flex flex-col justify-between h-full lg:px-6 space-y-4 ${
                idx !== 0 ? "lg:border-l lg:border-gray-200" : "lg:pl-0"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[11px] font-sans text-gray-500">
                  <span>{art.date}</span>
                </div>

                <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:underline leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-normal">
                  {art.shortdescription}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-sans">
                <span className="font-semibold text-gray-900">By {art.author.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
