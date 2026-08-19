"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <section className="w-full py-8 md:py-12 bg-white text-gray-900 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 space-y-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gray-900 pb-2">
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 tracking-tight flex items-center gap-2">
            Executive Briefing & Intelligence
          </h2>
          <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider">
            ANALYSIS MATRIX
          </span>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: Large Image Top + Text Details (4 Cols) */}
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
              <Link
                href={`/author/${col1Article.author.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2.5 group/auth hover:opacity-80 transition-opacity"
              >
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image
                    src={col1Article.author.image}
                    alt={col1Article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-gray-900 group-hover/auth:text-red-700 group-hover/auth:underline">
                  {col1Article.author.name}
                </span>
              </Link>
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

                  <p className="text-xs text-gray-600 line-clamp-1 leading-snug font-normal">
                    {article.shortdescription}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                    <Link
                      href={`/author/${article.author.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-red-700 hover:underline transition-colors"
                    >
                      By {article.author.name}
                    </Link>
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
              <Link
                href={`/author/${col3Article.author.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2.5 group/auth hover:opacity-80 transition-opacity"
              >
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 shrink-0">
                  <Image
                    src={col3Article.author.image}
                    alt={col3Article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-gray-900 group-hover/auth:text-red-700 group-hover/auth:underline">
                  {col3Article.author.name}
                </span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
