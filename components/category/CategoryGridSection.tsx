"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CategoryGridSectionProps {
  categoryName: string;
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function CategoryGridSection({
  categoryName,
  articles,
  onOpenArticle,
}: CategoryGridSectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="w-full py-8 md:py-12 bg-white text-gray-900 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 space-y-6">
        
        {/* Section Header */}
        <div className="pb-4 border-b border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 capitalize tracking-tight">
            {categoryName} Field Reports
          </h2>
        </div>

        {/* 3-Column Sharp Broadsheet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 items-start">
          {articles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => onOpenArticle(article)}
              className={`group cursor-pointer flex flex-col justify-between space-y-4 ${
                idx % 3 !== 0 ? "md:pl-8" : ""
              }`}
            >
              {/* Sharp square photo frame (No rounded corners!) */}
              <div className="relative w-full h-52 sm:h-60 rounded-none overflow-hidden bg-gray-100 border border-gray-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority={idx < 3}
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Details */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 text-[11px] font-sans text-gray-500">
                  <span>{article.date}</span>
                </div>

                <h3 className="font-serif font-bold text-xl text-gray-900 group-hover:underline leading-snug line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal line-clamp-3">
                  {article.shortdescription}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 flex items-center justify-between border-t border-gray-100 text-[11px] text-gray-400 font-sans">
                <Link
                  href={`/author/${article.author.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-gray-900 hover:underline transition-colors"
                >
                  By {article.author.name}
                </Link>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
