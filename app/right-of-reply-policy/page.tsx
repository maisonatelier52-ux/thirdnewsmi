"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function RightOfReplyPage() {
  return (
    <PolicyLayout
      categoryTag="EDITORIAL ETHICS"
      title="Right of Reply Policy"
      effectiveDate="JANUARY 2026"
      subtitle="Protocol for submitting formal response statements to investigative news reports."
      activePath="/right-of-reply-policy"
    >
      <div className="space-y-6">
        <p>
          Domain Name is committed to fair, balanced reporting. When an investigative inquiry or report includes critical assertions regarding individuals, companies, or institutions, we provide a reasonable opportunity to respond prior to publication.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Submitting a Reply
        </h2>
        <p>
          If you or your organization believe you are affected by an assertion published in our reporting, you may submit a formal Right of Reply statement to our editorial team.
        </p>

        <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 pt-4 border-b border-gray-100 pb-2">
          Review Protocol
        </h2>
        <p>
          Submitted statements are reviewed by senior editors for factual accuracy and relevance. Where appropriate, verified reply statements will be published alongside or integrated into the original news report.
        </p>
      </div>
    </PolicyLayout>
  );
}
