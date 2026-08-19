"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 space-y-8">
        
        {/* Category Banner Title Header */}
        <div className="border-b border-gray-900 pb-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-700">
              DESK DOSSIER
            </span>
            <h1 className="text-3xl sm:text-5xl font-black font-serif text-gray-900 capitalize tracking-tight mt-1">
              {categoryName} Journalism
            </h1>
          </div>
          <div className="hidden sm:block text-right text-xs font-mono text-gray-500">
            <span>TOTAL NEWS ({articles.length})</span>
          </div>
        </div>

        {/* 2-Column Category Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Main Lead Article Spotlight (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => onOpenArticle(leadArticle)}
            className="lg:col-span-7 group cursor-pointer space-y-4"
          >
            <div className="relative w-full h-[320px] sm:h-[400px] bg-gray-100 overflow-hidden shadow-2xs">
              <Image
                src={leadArticle.image}
                alt={leadArticle.title}
                fill
                priority
                className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white flex items-center text-xs font-mono">
                <span className="flex items-center gap-1.5 text-gray-200">
                  <Clock className="w-3.5 h-3.5" /> 4 MIN READ • {leadArticle.date}
                </span>
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
                <Link
                  href={`/author/${leadArticle.author.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="font-semibold text-gray-900 hover:text-red-700 hover:underline transition-colors"
                >
                  By {leadArticle.author.name}
                </Link>
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
                    <Link
                      href={`/author/${art.author.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-red-700 hover:underline transition-colors font-medium text-gray-700"
                    >
                      By {art.author.name}
                    </Link>
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
