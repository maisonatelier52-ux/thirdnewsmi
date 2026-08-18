"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";

interface CategoryHeroSectionProps {
  categoryName: string;
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function CategoryHeroSection({
  categoryName,
  articles,
  onOpenArticle,
}: CategoryHeroSectionProps) {
  if (!articles || articles.length === 0) return null;

  const leadArticle = articles[0];
  const sideArticles = articles.slice(1, 5);

  return (
    <section className="w-full py-8 md:py-12 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* EDITORIAL MASTHEAD CATEGORY HEADER */}
        <div className="space-y-4 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-[11px] font-mono text-gray-500 font-bold uppercase tracking-widest">
            <span>EDITORIAL DESK // {categoryName.toUpperCase()}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-gray-900 capitalize tracking-tight leading-none">
                {categoryName}
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 font-sans leading-relaxed pt-1">
                Authoritative field reports, executive briefings, and investigative reporting on {categoryName}.
              </p>
            </div>

            {/* Topic Filter Tags */}
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-sans shrink-0">
              <span className="bg-gray-900 text-white font-semibold px-3 py-1 text-[11px] uppercase tracking-wider cursor-pointer">
                All News
              </span>
              <span className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 py-1 text-[11px] uppercase tracking-wider cursor-pointer transition-colors">
                Markets & Capital
              </span>
              <span className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 py-1 text-[11px] uppercase tracking-wider cursor-pointer transition-colors">
                Global Economy
              </span>
              <span className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 py-1 text-[11px] uppercase tracking-wider cursor-pointer transition-colors">
                Policy & Trade
              </span>
            </div>
          </div>
        </div>

        {/* 12-COLUMN SHARP HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT LEAD SPOTLIGHT (7 COLS) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => onOpenArticle(leadArticle)}
            className="lg:col-span-7 space-y-5 group cursor-pointer"
          >
            {/* Crisp Sharp Image Frame (No rounded corners!) */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-none overflow-hidden bg-gray-100 border border-gray-100">
              <Image
                src={leadArticle.image}
                alt={leadArticle.title}
                fill
                priority
                className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-white/95 text-gray-900 font-bold px-2.5 py-1 rounded-none text-[10px] uppercase tracking-wider font-sans">
                  {leadArticle.category}
                </span>
                <p className="text-xs text-gray-200 font-sans flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" />
                  {leadArticle.readTime || "4 MIN READ"} • {leadArticle.date}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900 group-hover:underline leading-[1.08]">
                {leadArticle.title}
              </h2>

              <p className="text-sm text-gray-600 font-normal leading-relaxed">
                {leadArticle.shortdescription}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-gray-500 font-sans border-t border-gray-100">
                <span className="font-semibold text-gray-900">By {leadArticle.author.name}</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 4 SHARP DISPATCH CARDS (5 COLS) */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="space-y-4 divide-y divide-gray-100">
              {sideArticles.map((art, idx) => (
                <div
                  key={art.slug}
                  onClick={() => onOpenArticle(art)}
                  className={`group cursor-pointer space-y-2 ${idx !== 0 ? "pt-4" : ""}`}
                >
                  <div className="flex items-center gap-2 text-[11px] font-sans">
                    <span className="text-gray-400 font-mono text-[10px]">0{idx + 1}</span>
                    <span className="text-gray-300">•</span>
                    <span className="bg-gray-100 text-gray-700 font-medium px-2 py-0.5 rounded-none text-[10px] uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400 text-[10px]">{art.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-gray-900 group-hover:underline leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-normal">
                    {art.shortdescription}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-gray-400 font-sans">
                    <span>By {art.author.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
