"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function LegalPage() {
  return (
    <PolicyLayout
      categoryTag="REGULATORY COMPLIANCE"
      title="Legal Notice"
      effectiveDate="JANUARY 2026"
      subtitle="Regulatory disclosures and copyright governance framework."
      activePath="/legal"
    >
      <div className="space-y-6">
        <p>
          This page sets forth the legal disclosures and regulatory compliance frameworks governing Domain Name and its publishing entity.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Copyright & Trademarks
        </h2>
        <p>
          &quot;Domain Name&quot; and associated publication marks are registered editorial property. All rights are reserved under international copyright conventions.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Financial & Investment Disclaimer
        </h2>
        <p>
          No reporting published on Domain Name constitutes formal financial, investment, legal, or tax advice. Market analysis represents independent journalist commentary.
        </p>
      </div>
    </PolicyLayout>
  );
}
