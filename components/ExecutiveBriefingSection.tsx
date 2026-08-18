"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ExecutiveBriefingSectionProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function ExecutiveBriefingSection({ articles, onOpenArticle }: ExecutiveBriefingSectionProps) {
  if (!articles || articles.length === 0) return null;

  const col1Article = articles[0];
  const textDispatches = articles.slice(1, 4);
  const col3Article = articles[4] || articles[0];

  return (
    <section className="w-full py-5 sm:py-8 border-b border-gray-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        
        {/* Section Title Header */}
        <div className="pb-2 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
            Executive Briefing Room
          </h2>
        </div>

        {/* Asymmetric 3-Column Magazine Deck with Tighter Gap Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          
          {/* COLUMN 1: Image Top + Detailed Feature Briefing (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => onOpenArticle(col1Article)}
            className="lg:col-span-4 space-y-4 group cursor-pointer lg:pr-3 lg:border-r lg:border-gray-100"
          >
            <div className="relative w-full h-52 sm:h-60 rounded-none overflow-hidden shrink-0">
              <Image
                src={col1Article.image}
                alt={col1Article.title}
                fill
                priority
                className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                <span>{col1Article.category}</span>
                <span className="text-gray-300">•</span>
                <span>{col1Article.date}</span>
              </div>

              <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-900 group-hover:underline leading-[1.08]">
                {col1Article.title}
              </h3>

              <p className="text-xs text-gray-600 leading-snug font-normal">
                {col1Article.shortdescription}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image
                    src={col1Article.author.image}
                    alt={col1Article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-gray-900">
                  {col1Article.author.name}
                </span>
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: 3 Clean Text-Only Dispatches Deck (4 Cols - 1 Line Description Limit) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 space-y-4 lg:px-1 lg:border-r lg:border-gray-100"
          >
            <div className="text-[10px] font-mono font-bold tracking-widest text-gray-900 uppercase pb-2 border-b border-gray-900">
              EXECUTIVE NEWS FEED
            </div>

            <div className="space-y-4 divide-y divide-gray-100">
              {textDispatches.map((article, idx) => (
                <div
                  key={article.slug}
                  onClick={() => onOpenArticle(article)}
                  className={`group cursor-pointer space-y-1.5 ${idx !== 0 ? "pt-3.5" : ""}`}
                >
                  <div className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                    <span>{article.category}</span>
                    <span className="text-gray-300">•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-gray-900 group-hover:underline leading-[1.08]">
                    {article.title}
                  </h3>

                  {/* 1 Line Description Limit with Tighter Line Height */}
                  <p className="text-xs text-gray-600 line-clamp-1 leading-snug font-normal">
                    {article.shortdescription}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                    <span>By {article.author.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 3: Text Details Top + Image Bottom Briefing (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => onOpenArticle(col3Article)}
            className="lg:col-span-4 space-y-4 group cursor-pointer lg:pl-3"
          >
            <div className="space-y-2">
              <div className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                <span>{col3Article.category}</span>
                <span className="text-gray-300">•</span>
                <span>{col3Article.date}</span>
              </div>

              <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-900 group-hover:underline leading-[1.08]">
                {col3Article.title}
              </h3>

              <p className="text-xs text-gray-600 leading-snug font-normal">
                {col3Article.shortdescription}
              </p>
            </div>

            <div className="relative w-full h-52 sm:h-60 rounded-none overflow-hidden shrink-0">
              <Image
                src={col3Article.image}
                alt={col3Article.title}
                fill
                priority
                className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image
                    src={col3Article.author.image}
                    alt={col3Article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-gray-900">
                  {col3Article.author.name}
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
