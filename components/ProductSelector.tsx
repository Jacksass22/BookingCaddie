"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Calendar,
  Bell,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Product {
  id: string;
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  ctaHref: string;
}

const products: Product[] = [
  {
    id: "voice",
    icon: Phone,
    label: "AI Voice Receptionist",
    title: "AI Voice Receptionist",
    description:
      "Your course's phone — answered automatically, 24/7. BookingCaddie handles tee times, cancellations, questions, and waitlists just like a trained staff member.",
    bullets: [
      "Answers calls instantly, day or night",
      "Books tee times via natural conversation",
      "Handles cancellations and rebooks automatically",
      "Recognizes returning golfers",
      "Integrates directly with your tee sheet",
    ],
    cta: "How It Works",
    ctaHref: "/solutions#voice",
  },
  {
    id: "chatbot",
    icon: MessageSquare,
    label: "Website Chatbot",
    title: "Website Chatbot",
    description:
      "For golfers browsing your site instead of calling, BookingCaddie provides instant chat assistance — powered by the same intelligence as your voice receptionist.",
    bullets: [
      "Answers booking questions instantly",
      "Guides users to call or book online",
      "Knows course rules, pricing, hours",
      "Zero configuration required",
      "Seamless handoff to voice when needed",
    ],
    cta: "Learn More",
    ctaHref: "/solutions#chatbot",
  },
  {
    id: "booking",
    icon: Calendar,
    label: "Booking System",
    title: "Booking System / CRM",
    description:
      "A modern booking experience designed to work seamlessly with your voice system. Everything connects — calls, chats, and online bookings in one place.",
    bullets: [
      "Mobile-friendly booking interface",
      "Live availability sync",
      "Prepaid tee times support",
      "Booking history tied to phone interactions",
      "Customer profiles built automatically",
    ],
    cta: "See Features",
    ctaHref: "/solutions#booking",
  },
  {
    id: "reminders",
    icon: Bell,
    label: "Smart Reminders",
    title: "Smart Reminders & Follow-Ups",
    description:
      "Automated confirmations and reminders that reduce no-shows without staff involvement. Protect your revenue while your team focuses on hospitality.",
    bullets: [
      "SMS & email confirmations",
      "Day-before reminders",
      "Weather notifications",
      "One-tap cancellation handling",
      "Automatic waitlist management",
    ],
    cta: "Explore",
    ctaHref: "/solutions#reminders",
  },
];

