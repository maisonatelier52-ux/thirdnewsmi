"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function SourceMethodologyPage() {
  return (
    <PolicyLayout
      categoryTag="INVESTIGATIVE PROTOCOLS"
      title="Source Methodology"
      effectiveDate="JANUARY 2026"
      subtitle="Verification standards, data sourcing rigor, and anonymous source protection protocols."
      activePath="/source-methodology"
    >
      <div className="space-y-6">
        <p>
          Our investigative reporting and intelligence dispatches rely on rigorous sourcing protocols designed to maintain absolute factual authority.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Primary Data & Official Records
        </h2>
        <p>
          Whenever reporting on regulatory shifts, financial benchmarks, or technical breakthroughs, we cross-reference primary sources—including regulatory filings, court transcripts, peer-reviewed journals, and official corporate disclosures.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Anonymous Sources Protocol
        </h2>
        <p>
          Anonymous sourcing is granted only when information cannot be obtained through open records and the source faces personal or professional jeopardy. Anonymous assertions require independent confirmation by at least two separate verified sources.
        </p>
      </div>
    </PolicyLayout>
  );
}
