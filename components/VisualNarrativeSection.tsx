"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface VisualNarrativeSectionProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function VisualNarrativeSection({ articles, onOpenArticle }: VisualNarrativeSectionProps) {
  if (!articles || articles.length === 0) return null;

  const leadArticle = articles[0];
  const sideArticles = articles.slice(1, 5);

  return (
    <section className="w-full py-5 sm:py-8 border-b border-gray-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        
        {/* News Section Header */}
        <div className="pb-2 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
            Photojournalism & Special Reports
          </h2>
        </div>

        {/* 12 Column Layout: 8 Cols Left Main Spotlight, 4 Cols Right Distinct News Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Display Frame (8 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => onOpenArticle(leadArticle)}
            className="lg:col-span-8 group relative rounded-none overflow-hidden cursor-pointer shadow-2xs min-h-[380px] sm:min-h-[440px] flex flex-col justify-end"
          >
            <Image
              src={leadArticle.image}
              alt={leadArticle.title}
              fill
              priority
              className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
            />

            {/* Subtle contrast gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

            {/* Bottom Caption Box */}
            <div className="relative z-10 p-6 sm:p-8 space-y-2.5">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-wider text-gray-300 uppercase">
                <span>{leadArticle.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white group-hover:underline leading-tight">
                {leadArticle.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 leading-normal font-normal">
                {leadArticle.shortdescription}
              </p>

              <div className="pt-3 flex items-center justify-between border-t border-white/20 text-xs font-mono">
                <span className="text-gray-300">By {leadArticle.author.name}</span>
                <span className="flex items-center gap-1.5 text-white font-bold group-hover:underline">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right News Article List (4 cols) - 4 Distinct Articles */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 pb-2 border-b border-gray-200">
              FEATURED PHOTO REPORTS
            </div>

            {sideArticles.map((art, idx) => (
              <div
                key={art.slug}
                onClick={() => onOpenArticle(art)}
                className="p-2.5 bg-white hover:bg-gray-50 transition-all cursor-pointer flex items-center gap-3.5 border-b border-gray-100 group"
              >
                <div className="relative w-16 h-16 shrink-0 overflow-hidden bg-gray-100 border border-gray-100">
                  <Image src={art.image} alt={art.title} fill className="object-cover group-hover:scale-104 transition-transform duration-500" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono uppercase text-gray-400">
                    REPORT 0{idx + 1} • {art.date}
                  </div>
                  <h4 className="text-xs font-serif font-bold line-clamp-2 mt-0.5 text-gray-900 group-hover:underline leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-[10px] font-mono mt-1 text-gray-500">
                    By {art.author.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
