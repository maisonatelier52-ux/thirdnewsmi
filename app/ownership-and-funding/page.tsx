"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function OwnershipAndFundingPage() {
  return (
    <PolicyLayout
      categoryTag="CORPORATE TRANSPARENCY"
      title="Ownership & Funding"
      effectiveDate="JANUARY 2026"
      subtitle="Complete transparency disclosure regarding corporate structure and financial model."
      activePath="/ownership-and-funding"
    >
      <div className="space-y-6">
        <p>
          Domain Name believes in complete transparency regarding corporate ownership, financial funding, and revenue streams.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Ownership Structure
        </h2>
        <p>
          Domain Name is owned and operated by an independent media organization. No single commercial entity, political group, or government body holds a controlling financial interest in our publication.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Revenue Sources
        </h2>
        <p>
          Our journalism is funded primarily through reader subscriptions, direct advertising, and editorial syndication. Commercial sponsors have zero input or influence over editorial decisions or article publishing schedules.
        </p>
      </div>
    </PolicyLayout>
  );
}
