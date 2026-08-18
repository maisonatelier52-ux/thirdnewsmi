"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function EditorialPolicyPage() {
  return (
    <PolicyLayout
      categoryTag="NEWSROOM GUIDELINES"
      title="Editorial Policy"
      effectiveDate="JANUARY 2026"
      subtitle="Journalistic ethics, verification standards, and editorial independence."
      activePath="/editorial-policy"
    >
      <div className="space-y-6">
        <p>
          Domain Name adheres to strict ethical standards in news gathering, verification, and reporting. Our journalists operate with complete autonomy, guided by principles of truth, balance, and accountability.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Verification & Fact-Checking
        </h2>
        <p>
          Every claim, dataset, and quoted statement published by Domain Name undergoes multi-source verification. Primary documentation and verified institutional sources are prioritized over unconfirmed speculation.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Corrections & Clarifications
        </h2>
        <p>
          We promptly acknowledge and correct factual errors. When a report is updated or corrected, a clear note detailing the change is appended to the published article.
        </p>
      </div>
    </PolicyLayout>
  );
}
