"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllArticles, getAllAuthors } from "@/lib/dataLoader";
import { Article } from "@/types/article";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, ShieldCheck, Newspaper, Users, Award, ExternalLink } from "lucide-react";

export default function TeamPage() {
  const router = useRouter();
  const allArticles = getAllArticles();
  const authors = getAllAuthors();
  const [selectedRoleFilter, setSelectedRoleFilter] = useState("all");

  const handleSelectCategory = (catId: string) => {
    if (catId === "all") {
      router.push("/");
    } else {
      router.push(`/${catId}`);
    }
  };

  const handleOpenArticle = (art: Article) => {
    router.push(`/${art.category.toLowerCase()}/${art.slug}`);
  };

  // Filter roles dynamically or categorize authors into desks
  const roleFilters = [
    { id: "all", label: "All Newsroom Staff" },
    { id: "lead", label: "Editorial & Strategy" },
    { id: "tech", label: "Technology & Science" },
    { id: "culture", label: "Culture & Design" },
  ];

  const filteredAuthors = authors.filter((author) => {
    if (selectedRoleFilter === "all") return true;
    const roleLower = author.role.toLowerCase();
    if (selectedRoleFilter === "lead") {
      return roleLower.includes("editor") || roleLower.includes("lead") || roleLower.includes("analyst") || roleLower.includes("strategist");
    }
    if (selectedRoleFilter === "tech") {
      return roleLower.includes("science") || roleLower.includes("software") || roleLower.includes("genomics") || roleLower.includes("tech");
    }
    if (selectedRoleFilter === "culture") {
      return roleLower.includes("critic") || roleLower.includes("essayist") || roleLower.includes("architecture");
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-red-700 selection:text-white font-sans">
      <Header
        onSelectCategory={handleSelectCategory}
        articles={allArticles}
        onOpenArticle={handleOpenArticle}
      />

      <main className="flex-1 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 py-8 md:py-12 w-full space-y-12">
        {/* Page Hero Header */}
        <div className="border-b border-gray-200 pb-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-red-700">
            <Users className="w-4 h-4" /> NEWSROOM ROSTER & JOURNALISTS
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 font-serif">
            Our Editorial Team
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Meet the independent reporters, domain analysts, and correspondents delivering 
            rigorous coverage across technology, global affairs, economics, science, and design.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-gray-950 text-white border border-gray-800 shadow-xl">
          <div className="space-y-1 border-r border-gray-800 pr-4">
            <div className="flex items-center gap-1.5 text-xs font-mono text-red-400 font-bold uppercase">
              <Users className="w-3.5 h-3.5" /> Staff Members
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{authors.length}</div>
            <div className="text-[11px] text-gray-400">Dedicated Specialists</div>
          </div>
          <div className="space-y-1 border-r border-gray-800 pr-4 pl-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-red-400 font-bold uppercase">
              <Newspaper className="w-3.5 h-3.5" /> Published Stories
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">{allArticles.length}</div>
            <div className="text-[11px] text-gray-400">In-Depth News Stories</div>
          </div>
          <div className="space-y-1 border-r border-gray-800 pr-4 pl-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-red-400 font-bold uppercase">
              <Award className="w-3.5 h-3.5" /> Global Bureaus
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">6</div>
            <div className="text-[11px] text-gray-400">Coverage Desks</div>
          </div>
          <div className="space-y-1 pl-2">
            <div className="flex items-center gap-1.5 text-xs font-mono text-red-400 font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5" /> Accuracy Standard
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">100%</div>
            <div className="text-[11px] text-gray-400">Multi-Source Fact Check</div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200 no-scrollbar">
          {roleFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedRoleFilter(filter.id)}
              className={`px-4 py-2 text-xs font-mono rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                selectedRoleFilter === filter.id
                  ? "bg-red-700 text-white font-bold shadow-xs"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Author Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAuthors.map((author) => {
            const authorArticles = allArticles.filter(
              (art) => art.author && art.author.slug.toLowerCase() === author.slug.toLowerCase()
            );

            return (
              <div
                key={author.slug}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-200 hover:border-red-700/50 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Avatar & Basic Info Header */}
                  <div className="flex items-start gap-4">
                    <Link
                      href={`/author/${author.slug}`}
                      className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-200 shrink-0 transition-colors"
                    >
                      <Image
                        src={author.image}
                        alt={author.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="space-y-1">
                      <Link
                        href={`/author/${author.slug}`}
                        className="text-lg font-bold text-gray-900 group-hover:text-red-700 group-hover:underline group-hover:decoration-1 transition-colors flex items-center gap-1.5 font-serif"
                      >
                        {author.name}
                      </Link>
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wide bg-gray-100 text-gray-700 rounded border border-gray-200">
                        {author.role}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                    {author.bio}
                  </p>

                  {/* Stats badge & Email Link */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs font-mono text-gray-500">
                    <span className="flex items-center gap-1">
                      <Newspaper className="w-3.5 h-3.5 text-red-700" />
                      <strong className="text-gray-900">{authorArticles.length}</strong> news articles
                    </span>

                    <a
                      href={`mailto:${author.email}`}
                      className="flex items-center gap-1 text-red-700 hover:text-red-800 hover:underline hover:decoration-1 font-bold transition-colors"
                      title={`Email ${author.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" /> Email
                    </a>
                  </div>
                </div>

                {/* Card Footer CTA Button */}
                <div className="pt-5 mt-4 border-t border-gray-100">
                  <Link
                    href={`/author/${author.slug}`}
                    className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-red-700 text-gray-800 hover:text-white font-mono text-xs font-bold border border-gray-200 hover:border-red-700 transition-all group-hover:shadow-xs"
                  >
                    <span>View Profile & News</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Standards Box */}
        <div className="p-6 md:p-8 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-700 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> JOURNALISTIC FREEDOM & ETHICS POLICY
          </div>
          <h3 className="text-xl font-bold text-gray-900 font-serif">
            Editorial Autonomy Statement
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
            Every author and correspondent listed on this team page maintains complete independence 
            from commercial sponsors, political entities, and external influence. All reporting is subject to double-blind source verification and factual auditing prior to publication.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono font-bold text-gray-700">
            <Link href="/editorial-policy" className="hover:text-red-700 flex items-center gap-1 underline underline-offset-4">
              Read Editorial Policy <ExternalLink className="w-3 h-3" />
            </Link>
            <Link href="/source-methodology" className="hover:text-red-700 flex items-center gap-1 underline underline-offset-4">
              Source Methodology <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
