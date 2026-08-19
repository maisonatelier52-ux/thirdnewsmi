"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function AboutUsPage() {
  return (
    <PolicyLayout
      categoryTag="COMPANY OVERVIEW"
      title="About Us"
      subtitle="Independent global journalism, deep technical reporting, and strategic intelligence."
      activePath="/about-us"
    >
      <div className="space-y-6">
        <p className="text-base text-gray-800 leading-relaxed font-serif">
          Founded as an independent editorial publication, <strong className="font-semibold text-gray-900">Domain Name</strong> delivers high-integrity reporting across macroeconomic policy, artificial intelligence, semiconductor economics, global trade, and architectural design.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Our Editorial Mission
        </h2>
        <p>
          We adhere to strict standards of verification and factual accuracy. Our international network of analysts and field correspondents investigates complex technological and financial developments, presenting clear and actionable analysis without sensationalism.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Independence & Standards
        </h2>
        <p>
          Our newsroom operates with total editorial autonomy. We maintain a strict separation between commercial operations and journalistic reporting to ensure uncompromised objectivity in every news story we publish.
        </p>

        <div className="p-4 bg-gray-50 border-l-2 border-gray-900 text-xs font-mono text-gray-600 mt-6">
          JOURNALISTIC INTEGRITY GUARANTEE • ALL ARTICLES GO THROUGH DOUBLE FACT-CHECK VERIFICATION PRIOR TO PUBLICATION.
        </div>
      </div>
    </PolicyLayout>
  );
}
