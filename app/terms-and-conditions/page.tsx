"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function TermsPage() {
  return (
    <PolicyLayout
      categoryTag="LEGAL TERMS"
      title="Terms And Conditions"
      effectiveDate="JANUARY 2026"
      subtitle="Standard legal agreements and usage rules governing Domain Name platform access."
      activePath="/terms-and-conditions"
    >
      <div className="space-y-6">
        <p>
          Welcome to Domain Name. By accessing our website, applications, and services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          1. Intellectual Property
        </h2>
        <p>
          All content published on Domain Name, including text, graphics, logos, articles, and media, is protected by copyright and intellectual property laws. Unauthorized reproduction or redistribution is prohibited.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          2. Permitted Use
        </h2>
        <p>
          You may view, share, and link to our published articles for personal, non-commercial purposes. Commercial syndication or automated scraping without written permission is strictly prohibited.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          3. Disclaimer of Liability
        </h2>
        <p>
          While we strive for accuracy, Domain Name provides news content for informational purposes only. We are not liable for actions taken based on published market reports or opinion commentary.
        </p>
      </div>
    </PolicyLayout>
  );
}
