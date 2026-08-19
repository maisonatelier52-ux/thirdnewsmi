"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 text-gray-600 py-12 text-xs font-mono mt-12 sm:mt-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 space-y-10">
        
        {/* Main Grid: Brand Info + 3 Categorized Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-gray-200">
          
          {/* Brand Info (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-gray-900 tracking-wider font-mono">
                DOMAIN NAME
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-sans max-w-xs">
              The premier global journal for macroeconomic intelligence, deep tech analysis, geopolitical accords, and architectural design commentary.
            </p>
          </div>

          {/* COLUMN 1: COMPANY (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-gray-900 font-bold uppercase tracking-wider mb-2 text-xs font-mono">
              COMPANY
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-sans font-semibold text-gray-700">
              <li><Link href="/about-us" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Contact</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Terms And Conditions</Link></li>
              <li><Link href="/legal" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Legal</Link></li>
              <li><Link href="/ownership-and-funding" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Ownership & Funding</Link></li>
              <li><Link href="/right-of-reply-policy" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Right of Reply Policy</Link></li>
            </ul>
          </div>

          {/* COLUMN 2: POLICIES (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-gray-900 font-bold uppercase tracking-wider mb-2 text-xs font-mono">
              POLICIES
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-sans font-semibold text-gray-700">
              <li><Link href="/editorial-policy" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Editorial Policy</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/source-methodology" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Source Methodology</Link></li>
              <li><Link href="/advertising-and-sponsored-policy" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Advertising & Sponsored Policy</Link></li>
              <li><Link href="/faq" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Faq</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SECTIONS (2 Cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-gray-900 font-bold uppercase tracking-wider mb-2 text-xs font-mono">
              SECTIONS
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-sans font-semibold text-gray-700">
              <li><Link href="/business" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Business</Link></li>
              <li><Link href="/technology" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Technology</Link></li>
              <li><Link href="/world" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">World</Link></li>
              <li><Link href="/design" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Design</Link></li>
              <li><Link href="/science" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Science</Link></li>
              <li><Link href="/culture" className="hover:text-red-700 hover:underline hover:decoration-1 transition-colors">Culture</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[11px]">
          <div>
            © 2026 DOMAIN NAME MEDIA CORP. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-gray-200 text-gray-800 border border-gray-300 transition-colors shadow-2xs cursor-pointer font-mono font-bold"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5 text-red-700" />
          </button>
        </div>

      </div>
    </footer>
  );
}
