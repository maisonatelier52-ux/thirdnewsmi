"use client";

import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { Compass, ArrowRight } from "lucide-react";
import Image from "next/image";

interface InvestigativeReportsSectionProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function InvestigativeReportsSection({
  articles,
  onOpenArticle,
}: InvestigativeReportsSectionProps) {
  if (!articles || articles.length === 0) return null;

  const quadReports = articles.slice(0, 8);

  return (
    <section className="w-full py-5 sm:py-8 border-b border-gray-200 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="pb-2 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
            Deep-Dive Investigative Inquiries
          </h2>
        </div>

        {/* 4-Column Equal Vertical Editorial Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {quadReports.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => onOpenArticle(article)}
              className="group cursor-pointer flex flex-col justify-between space-y-4"
            >
              {/* Non-Rounded Photo Frame */}
              <div className="relative w-full h-48 sm:h-56 rounded-none overflow-hidden shrink-0 border border-gray-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority={idx < 2}
                  className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text Details */}
              <div className="space-y-2 flex-1">
                <div className="text-[10px] font-mono font-bold tracking-wider text-gray-500 uppercase flex items-center gap-1.5">
                  <span>{article.category}</span>
                  <span className="text-gray-300">•</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-900 group-hover:underline leading-[1.08] line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-snug font-normal line-clamp-2">
                  {article.shortdescription}
                </p>
              </div>

              {/* Author & Arrow Footer */}
              <div className="pt-3 flex items-center justify-between border-t border-gray-100 text-[11px] text-gray-500 font-mono">
                <span>By {article.author.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
