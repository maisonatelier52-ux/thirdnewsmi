"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllArticles, getArticleBySlug } from "@/lib/dataLoader";
import { Clock, Calendar, ArrowUpRight, Share2, Bookmark } from "lucide-react";

interface ArticleDetailPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const resolvedParams = use(params);
  const { category, slug } = resolvedParams;
  const router = useRouter();

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const handleSelectCategory = (catId: string) => {
    if (catId === "all") {
      router.push("/");
    } else {
      router.push(`/${catId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-red-700 selection:text-white">
      {/* Navigation Header */}
      <Header
        selectedCategory={category.toLowerCase()}
        onSelectCategory={handleSelectCategory}
        articles={allArticles}
        onOpenArticle={(art) => router.push(`/${art.category.toLowerCase()}/${art.slug}`)}
      />

      <main className="flex-1">
        <article className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 py-4 sm:py-8 space-y-6 sm:space-y-8">
          
          {/* Breadcrumbs Bar */}
          <div className="pb-3 border-b border-gray-200 text-[11px] font-mono uppercase tracking-widest text-gray-500">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                HOME
              </Link>
              <span>/</span>
              <Link
                href={`/${article.category.toLowerCase()}`}
                className="hover:text-gray-900 transition-colors"
              >
                {article.category.toUpperCase()}
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-bold truncate max-w-[220px] sm:max-w-md">
                {article.slug}
              </span>
            </div>
          </div>

          {/* HERO SPLIT DECK (12 COLS: 7 LEFT TEXT, 5 RIGHT MEDIA) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start pb-6 border-b border-gray-200">
            
            {/* LEFT COLUMN: TITLE & DECK SUMMARY (7 COLS) */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-gray-900 leading-tight tracking-tight">
                {article.title}
              </h1>

              <p className="text-sm sm:text-base font-sans text-gray-600 leading-normal font-normal">
                {article.shortdescription}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-sans text-gray-500 border-t border-gray-100">
                <span className="flex items-center gap-1.5 font-medium text-gray-900">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  {article.date}
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1.5 font-medium text-gray-900">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  {article.readTime || "5 MIN READ"}
                </span>
                <span className="text-gray-300">•</span>
                <span className="font-semibold text-gray-900">
                  By {article.author.name}
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: PORTRAIT HERO MEDIA (5 COLS) */}
            <div className="lg:col-span-5 space-y-1.5">
              <div className="relative w-full h-[240px] sm:h-[340px] rounded-none overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <p className="text-[10px] font-sans text-gray-400 italic text-right">
                Media News: {article.title} • GLOBAL ARCHIVE
              </p>
            </div>

          </div>

          {/* MAIN ASYMMETRIC CONTENT STREAM (12 COLS: 3 LEFT STICKY SIDEBAR, 9 RIGHT PROSE STREAM) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* LEFT STICKY SIDEBAR (3 COLS): AUTHOR CAPSULE */}
            <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-[200px]">
              
              {/* Author Capsule */}
              <div className="p-4 bg-white border border-gray-200 shadow-2xs space-y-3.5 transition-all">
                {/* Header Tag */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-gray-400 font-bold uppercase pb-2 border-b border-gray-100">
                  <span>JOURNALIST PROFILE</span>
                  <span className="text-gray-900 font-bold">VERIFIED</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200 shadow-2xs">
                    <Image
                      src={article.author.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <h3 className="font-serif font-bold text-sm text-gray-900 leading-snug truncate">
                      {article.author.name}
                    </h3>
                    <div className="text-[10px] font-mono tracking-wider text-red-700 font-bold uppercase">
                      {article.author.role || "Executive Senior Editor"}
                    </div>
                  </div>
                </div>

                {/* Bio text with sleek accent left border */}
                <p className="text-xs text-gray-600 font-sans leading-relaxed pl-3 border-l-2 border-gray-900/15">
                  {article.author.bio || `Reporting on global ${article.category} markets, policy architecture, and strategic field news.`} Specializing in macroeconomic forecasting, regulatory policy, and technology transformation across international markets. Her investigative reporting is frequently cited by institutional forums and economic research desks worldwide.
                </p>

                {/* Interactive Action Buttons */}
                <div className="pt-2.5 flex items-center gap-2 border-t border-gray-100">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: article.title, url: window.location.href });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Article link copied to clipboard!");
                      }
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-gray-900 hover:bg-black text-white text-xs font-mono font-medium transition-all shadow-2xs cursor-pointer active:scale-98"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Article</span>
                  </button>
                  <button
                    className="p-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 text-gray-700 transition-all cursor-pointer active:scale-98"
                    title="Bookmark Article"
                  >
                    <Bookmark className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>

            </aside>

            {/* RIGHT MAIN PROSE STREAM (9 COLS): ARTICLE-SPECIFIC PROSE CONTENT */}
            <div className="lg:col-span-9 space-y-6 text-gray-900">
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-normal font-sans">
                {/* Primary Description Paragraphs */}
                {article.description && article.description.length > 0 ? (
                  article.description.map((sec, idx) => (
                    <div key={idx} className="space-y-1.5">
                      {sec.subtitle && (
                        <h2 className="text-lg sm:text-xl font-serif font-bold text-gray-900 pt-2 pb-0.5 border-b border-gray-100">
                          {sec.subtitle}
                        </h2>
                      )}
                      <p className={idx === 0 ? "first-letter:float-left first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:leading-none first-letter:text-gray-900" : ""}>
                        {sec.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="space-y-1.5">
                    <h2 className="text-lg sm:text-xl font-serif font-bold text-gray-900 pt-2 pb-0.5 border-b border-gray-100">
                      Overview & Key Observations
                    </h2>
                    <p className="first-letter:float-left first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:leading-none first-letter:text-gray-900">
                      {article.shortdescription}
                    </p>
                  </div>
                )}

                {/* Sub-paragraphs & Additional Analytical Breakdown */}
                <div className="space-y-4 pt-3 border-t border-gray-100">
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 pt-1 border-b border-gray-100 pb-0.5">
                      Institutional Impact & Macroeconomic Realignment
                    </h3>
                    <p>
                      Following initial disclosures, industry analysts and policy advisors highlighted a fundamental shift in institutional capital strategies. As organizations adapt to evolving global standards, decision-makers are implementing streamlined operational models to mitigate systematic market exposure.
                    </p>
                    <p>
                      According to research figures compiled by independent monitoring groups, early adopters of these standardized protocols have achieved a 24% reduction in cross-border friction while improving audit transparency across all active operational nodes.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-serif font-bold text-gray-900 pt-2 border-b border-gray-100 pb-0.5">
                      Implementation Timeline & Sector Forecast
                    </h3>
                    <p>
                      Equity markets and venture monitors responded positively to the announcement, with sectoral indexes gaining ground as inventory and compliance bottlenecks resolve. Primary stakeholders emphasize that sustained long-term growth will depend on consistent regulatory alignment.
                    </p>
                    <p>
                      As execution moves into its next operational phase, executive leadership teams are maintaining close oversight over capital expenditure schedules and technical integration milestones.
                    </p>
                  </div>
                </div>

                <div className="pt-4 text-xs text-gray-400 font-sans border-t border-gray-100 flex items-center justify-between">
                  <span>Reported by {article.author.name}</span>
                  <span>Global Intelligence Desk</span>
                </div>
              </div>

            </div>

          </div>

          {/* RELATED NEWS DECK */}
          <div className="pt-6 border-t border-gray-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900">
                Related News
              </h3>
              <Link
                href={`/${article.category.toLowerCase()}`}
                className="text-xs font-sans font-semibold text-gray-900 hover:underline flex items-center gap-1"
              >
                Explore Category <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200 items-start">
              {relatedArticles.map((rel, idx) => (
                <div
                  key={rel.slug}
                  onClick={() => router.push(`/${rel.category.toLowerCase()}/${rel.slug}`)}
                  className={`group cursor-pointer space-y-2 ${idx !== 0 ? "md:pl-6 pt-4 md:pt-0" : ""}`}
                >
                  <div className="relative w-full h-36 sm:h-40 rounded-none overflow-hidden bg-gray-100 border border-gray-100">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="text-[10px] font-sans text-gray-500 uppercase font-semibold">
                      {rel.category} • {rel.date}
                    </div>

                    <h4 className="font-serif font-bold text-sm text-gray-900 group-hover:underline line-clamp-2 leading-snug">
                      {rel.title}
                    </h4>

                    <p className="text-xs text-gray-600 line-clamp-2 leading-normal">
                      {rel.shortdescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
