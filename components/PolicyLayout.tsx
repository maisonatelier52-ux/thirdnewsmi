"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAllArticles } from "@/lib/dataLoader";
import { ArrowRight, ShieldCheck, FileText } from "lucide-react";

interface PolicyLayoutProps {
  categoryTag?: string;
  title: string;
  subtitle: string;
  effectiveDate?: string;
  activePath: string;
  children: React.ReactNode;
}

const policyLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact" },
  { name: "Editorial Policy", href: "/editorial-policy" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms And Conditions", href: "/terms-and-conditions" },
  { name: "Legal Notice", href: "/legal" },
  { name: "Ownership & Funding", href: "/ownership-and-funding" },
  { name: "Right of Reply Policy", href: "/right-of-reply-policy" },
  { name: "Source Methodology", href: "/source-methodology" },
  { name: "Advertising & Sponsored Policy", href: "/advertising-and-sponsored-policy" },
  { name: "Frequently Asked Questions", href: "/faq" },
];

export default function PolicyLayout({
  categoryTag = "OFFICIAL DISCLOSURE",
  title,
  subtitle,
  effectiveDate,
  activePath,
  children,
}: PolicyLayoutProps) {
  const router = useRouter();
  const allArticles = getAllArticles();

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col selection:bg-red-700 selection:text-white">
      <Header
        selectedCategory=""
        onSelectCategory={(catId) => router.push(catId === "all" ? "/" : `/${catId}`)}
        articles={allArticles}
        onOpenArticle={(art) => router.push(`/${art.category.toLowerCase()}/${art.slug}`)}
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT MAIN CONTENT COLUMN (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Masthead Header Tag */}
            <div className="space-y-2 pb-6 border-b border-gray-200">
              <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-gray-400 font-bold uppercase">
                <span>{categoryTag}</span>
                {effectiveDate && <span>UPDATED: {effectiveDate}</span>}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
                {title}
              </h1>

              <p className="text-sm sm:text-base font-sans text-gray-600 leading-relaxed pt-1">
                {subtitle}
              </p>
            </div>

            {/* Page Body Content */}
            <div className="font-sans text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
              {children}
            </div>

          </div>

          {/* RIGHT EDITORIAL SIDEBAR (4 COLS) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-[160px]">
            
            {/* Quick Directory Card */}
            <div className="p-5 bg-gray-50 border border-gray-200 space-y-4 shadow-2xs">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200 text-gray-900">
                <FileText className="w-4 h-4 text-red-700" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider">
                  Company & Policies Directory
                </h3>
              </div>

              <ul className="space-y-1 text-xs font-sans">
                {policyLinks.map((link) => {
                  const isActive = link.href === activePath;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between p-2 transition-all ${
                          isActive
                            ? "bg-gray-900 text-white font-bold"
                            : "text-gray-700 hover:bg-gray-200/70 hover:text-gray-900"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <ArrowRight className="w-3 h-3 text-white" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Verification Card */}
            <div className="p-4 bg-white border border-gray-200 space-y-2 text-xs font-sans text-gray-600 shadow-2xs">
              <div className="flex items-center gap-1.5 text-gray-900 font-bold font-serif text-sm">
                <ShieldCheck className="w-4 h-4 text-red-700" />
                <span>Editorial Commitment</span>
              </div>
              <p className="leading-relaxed">
                Domain Name maintains standard journalistic verification protocols across all reporting, dispatches, and corporate disclosures.
              </p>
            </div>

          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
