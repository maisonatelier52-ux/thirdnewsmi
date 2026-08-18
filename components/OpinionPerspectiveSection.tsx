"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { Feather } from "lucide-react";
import Image from "next/image";

interface OpinionPerspectiveSectionProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function OpinionPerspectiveSection({ articles, onOpenArticle }: OpinionPerspectiveSectionProps) {
  if (!articles || articles.length === 0) return null;

  const opinionArticles = articles.slice(0, 4);

  return (
    <section className="w-full py-5 sm:py-8 border-b border-gray-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="pb-2 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
            Voices & Thinkers Deck
          </h2>
        </div>

        {/* 4 Column Editorial Deck (Vertical Dividers: Headline & Description FIRST, Author Below) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-start">
          {opinionArticles.map((art, idx) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => onOpenArticle(art)}
              className={`group cursor-pointer flex flex-col justify-between h-full lg:px-6 ${
                idx !== 0 ? "lg:border-l lg:border-gray-200" : "lg:pl-0"
              }`}
            >
              {/* Category Meta, Headline & Description FIRST */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono font-bold tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
                  <span>{art.date}</span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-900 group-hover:underline leading-[1.08]">
                  {art.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-3 leading-snug font-normal">
                  {art.shortdescription}
                </p>
              </div>

              {/* Author Image and Details BELOW at Bottom */}
              <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 shrink-0">
                    <Image
                      src={art.author.image}
                      alt={art.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 truncate max-w-[100px]">
                      {art.author.name}
                    </div>
                    <div className="text-[10px] font-mono text-gray-500">
                      {art.author.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
