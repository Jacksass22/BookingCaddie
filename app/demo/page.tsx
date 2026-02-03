"use client";

import { Phone, Check } from "lucide-react";
import { BookingWidget } from "@/components/BookingWidget";

export default function DemoPage() {
  return (
    <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 section-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Info */}
          <div className="lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Book a Demo
            </h1>
            <p className="text-xl text-steel mb-8">
              See how BookingCaddie can answer every call, book more tee times,
              and free up your staff — all in a 30-minute personalized demo.
            </p>

            {/* What to expect */}
            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-white">What to expect:</h3>
              {[
                "Live demonstration of the AI Voice Receptionist",
                "Custom walkthrough based on your course's needs",
                "Tailored to your course's specific needs",
                "Integration options with your existing tee sheet",
                "Q&A with our golf technology experts",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-cyan-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-cyan-accent" />
                  </div>
                  <span className="text-steel">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="glow-card p-6">
              <p className="text-steel text-sm mb-2">Prefer to talk now?</p>
              <a
                href="tel:+18438688065"
                className="flex items-center gap-2 text-cyan-accent font-semibold hover:text-cyan-300"
              >
                <Phone className="w-4 h-4" />
                (843) 868-8065
              </a>
            </div>
          </div>

          {/* Right side - Booking Calendar */}
          <div>
            <div className="glow-card p-4 lg:p-6">
              <BookingWidget height="650px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
