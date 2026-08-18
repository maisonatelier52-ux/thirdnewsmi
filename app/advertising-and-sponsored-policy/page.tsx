"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function AdvertisingPolicyPage() {
  return (
    <PolicyLayout
      categoryTag="COMMERCIAL STANDARDS"
      title="Advertising & Sponsored Policy"
      effectiveDate="JANUARY 2026"
      subtitle="Strict boundaries and transparency guidelines governing advertising and sponsored content."
      activePath="/advertising-and-sponsored-policy"
    >
      <div className="space-y-6">
        <p>
          Domain Name maintains strict boundaries between commercial advertising partnerships and news reporting.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Clear Disclosure & Labeling
        </h2>
        <p>
          All sponsored articles, paid commercial features, or partner content are clearly labeled with prominent disclosures such as &quot;SPONSORED CONTENT&quot; or &quot;COMMERCIAL PARTNER.&quot;
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Editorial Independence
        </h2>
        <p>
          Advertisers and corporate sponsors have no editorial oversight, advance review privileges, or influence over our newsroom&apos;s coverage decisions.
        </p>
      </div>
    </PolicyLayout>
  );
}
