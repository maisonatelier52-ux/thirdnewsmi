"use client";

import PolicyLayout from "@/components/PolicyLayout";

export default function FAQPage() {
  const faqs = [
    {
      question: "How often is Domain Name updated?",
      answer: "Our newsroom publishes daily news updates, market analyses, and investigative reports continuously throughout the week.",
    },
    {
      question: "Is Domain Name free to read?",
      answer: "All core news articles, category feeds, and breaking dispatches are freely available. Premium executive briefings are available via newsletter subscription.",
    },
    {
      question: "How can I submit a news tip or press release?",
      answer: "You can submit tips, press releases, or inquiries through our Contact Us page form or directly via email to newsroom@domainname.com.",
    },
    {
      question: "Can I syndicate Domain Name content?",
      answer: "Commercial syndication requires prior written approval from our licensing desk. Personal sharing with proper attribution and direct backlinks is encouraged.",
    },
  ];

  return (
    <PolicyLayout
      categoryTag="READER HELP DESK"
      title="Frequently Asked Questions"
      subtitle="Answers to common questions about our publication, coverage, and subscriptions."
      activePath="/faq"
    >
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="space-y-2 pb-6 border-b border-gray-100 last:border-b-0">
            <h3 className="text-lg font-serif font-bold text-gray-900">
              {faq.question}
            </h3>
            <p className="text-sm font-sans text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </PolicyLayout>
  );
}
