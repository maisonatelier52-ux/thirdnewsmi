"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { Feather } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface OpinionPerspectiveSectionProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function OpinionPerspectiveSection({ articles, onOpenArticle }: OpinionPerspectiveSectionProps) {
  if (!articles || articles.length === 0) return null;

  const opinionArticles = articles.slice(0, 4);

  return (
    <section className="w-full py-5 sm:py-8 border-b border-gray-200 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 space-y-4 sm:space-y-6">
        
        {/* Section Title Header */}
        <div className="pb-2 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Feather className="w-5 h-5 text-gray-900" /> Opinion & Perspectives
          </h2>
        </div>

        {/* 4 Equal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {opinionArticles.map((art, idx) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => onOpenArticle(art)}
              className="group cursor-pointer p-4 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-gray-300 hover:bg-white hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              {/* Content Description Top */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                  <span>{art.category}</span>
                  <span className="text-gray-300">•</span>
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
                <Link
                  href={`/author/${art.author.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-3 group/auth hover:opacity-80 transition-opacity"
                >
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 shrink-0">
                    <Image
                      src={art.author.image}
                      alt={art.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 group-hover/auth:text-red-700 group-hover/auth:underline truncate max-w-[120px]">
                      {art.author.name}
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 truncate max-w-[120px]">
                      {art.author.role}
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
