"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleModal from "@/components/ArticleModal";
import { getAllArticles, getAuthorBySlug, getArticlesByAuthor } from "@/lib/dataLoader";
import { Article } from "@/types/article";
import {
  Mail,
  Share2,
  Calendar,
  Clock,
  ArrowLeft,
  Newspaper,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const router = useRouter();

  const author = getAuthorBySlug(slug);
  const allArticles = getAllArticles();
  const authorArticles = getArticlesByAuthor(slug);

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);

  if (!author) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans">
        <Header onSelectCategory={(cat) => router.push(cat === "all" ? "/" : `/${cat}`)} articles={allArticles} />
        <main className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-6 max-w-xl mx-auto">
          <div className="p-4 rounded-full bg-red-50 text-red-700 font-mono text-xs font-bold uppercase tracking-widest">
            ERROR 404 • AUTHOR PROFILE NOT FOUND
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900">
            Journalist Record Unavailable
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed font-sans">
            The author profile matching <code className="bg-gray-100 px-2 py-1 rounded text-red-700 font-mono">{slug}</code> could not be located in our editorial roster database.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              href="/team"
              className="px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white font-mono text-xs font-bold transition-all shadow-md flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> View Newsroom Team
            </Link>
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-mono text-xs font-bold border border-gray-200 transition-all"
            >
              Return Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSelectCategory = (catId: string) => {
    if (catId === "all") {
      router.push("/");
    } else {
      router.push(`/${catId}`);
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const categoriesCovered = Array.from(
    new Set(authorArticles.map((art) => art.category.toUpperCase()))
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-red-700 selection:text-white font-sans">
      <Header
        onSelectCategory={handleSelectCategory}
        articles={allArticles}
        onOpenArticle={(art) => setSelectedArticle(art)}
      />

      <main className="flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 py-8 md:py-12 w-full space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/team" className="hover:text-gray-900 transition-colors">
            OUR TEAM
          </Link>
          <span>/</span>
          <span className="text-red-700 font-bold uppercase">{author.name}</span>
        </div>

        {/* Author Header Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gray-950 text-white p-6 sm:p-10 border border-gray-800 shadow-2xl space-y-8">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-700/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            {/* Left Avatar & Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-gray-800 shadow-xl shrink-0">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-red-700 text-white rounded-md">
                    {author.role}
                  </span>
                  <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> VERIFIED AUTHOR
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black font-serif text-white tracking-tight">
                  {author.name}
                </h1>

                <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-sans">
                  {author.bio}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${author.email}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-900 hover:bg-gray-100 font-mono text-xs font-bold transition-all shadow-md"
                  >
                    <Mail className="w-3.5 h-3.5 text-red-700" /> Contact Journalist
                  </a>

                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-mono text-xs font-bold border border-gray-700 transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5 text-gray-400" />
                    {copied ? "Link Copied!" : "Share Profile"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stat Badges Bottom Strip */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-800 text-xs font-mono">
            <div className="space-y-1">
              <span className="text-gray-400 uppercase flex items-center gap-1.5">
                <Newspaper className="w-3.5 h-3.5 text-red-400" /> Total Published
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white font-mono">
                {authorArticles.length} <span className="text-xs font-normal text-gray-400">articles</span>
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-gray-400 uppercase flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-red-400" /> Coverage Desks
              </span>
              <p className="text-sm font-bold text-white uppercase font-mono">
                {categoriesCovered.join(" • ") || "GENERAL"}
              </p>
            </div>

            <div className="space-y-1 col-span-2 sm:col-span-1">
              <span className="text-gray-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-red-400" /> Newsroom Status
              </span>
              <p className="text-sm font-bold text-green-400 uppercase font-mono">
                ACTIVE CORRESPONDENT
              </p>
            </div>
          </div>
        </div>

        {/* Author Published Articles Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold font-serif text-gray-900 flex items-center gap-2">
                Published News & Reports
              </h2>
              <p className="text-xs text-gray-500 font-mono">
                SHOWING ALL ({authorArticles.length}) VERIFIED ARTICLES BY {author.name.toUpperCase()}
              </p>
            </div>
          </div>

          {authorArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {authorArticles.map((article) => (
                <div
                  key={article.slug}
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer flex flex-col justify-between rounded-2xl bg-white border border-gray-200 hover:border-red-700/60 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Article Thumbnail Image */}
                    <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider">
                        {article.category}
                      </div>
                    </div>

                    {/* Article Content Metadata */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-gray-500">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        <span>{article.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gray-400" /> 4 min read
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-serif text-gray-900 group-hover:text-red-700 group-hover:underline group-hover:decoration-1 line-clamp-2 transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed font-sans">
                        {article.shortdescription}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-gray-100 text-xs font-mono text-red-700 font-bold group-hover:text-red-800 group-hover:underline group-hover:decoration-1">
                    <span>Read Full News Article</span>
                    <ExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
              <p className="text-sm text-gray-500 font-mono">
                No published articles found for this author yet.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Article Reader Modal when an article is clicked */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onSelectArticle={(art) => setSelectedArticle(art)}
        allArticles={allArticles}
      />

      <Footer />
    </div>
  );
}
