"use client";

import { useState } from "react";
import { Article } from "@/types/article";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ArchiveDigestSectionProps {
  articles: Article[];
  onOpenArticle: (article: Article) => void;
}

export default function ArchiveDigestSection({ articles, onOpenArticle }: ArchiveDigestSectionProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  const digestArticles = articles.slice(0, 3);

  return (
    <section className="w-full py-5 sm:py-8 border-b border-gray-200 bg-white text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        
        {/* Section Header */}
        <div className="pb-2 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
            Monolith Intelligence Hub
          </h2>
        </div>

        {/* Newsletter Subscription Box (Obsidian Black, No Corner Rounding) */}
        <div className="rounded-none bg-black text-white p-6 sm:p-8 space-y-6 shadow-xs relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 font-bold uppercase">
                <Mail className="w-4 h-4" />
                <span>EXECUTIVE NEWSLETTER SYNTHESIS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                Subscribe to Executive News
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Join 85,000+ institutional analysts, technology founders, and policymakers receiving our daily morning intelligence synthesis.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full md:w-auto md:min-w-[360px] space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-none bg-white/10 border border-white/20 text-xs font-mono text-white placeholder:text-gray-400 outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-none bg-white hover:bg-gray-100 text-black font-mono font-bold text-xs flex items-center gap-1.5 transition-all"
                >
                  Join <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-none bg-white/10 border border-white/20 text-white text-xs font-mono flex items-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
                  <span>Thank you for joining!</span>
                </motion.div>
              )}
            </form>
          </div>
        </div>

        {/* News Article Content Deck Below Subscription Box (With Full-Color Non-Rounded Images) */}
        <div className="space-y-4 pt-4">
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 pb-2 border-b border-gray-200">
            SELECTED INTELLIGENCE NEWS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {digestArticles.map((article, idx) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => onOpenArticle(article)}
                className="group cursor-pointer flex flex-col justify-between space-y-3"
              >
                {/* Full Color Image Container (Non-Rounded) */}
                <div className="relative w-full h-52 sm:h-60 rounded-none overflow-hidden shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority={idx === 0}
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Article Text Details */}
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

                {/* Author Line Below */}
                <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-500 font-mono">
                  By {article.author.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
