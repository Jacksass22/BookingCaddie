"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Phone, MessageSquare, Settings, Users } from "lucide-react";
import { VapiChat } from "@/components/VapiChat";

const faqCategories = [
  {
    id: "general",
    label: "General",
    icon: MessageSquare,
  },
  {
    id: "technology",
    label: "Technology",
    icon: Settings,
  },
  {
    id: "setup",
    label: "Setup",
    icon: Phone,
  },
  {
    id: "operations",
    label: "Operations",
    icon: Users,
  },
  {
    id: "askAI",
    label: "Ask AI",
    icon: null,
  },
];

const faqs = [
  {
    category: "general",
    question: "What exactly is BookingCaddie?",
    answer:
      "BookingCaddie is an AI-powered voice receptionist built exclusively for golf courses. It handles incoming calls, books tee times, answers questions, manages cancellations, and handles rebookings — all automatically, 24 hours a day. Think of it as a tireless front desk assistant that never misses a call.",
  },
  {
    category: "general",
    question: "How is this different from a traditional answering service?",
    answer:
      "Traditional answering services use human operators who take messages. BookingCaddie actually completes the booking in real-time. It connects directly to your tee sheet, checks live availability, and confirms reservations instantly. Golfers get immediate service instead of waiting for a callback.",
  },
  {
    category: "general",
    question: "Who is BookingCaddie designed for?",
    answer:
      "BookingCaddie works for any golf operation — public courses, private clubs, resorts, and multi-course management groups. Whether you're a small municipal course or a 36-hole resort, the system adapts to your booking rules, member policies, and operational needs.",
  },
  {
    category: "general",
    question: "Will this replace my pro shop staff?",
    answer:
      "No — and that's not the goal. BookingCaddie handles the repetitive phone work so your team can focus on what matters: welcoming golfers in person, improving the on-course experience, and running operations. It's about working smarter, not cutting corners.",
  },
  {
    category: "technology",
    question: "How does the AI Voice Receptionist actually work?",
    answer:
      "When a golfer calls, our AI answers naturally — no robotic menus or \"press 1 for...\" prompts. It understands context, recognizes returning callers, answers questions about your course, checks real-time availability, and books tee times on the spot. The conversation flows like talking to a knowledgeable staff member.",
  },
  {
    category: "technology",
    question: "Can golfers still book through our website?",
    answer:
      "Absolutely. BookingCaddie supports both phone and web bookings. Whether a golfer calls, uses your website, or chats online, all reservations flow into the same system. Your tee sheet stays perfectly synchronized across all channels.",
  },
  {
    category: "technology",
    question: "What's the difference between AI booking and managing it manually?",
    answer:
      "Manual booking means staff answering phones, checking availability, entering reservations, and following up on cancellations — all during business hours. AI booking automates this around the clock. No missed calls at 6am when someone wants an early tee time. No voicemails piling up during a busy Saturday morning.",
  },
  {
    category: "technology",
    question: "Does BookingCaddie integrate with my current tee sheet?",
    answer:
      "Yes. We connect directly with all major tee sheet platforms — Lightspeed, ForeUP, Teesnap, GolfNow, Chronogolf, Club Prophet, and more. Your existing system stays in place. We simply add an intelligent layer on top that handles phone traffic and syncs everything in real-time.",
  },
  {
    category: "setup",
    question: "How fast can we get started?",
    answer:
      "Most courses go live within 48 hours. We handle the technical integration, configure the AI with your course information, rates, and policies, then flip the switch. No lengthy implementation projects or IT headaches.",
  },
  {
    category: "setup",
    question: "Do we need to change our phone number?",
    answer:
      "Not at all. You keep your existing pro shop number. We set up call forwarding so incoming calls route through BookingCaddie first. To your golfers, nothing changes — except someone always picks up.",
  },
  {
    category: "setup",
    question: "What information do you need from us to get started?",
    answer:
      "We'll need access to your tee sheet system, your rate structure, any booking policies (cancellation windows, prepayment rules, etc.), and basic course information. Our team handles the configuration — you just review and approve.",
  },
  {
    category: "operations",
    question: "Is BookingCaddie available 24/7?",
    answer:
      "Yes. The system never sleeps. Early morning golfers can book a 6am tee time at midnight. Weekend warriors can grab a Saturday slot at 11pm on Thursday. Every call gets answered, every time.",
  },
  {
    category: "operations",
    question: "What happens if a golfer has a complex request the AI can't handle?",
    answer:
      "BookingCaddie handles the vast majority of booking scenarios, but when something unusual comes up — a large tournament request, a billing dispute, or anything that needs a human touch — the call gets flagged and transferred to your staff. You stay in control.",
  },
  {
    category: "operations",
    question: "How does it handle cancellations and rebookings?",
    answer:
      "The AI manages the full booking lifecycle. Golfers can call to cancel, modify their tee time, or rebook — all handled automatically according to your policies. If there's a cancellation fee or restriction, the system enforces it consistently.",
  },
  {
    category: "operations",
    question: "Can it recognize returning golfers?",
    answer:
      "Yes. When a golfer calls from a recognized number, BookingCaddie greets them by name, knows their booking history, and can suggest their usual tee time preferences. It creates a personalized experience that builds loyalty.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState<number[]>([0]);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-navy/30 to-dark-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-accent/5 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Questions?<br />
            <span className="text-gradient-cyan">We&apos;ve got answers.</span>
          </h1>
          <p className="text-xl text-steel max-w-2xl mx-auto">
            Everything you need to know about BookingCaddie and how it can
            transform your golf course operations.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 lg:top-20 z-40 bg-dark-bg/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center overflow-x-auto gap-2 py-4 scrollbar-hide">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenQuestions([0]);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 whitespace-nowrap font-medium transition-all rounded-lg ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-defiant-blue to-cyan-accent text-white"
                    : "bg-white/5 text-steel hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.icon && <cat.icon className="w-4 h-4" />}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List or AI Chat */}
      <section className="py-8 lg:py-12 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory === "askAI" ? (
            <VapiChat />
          ) : (
            /* FAQ Accordion */
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                  >
                    <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-cyan-accent transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        openQuestions.includes(index) ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-cyan-accent" />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openQuestions.includes(index)
                        ? "max-h-96 opacity-100 pb-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-steel leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-defiant-blue/10 via-electric-blue/5 to-cyan-accent/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "24/7", label: "Availability" },
              { value: "48hrs", label: "Setup Time" },
              { value: "100%", label: "Calls Answered" },
              { value: "50%", label: "Less Phone Traffic" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gradient-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-steel">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 section-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-xl text-steel mb-8 max-w-2xl mx-auto">
            Our team is happy to walk you through how BookingCaddie works
            and answer any specific questions about your course.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo" className="btn-primary text-lg px-8 py-4">
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
