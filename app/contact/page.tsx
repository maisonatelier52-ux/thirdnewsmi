"use client";

import { useState } from "react";
import PolicyLayout from "@/components/PolicyLayout";
import { Send, CheckCircle2, Mail, Newspaper, Shield, FileSpreadsheet } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <PolicyLayout
      categoryTag="NEWSROOM & DIRECTORIES"
      title="Contact Us"
      subtitle="Connect directly with our editorial newsroom, press desk, or administrative teams."
      activePath="/contact"
    >
      <div className="space-y-8">
        
        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 border border-gray-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-900">
              <Newspaper className="w-4 h-4 text-red-700" />
              <span>Editorial Newsroom</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              For story pitches, press releases, breaking news tips, and investigative leads.
            </p>
            <a href="mailto:newsroom@domainname.com" className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-900 font-bold hover:underline pt-1">
              <Mail className="w-3.5 h-3.5" />
              <span>newsroom@domainname.com</span>
            </a>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-900">
              <Shield className="w-4 h-4 text-red-700" />
              <span>Press & Media Desk</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Official press inquiries, interview requests, and institutional statements.
            </p>
            <a href="mailto:press@domainname.com" className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-900 font-bold hover:underline pt-1">
              <Mail className="w-3.5 h-3.5" />
              <span>press@domainname.com</span>
            </a>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-900">
              <FileSpreadsheet className="w-4 h-4 text-red-700" />
              <span>Licensing & Syndication</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Article republication rights, content licensing, and commercial syndication.
            </p>
            <a href="mailto:licensing@domainname.com" className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-900 font-bold hover:underline pt-1">
              <Mail className="w-3.5 h-3.5" />
              <span>licensing@domainname.com</span>
            </a>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-gray-900">
              <Mail className="w-4 h-4 text-red-700" />
              <span>Reader Support</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Subscription inquiries, technical support, newsletter assistance, and general feedback.
            </p>
            <a href="mailto:support@domainname.com" className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-900 font-bold hover:underline pt-1">
              <Mail className="w-3.5 h-3.5" />
              <span>support@domainname.com</span>
            </a>
          </div>
        </div>

        {/* Contact Form Header */}
        <div className="pt-4 border-t border-gray-200 space-y-2">
          <h2 className="text-xl font-serif font-bold text-gray-900">
            Send an Editorial Message
          </h2>
          <p className="text-xs text-gray-600">
            Submit a message directly to our editorial team using the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 border border-gray-200 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-mono font-bold uppercase text-gray-700">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Your full name..."
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-xs font-sans text-gray-900 outline-none focus:border-gray-900 transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono font-bold uppercase text-gray-700">Email Address *</label>
              <input
                type="email"
                required
                placeholder="your.email@domain.com"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-xs font-sans text-gray-900 outline-none focus:border-gray-900 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono font-bold uppercase text-gray-700">Department / Topic *</label>
            <select
              required
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-xs font-sans text-gray-900 outline-none focus:border-gray-900 transition-colors cursor-pointer"
            >
              <option value="newsroom">Newsroom Pitch & Story Leads</option>
              <option value="press">Press & Media Inquiry</option>
              <option value="correction">Editorial Correction / Right of Reply</option>
              <option value="syndication">Licensing & Syndication</option>
              <option value="support">Subscription & Reader Support</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono font-bold uppercase text-gray-700">Subject *</label>
            <input
              type="text"
              required
              placeholder="Brief topic title..."
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-xs font-sans text-gray-900 outline-none focus:border-gray-900 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono font-bold uppercase text-gray-700">Message Details *</label>
            <textarea
              rows={5}
              required
              placeholder="Provide complete details regarding your inquiry..."
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-xs font-sans text-gray-900 outline-none focus:border-gray-900 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-900 hover:bg-black text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs active:scale-98"
          >
            <span>Submit Message</span>
            <Send className="w-3.5 h-3.5" />
          </button>

          {submitted && (
            <div className="p-3.5 bg-gray-900 text-white text-xs font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-white" />
              <span>Thank you for contacting Domain Name! Your message has been received by our desk.</span>
            </div>
          )}
        </form>
      </div>
    </PolicyLayout>
  );
}
