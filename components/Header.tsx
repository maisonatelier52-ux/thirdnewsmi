"use client";

import { useState } from "react";
import { Search, Radio, X } from "lucide-react";
import { Article } from "@/types/article";

interface HeaderProps {
  onSearchQuery?: (query: string) => void;
  onSelectCategory?: (category: string) => void;
  selectedCategory?: string;
  articles?: Article[];
  onOpenArticle?: (article: Article) => void;
}

export default function Header({
  onSearchQuery,
  onSelectCategory,
  selectedCategory = "all",
  articles = [],
  onOpenArticle,
}: HeaderProps) {
  const [searchVal, setSearchVal] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  const categories = [
    { id: "all", name: "Home" },
    { id: "business", name: "Business" },
    { id: "technology", name: "Technology" },
    { id: "world", name: "World" },
    { id: "design", name: "Design" },
    { id: "science", name: "Science" },
    { id: "culture", name: "Culture" },
  ];

  const searchResults = searchVal.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(searchVal.toLowerCase()) ||
          a.shortdescription.toLowerCase().includes(searchVal.toLowerCase()) ||
          a.category.toLowerCase().includes(searchVal.toLowerCase())
      )
    : [];

  const handleClearSearch = () => {
    setSearchVal("");
    setIsSearchActive(false);
    if (onSearchQuery) onSearchQuery("");
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 shadow-xs">
      {/* Top Red Editorial Ticker Banner */}
      <div className="w-full bg-[#a61919] border-b border-gray-200 text-xs font-mono py-1 relative overflow-hidden">
        {/* Right Side Diagonal Angled Geometric Slashes - Touches absolute right edge of screen */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none z-0">
          <div className="w-12 sm:w-20 h-full bg-[#c93232] transform -skew-x-[25deg] origin-top-left -mr-4 opacity-90" />
          <div className="w-12 sm:w-20 h-full bg-[#e05656] transform -skew-x-[25deg] origin-top-left -mr-4 opacity-90" />
          <div className="w-12 sm:w-20 h-full bg-[#f48a8a] transform -skew-x-[25deg] origin-top-left -mr-4 opacity-90" />
          <div className="w-12 sm:w-20 h-full bg-[#fce4e4] transform -skew-x-[25deg] origin-top-left opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center bg-transparent text-white h-9 overflow-hidden z-10">
          {/* Left Content Badge - Aligned perfectly with main page container & logo */}
          <div className="flex items-center gap-2 pr-4 z-10 shrink-0 font-bold uppercase tracking-wider bg-[#a61919]">
            <Radio className="w-3.5 h-3.5 animate-pulse text-white" />
            <span className="text-white font-bold text-[11px] tracking-wider">BREAKING NEWS</span>
          </div>

          {/* Marquee Ticker Content with smooth spacing */}
          <div className="overflow-hidden whitespace-nowrap relative flex-1 text-white z-10 font-normal pr-16 sm:pr-24">
            <div className="animate-marquee inline-block">
              <span className="mx-6 text-white font-medium">
                Major Tech Firms Announce Joint AI Safety Initiative in Geneva
              </span>
              <span className="text-red-300">•</span>
              <span className="mx-6 text-white font-medium">
                Semiconductor Supply Chains Reach Equilibrium
              </span>
              <span className="text-red-300">•</span>
              <span className="mx-6 text-white font-medium">
                Quantum Computing 10,000 Qubit Coherence Achieved
              </span>
              <span className="text-red-300">•</span>
              <span className="mx-6 text-white font-medium">
                Subsea Cable Security Treaty Ratified by 140 Nations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding & Inline Action Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Left Side: Brand Logo */}
        <div>
          <a href="/" className="flex items-center gap-2.5 group">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 font-mono">
              Domain Name
            </h1>
          </a>
          <p className="hidden sm:block text-[11px] text-gray-500 font-mono tracking-wide mt-0.5">
            INDEPENDENT GLOBAL JOURNALISM & EXECUTIVE BRIEFINGS
          </p>
        </div>

        {/* Right Side: Interactive Direct Inline Search Box */}
        <div className="relative flex items-center">
          <div className="relative flex items-center w-56 sm:w-72 md:w-80 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-150 border border-gray-200 focus-within:border-red-700 focus-within:bg-white focus-within:ring-1 focus-within:ring-red-700 transition-all">
            <Search className="w-4 h-4 text-gray-400 shrink-0 mr-2" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchVal}
              onFocus={() => setIsSearchActive(true)}
              onChange={(e) => {
                setSearchVal(e.target.value);
                setIsSearchActive(true);
                if (onSearchQuery) onSearchQuery(e.target.value);
              }}
              className="w-full bg-transparent text-xs text-gray-900 outline-none placeholder:text-gray-400 font-mono"
            />
            {searchVal && (
              <button
                onClick={handleClearSearch}
                className="p-1 text-gray-400 hover:text-gray-700 shrink-0 transition-colors"
                title="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Search Dropdown Results List (Only visible when typing) */}
          {isSearchActive && searchVal.trim() && (
            <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-xl bg-white border border-gray-200 shadow-2xl p-3 z-50">
              <div className="flex items-center justify-between px-2 pb-2 mb-2 border-b border-gray-100 text-[11px] font-mono text-gray-500">
                <span>SEARCH RESULTS ({searchResults.length})</span>
                <button
                  onClick={handleClearSearch}
                  className="flex items-center gap-1 text-red-700 hover:text-red-800 font-bold"
                >
                  Close <X className="w-3 h-3" />
                </button>
              </div>

              <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                {searchResults.length > 0 ? (
                  searchResults.map((item) => (
                    <div
                      key={item.slug}
                      onClick={() => {
                        if (onOpenArticle) onOpenArticle(item);
                        setIsSearchActive(false);
                      }}
                      className="p-2.5 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 cursor-pointer transition-all"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-1">
                        <span className="uppercase">{item.category}</span>
                        <span>{item.date}</span>
                      </div>
                      <div className="text-xs font-semibold text-gray-900 line-clamp-1">
                        {item.title}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-xs text-gray-500 font-mono">
                    No news found matching &quot;{searchVal}&quot;
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Category Bar */}
      <div className="w-full border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-5 overflow-x-auto py-2.5 no-scrollbar scroll-smooth">
            {categories.map((cat, idx) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                  className={`relative cursor-pointer ${idx === 0 ? "pl-0 pr-2" : "px-2"} py-1 text-xs font-mono transition-all whitespace-nowrap ${
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <span className={`absolute bottom-0 ${idx === 0 ? "left-0 right-1/2" : "left-1/4 right-1/4"} h-[2px] bg-black`} />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
