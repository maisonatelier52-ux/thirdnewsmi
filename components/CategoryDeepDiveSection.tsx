"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import Image from "next/image";

interface CategoryDeepDiveSectionProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
  selectedCategory?: string;
  onSelectCategory?: (cat: string) => void;
}

export default function CategoryDeepDiveSection({
  articles,
  onOpenArticle,
}: CategoryDeepDiveSectionProps) {
  if (!articles || articles.length === 0) return null;

  const equalArticles = articles.slice(0, 3);

  return (
    <section className="w-full py-5 sm:py-8 border-b border-gray-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="pb-2 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
            Curated Category Focus
          </h2>
        </div>

        {/* Equal-Scale 3-Column Magazine Dossier Grid (No Special Highlight) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {equalArticles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => onOpenArticle(article)}
              className="group cursor-pointer flex flex-col justify-between space-y-4"
            >
              {/* Full Color Image Container (No Rounded Corners) */}
              <div className="relative w-full h-56 sm:h-64 rounded-none overflow-hidden shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Details */}
              <div className="space-y-2 flex-1">
                <div className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                  <span>{article.date}</span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-900 group-hover:underline leading-[1.08] line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-snug font-normal line-clamp-2">
                  {article.shortdescription}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 flex items-center justify-between border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 shrink-0">
                    <Image
                      src={article.author.image}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">
                      {article.author.name}
                    </div>
                    <div className="text-[10px] text-gray-500 font-mono">
                      {article.author.role}
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
