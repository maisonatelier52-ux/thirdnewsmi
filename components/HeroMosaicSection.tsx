"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";

interface HeroMosaicSectionProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function HeroMosaicSection({
  articles,
  onOpenArticle,
}: HeroMosaicSectionProps) {
  if (!articles || articles.length === 0) return null;

  const leadArticle = articles[0];
  const leftArticles = articles.slice(1, 4);
  const rightArticles = articles.slice(4, 8);
  const bottomGrid = articles.slice(8, 11);

  return (
    <section className="w-full py-8 md:py-12 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* MAIN SUPER-MINIMAL 12-COLUMN HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: 3 Minimal Text Cards (3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            {leftArticles.map((article, idx) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => onOpenArticle(article)}
                className="group cursor-pointer p-3 -mx-3 hover:bg-gray-50/80 transition-all duration-300 space-y-2 border-b border-gray-100 last:border-b-0 pb-4"
              >
                <div className="flex items-center gap-2 text-[11px] font-sans text-gray-400">
                  <span className="text-[10px] uppercase font-mono">{article.date}</span>
                </div>

                <h3 className="font-serif font-bold text-base sm:text-lg text-gray-900 group-hover:underline leading-snug transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-normal">
                  {article.shortdescription}
                </p>

                <div className="pt-1 flex items-center justify-between text-[11px] text-gray-400 font-sans">
                  <span>By {article.author.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER COLUMN: Lead Spotlight Card (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => onOpenArticle(leadArticle)}
            className="lg:col-span-6 group cursor-pointer space-y-5"
          >
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-none overflow-hidden bg-gray-100 shadow-2xs">
              <Image
                src={leadArticle.image}
                alt={leadArticle.title}
                fill
                priority
                className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <p className="text-xs text-gray-200 font-sans flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-white" />
                  {leadArticle.readTime || "4 MIN READ"} • {leadArticle.date}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900 group-hover:underline leading-[1.08] transition-colors">
                {leadArticle.title}
              </h2>

              <p className="text-sm text-gray-600 font-normal leading-relaxed">
                {leadArticle.shortdescription}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-gray-500 font-sans border-t border-gray-100">
                <span className="font-medium text-gray-900">By {leadArticle.author.name}</span>
                <span className="flex items-center gap-1 font-semibold text-gray-900 group-hover:underline transition-colors">
                  Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 4 Stacked Stories (3 Cols) */}
          <div className="lg:col-span-3 space-y-5">
            {rightArticles.map((article, idx) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => onOpenArticle(article)}
                className="group cursor-pointer p-3 -mx-3 hover:bg-gray-50/80 transition-all duration-300 space-y-2 border-b border-gray-100 last:border-b-0 pb-3"
              >
                <div className="flex items-center gap-2 text-[11px] font-sans">
                  <span className="text-gray-400 font-mono text-[10px]">0{idx + 1}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-400 text-[10px] font-mono">{article.date}</span>
                </div>

                <h3 className="font-serif font-bold text-base text-gray-900 group-hover:underline leading-snug line-clamp-2 transition-colors">
                  {article.title}
                </h3>

                <div className="pt-1 flex items-center justify-between text-[11px] text-gray-400 font-sans">
                  <span>By {article.author.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            ))}

            <div className="pt-2">
              <button
                onClick={() => onOpenArticle(rightArticles[0])}
                className="w-full py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-sans font-semibold rounded-none tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>EXPLORE MORE STORIES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: 3 Minimal Featured Cards */}
        <div className="pt-10 border-t border-gray-100 space-y-6">
          <h3 className="text-lg font-serif font-bold text-gray-900">
            Featured Investigations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bottomGrid.map((article, idx) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => onOpenArticle(article)}
                className="group cursor-pointer space-y-3"
              >
                <div className="relative w-full h-48 rounded-none overflow-hidden bg-gray-100 shadow-2xs">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-600 ease-out"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] font-sans text-gray-500">
                    <span>{article.date}</span>
                  </div>

                  <h4 className="font-serif font-bold text-lg text-gray-900 group-hover:underline leading-snug line-clamp-2 transition-colors">
                    {article.title}
                  </h4>

                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {article.shortdescription}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
