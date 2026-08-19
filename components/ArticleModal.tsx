"use client";

import { Article } from "@/types/article";
import { AnimatePresence, motion } from "framer-motion";
import { X, Clock, Calendar, Mail, User, Share2, Bookmark, ArrowRight, Volume2, Sparkles, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle?: (article: Article) => void;
  allArticles?: Article[];
}

export default function ArticleModal({ article, onClose, onSelectArticle, allArticles = [] }: ArticleModalProps) {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const related = allArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-md p-0 md:p-4 transition-all">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        {/* Main Content Drawer */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative z-10 flex flex-col w-full max-w-4xl h-full max-h-screen md:max-h-[96vh] md:rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden text-gray-900"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gray-200">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-gray-100 text-gray-700 border border-gray-200 rounded-md">
                {article.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-gray-500" /> 4 min read
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium rounded-lg border transition-all ${
                  isPlayingAudio
                    ? "bg-red-700 text-white border-red-800 shadow-xs"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200"
                }`}
              >
                <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? "animate-bounce text-white" : "text-gray-500"}`} />
                {isPlayingAudio ? "Pause Audio" : "Listen (3 min)"}
              </button>

              <button
                onClick={() => setSaved(!saved)}
                className={`p-2 rounded-lg border transition-colors ${
                  saved ? "bg-red-50 text-red-700 border-red-200" : "bg-gray-100 hover:bg-gray-200 text-gray-600 border-gray-200"
                }`}
                title="Bookmark article"
              >
                <Bookmark className="w-4 h-4" />
              </button>

              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 border border-gray-200 transition-colors"
                title="Copy link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors ml-2 border border-gray-200"
                title="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Copy confirmation notification banner */}
          {copied && (
            <div className="bg-red-700 text-white text-center text-xs font-bold py-1.5 px-4 font-mono animate-fade-in">
              Article link copied to clipboard!
            </div>
          )}

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto px-6 py-8 md:px-12 space-y-8">
            {/* Title & Short Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                <Calendar className="w-3.5 h-3.5 text-gray-500" />
                <span>{article.date}</span>
                <span>•</span>
                <span className="text-gray-900 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-gray-900" /> DOMAIN NAME EXCLUSIVE
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 leading-tight">
                {article.title}
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal border-l-4 border-red-700 pl-4 py-1">
                {article.shortdescription}
              </p>
            </div>

            {/* Author Card Banner */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200 shadow-2xs">
              <Link
                href={`/author/${article.author.slug}`}
                onClick={onClose}
                className="group flex items-center gap-4 hover:opacity-90 transition-all"
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0 transition-all">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-700 group-hover:underline group-hover:decoration-1 flex items-center gap-2 transition-colors">
                    {article.author.name}
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-gray-200 text-gray-800 rounded font-semibold group-hover:bg-red-50 group-hover:text-red-700">
                      {article.author.role}
                    </span>
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-1 mt-0.5">{article.author.bio}</p>
                </div>
              </Link>
              <div className="flex items-center gap-2">
                <Link
                  href={`/author/${article.author.slug}`}
                  onClick={onClose}
                  className="hidden sm:flex items-center gap-1.5 text-xs text-gray-700 hover:text-red-700 hover:underline hover:decoration-1 font-mono font-bold border border-gray-300 px-3 py-1.5 rounded-lg bg-white hover:bg-gray-100 transition-colors"
                >
                  View Profile <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </Link>
                <a
                  href={`mailto:${article.author.email}`}
                  className="hidden sm:flex items-center gap-1.5 text-xs text-red-700 hover:text-red-800 hover:underline hover:decoration-1 font-mono font-bold border border-red-200 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-red-700" /> Contact
                </a>
              </div>
            </div>

            {/* Main Featured Image */}
            <div className="relative w-full h-[280px] md:h-[420px] rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
            </div>

            {/* Article Description Paragraphs */}
            <div className="space-y-8 py-2">
              {article.description.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 tracking-wide flex items-center gap-2">
                    <span className="text-xs font-mono text-red-700 font-bold">0{idx + 1}.</span>
                    {sec.subtitle}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg font-normal">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Extended Editorial Context Box */}
            <div className="p-6 rounded-xl bg-gray-900 text-white border border-gray-800 space-y-3 shadow-md">
              <div className="text-xs font-mono uppercase tracking-widest text-red-400 flex items-center gap-2 font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Editorial Context & Key Takeaways
              </div>
              <ul className="space-y-2 text-xs md:text-sm text-gray-300 list-disc list-inside">
                <li>Primary report validated by independent cross-border intelligence feeds.</li>
                <li>Full raw dataset available for archived subscribers in the Domain Name Vault.</li>
                <li>Follow developments under the <span className="text-red-400 font-mono">#{article.category}</span> tag matrix.</li>
              </ul>
            </div>

            {/* Related Articles Section */}
            {related.length > 0 && (
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500 font-bold">
                  Related Stories in {article.category}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {related.map((rel) => (
                    <div
                      key={rel.slug}
                      onClick={() => onSelectArticle && onSelectArticle(rel)}
                      className="group cursor-pointer p-4 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-red-700/40 transition-all flex gap-3 shadow-2xs"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                        <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-gray-900 group-hover:text-red-700 group-hover:underline group-hover:decoration-1 line-clamp-2 transition-colors">
                          {rel.title}
                        </h5>
                        <p className="text-[11px] text-gray-500 font-mono mt-1">{rel.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-4 bg-gray-100 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600 font-mono">
            <span>DOMAIN NAME // ARTICLE READER</span>
            <button
              onClick={onClose}
              className="flex items-center gap-1 font-mono text-red-700 hover:text-red-800 hover:underline hover:decoration-1 font-bold transition-colors"
            >
              Return to Homepage <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