export function ProductSelector() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <section className="py-16 lg:py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-lg text-steel max-w-2xl mx-auto">
            One platform built specifically for golf courses. The voice AI is
            the core — everything else supports it.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {products.map((product) => {
            const Icon = product.icon;
            const isActive = activeProduct.id === product.id;

            return (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`
                  relative flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-navy text-cyan-accent shadow-glow-sm border border-cyan-accent/30"
                      : "bg-white/5 text-steel hover:text-white hover:bg-white/10 border border-transparent"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{product.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content area */}
        <div className="glow-card overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-0"
            >
              {/* Left side - Copy */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-defiant-blue to-cyan-accent rounded-lg flex items-center justify-center shadow-glow-sm">
                    <activeProduct.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {activeProduct.title}
                  </h3>
                </div>

                <p className="text-steel text-lg mb-6 leading-relaxed">
                  {activeProduct.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {activeProduct.bullets.map((bullet, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-cyan-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-cyan-accent" />
                      </div>
                      <span className="text-steel-light">{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link
                  href={activeProduct.ctaHref}
                  className="inline-flex items-center gap-2 text-cyan-accent font-semibold hover:text-white transition-colors group"
                >
                  {activeProduct.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right side - Visual */}
              <div className="bg-gradient-to-br from-navy/50 to-acquisition-dark p-8 lg:p-12 flex items-center justify-center min-h-[400px] border-l border-white/5">
                <ProductVisual product={activeProduct} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Visual component for each product
function ProductVisual({ product }: { product: Product }) {
  if (product.id === "voice") {
    return <VoiceVisual />;
  }
  if (product.id === "chatbot") {
    return <ChatbotVisual />;
  }
  if (product.id === "booking") {
    return <BookingVisual />;
  }
  if (product.id === "reminders") {
    return <RemindersVisual />;
  }
  return null;
}

// Voice Receptionist Visual - Phone UI with waveform
function VoiceVisual() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-sm"
    >
      {/* Phone mockup */}
      <div className="bg-dark-bg rounded-3xl p-4 shadow-card-dark border border-white/10">
        {/* Call UI */}
        <div className="bg-navy/50 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-defiant-blue to-cyan-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <p className="text-steel text-sm mb-1">Incoming Call</p>
          <p className="text-white font-semibold text-lg mb-4">Pine Valley Golf Club</p>

          {/* Waveform */}
          <div className="flex items-center justify-center gap-1 h-12 mb-4">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-cyan-accent rounded-full"
                animate={{
                  height: [8, 24, 8],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.08,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Transcript preview */}
          <div className="bg-dark-bg/50 rounded-xl p-4 text-left border border-white/5">
            <p className="text-steel text-xs mb-2">Live Transcript</p>
            <p className="text-steel-light text-sm">
              &quot;Hi, I&apos;d like to book a tee time for Saturday morning,
              maybe around 8am for 4 players...&quot;
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Chatbot Visual
function ChatbotVisual() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-sm"
    >
      <div className="bg-dark-bg rounded-2xl shadow-card-dark border border-white/10 overflow-hidden">
        {/* Chat header */}
        <div className="bg-gradient-to-r from-defiant-blue to-electric-blue px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white font-medium text-sm">BookingCaddie</p>
            <p className="text-white/70 text-xs">Online now</p>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3 bg-navy/30">
          <div className="flex justify-start">
            <div className="bg-charcoal rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] border border-white/5">
              <p className="text-steel-light text-sm">
                Hi! Looking for tee times this weekend?
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-gradient-to-r from-defiant-blue to-electric-blue rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
              <p className="text-white text-sm">
                Yes, Saturday morning for 2 players
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-charcoal rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] border border-white/5">
              <p className="text-steel-light text-sm">
                Great! I have 7:30am and 8:15am available. Which works better?
              </p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="p-3 border-t border-white/5">
          <div className="bg-navy/50 rounded-full px-4 py-2 text-steel text-sm border border-white/10">
            Type a message...
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Booking Visual
function BookingVisual() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-sm"
    >
      <div className="bg-dark-bg rounded-2xl shadow-card-dark border border-white/10 overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 border-b border-white/5">
          <p className="font-semibold text-white">Book a Tee Time</p>
          <p className="text-steel text-sm">Saturday, March 15</p>
        </div>

        {/* Time slots */}
        <div className="p-4 space-y-2">
          {[
            { time: "7:30 AM", price: "$65", spots: 4 },
            { time: "8:00 AM", price: "$65", spots: 2 },
            { time: "8:30 AM", price: "$75", spots: 4, popular: true },
            { time: "9:00 AM", price: "$75", spots: 3 },
          ].map((slot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center justify-between p-3 rounded-xl border ${
                slot.popular
                  ? "border-cyan-accent/30 bg-cyan-accent/10"
                  : "border-white/10 hover:border-cyan-accent/30 bg-navy/30"
              } cursor-pointer transition-colors`}
            >
              <div>
                <p className="font-semibold text-white">{slot.time}</p>
                <p className="text-steel text-sm">{slot.spots} spots left</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-cyan-accent">{slot.price}</p>
                {slot.popular && (
                  <span className="text-xs text-cyan-accent font-medium">Popular</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Reminders Visual
function RemindersVisual() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-sm space-y-3"
    >
      {/* SMS notification */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-dark-bg rounded-2xl shadow-card-dark border border-white/10 p-4"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-defiant-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Bell className="w-5 h-5 text-defiant-blue" />
          </div>
          <div>
            <p className="font-medium text-white text-sm">Tee Time Reminder</p>
            <p className="text-steel text-sm mt-1">
              Your tee time at Pine Valley is tomorrow at 8:30 AM.
              Reply C to confirm or X to cancel.
            </p>
            <p className="text-orb-grey text-xs mt-2">Just now</p>
          </div>
        </div>
      </motion.div>

      {/* Weather alert */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-amber-500/10 rounded-2xl border border-amber-500/30 p-4"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-lg">🌧️</span>
          </div>
          <div>
            <p className="font-medium text-amber-200 text-sm">Weather Update</p>
            <p className="text-amber-200/70 text-sm mt-1">
              Rain expected Saturday AM. Your booking is protected —
              we&apos;ll notify you of any changes.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Confirmation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-cyan-accent/10 rounded-2xl border border-cyan-accent/30 p-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-5 h-5 text-cyan-accent" />
          </div>
          <div>
            <p className="font-medium text-white text-sm">Booking Confirmed</p>
            <p className="text-cyan-accent text-sm">See you on the course!</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
