"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      categoryTag="PRIVACY & DATA SAFEGUARDS"
      title="Privacy Policy"
      effectiveDate="JANUARY 2026"
      subtitle="Data protection standards, reader privacy rights, and security disclosures."
      activePath="/privacy-policy"
    >
      <div className="space-y-6">
        <p>
          Domain Name respects reader privacy and is committed to protecting personal data collected through our digital publication platform.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Information We Collect
        </h2>
        <p>
          We collect minimal personal information, such as email addresses provided voluntarily for newsletter subscriptions. Anonymous usage telemetry is processed solely to improve website performance and reading experience.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Data Sharing & Security
        </h2>
        <p>
          We do not sell, rent, or trade subscriber email addresses or personal reader data to third-party brokers. Industry-standard encryption protocols safeguard all stored data.
        </p>
      </div>
    </PolicyLayout>
  );
}
