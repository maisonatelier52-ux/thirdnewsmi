"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-950 border-t border-gray-800 text-gray-400 py-12 text-xs font-mono mt-12 sm:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Grid: Brand Info + 3 Categorized Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-gray-800">
          
          {/* Brand Info (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white tracking-wider">
                DOMAIN NAME
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-xs">
              The premier global journal for macroeconomic intelligence, deep tech analysis, geopolitical accords, and architectural design commentary.
            </p>
          </div>

          {/* COLUMN 1: COMPANY (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider mb-2 text-xs">
              COMPANY
            </div>
            <ul className="space-y-2 text-sm font-sans font-semibold text-gray-200">
              <li><Link href="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms And Conditions</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Legal</Link></li>
              <li><Link href="/ownership-and-funding" className="hover:text-white transition-colors">Ownership & Funding</Link></li>
              <li><Link href="/right-of-reply-policy" className="hover:text-white transition-colors">Right of Reply Policy</Link></li>
            </ul>
          </div>

          {/* COLUMN 2: POLICIES (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider mb-2 text-xs">
              POLICIES
            </div>
            <ul className="space-y-2 text-sm font-sans font-semibold text-gray-200">
              <li><Link href="/editorial-policy" className="hover:text-white transition-colors">Editorial Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/source-methodology" className="hover:text-white transition-colors">Source Methodology</Link></li>
              <li><Link href="/advertising-and-sponsored-policy" className="hover:text-white transition-colors">Advertising & Sponsored Policy</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Faq</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SECTIONS (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider mb-2 text-xs">
              SECTIONS
            </div>
            <ul className="space-y-2 text-sm font-sans font-semibold text-gray-200">
              <li><Link href="/business" className="hover:text-white transition-colors">Business</Link></li>
              <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link href="/world" className="hover:text-white transition-colors">World</Link></li>
              <li><Link href="/design" className="hover:text-white transition-colors">Design</Link></li>
              <li><Link href="/science" className="hover:text-white transition-colors">Science</Link></li>
              <li><Link href="/culture" className="hover:text-white transition-colors">Culture</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-[11px]">
          <div>
            © 2026 DOMAIN NAME MEDIA CORP. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 transition-colors shadow-2xs cursor-pointer"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5 text-red-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}

