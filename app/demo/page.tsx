"use client";

import { useState } from "react";
import { Phone, Check, ArrowRight } from "lucide-react";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courseName: "",
    role: "",
    monthlyRounds: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24 lg:pt-32 pb-16 lg:pb-24 min-h-screen section-dark">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-cyan-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-cyan-accent" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Thank you for your interest!
          </h1>
          <p className="text-lg text-steel mb-8">
            We&apos;ve received your request and will be in touch within 24 hours
            to schedule your personalized demo.
          </p>
          <a href="/" className="btn-primary">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

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
                "Pricing tailored to your call volume",
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
                href="tel:+18005551234"
                className="flex items-center gap-2 text-cyan-accent font-semibold hover:text-cyan-300"
              >
                <Phone className="w-4 h-4" />
                (800) 555-1234
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="glow-card p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-orb-grey focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-transparent transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-orb-grey focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-transparent transition-colors"
                    placeholder="john@golfclub.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-orb-grey focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Course Name */}
                <div>
                  <label
                    htmlFor="courseName"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Golf Course Name *
                  </label>
                  <input
                    type="text"
                    id="courseName"
                    required
                    value={formData.courseName}
                    onChange={(e) =>
                      setFormData({ ...formData, courseName: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-orb-grey focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-transparent transition-colors"
                    placeholder="Pine Valley Golf Club"
                  />
                </div>

                {/* Role */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Your Role *
                  </label>
                  <select
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-transparent transition-colors"
                  >
                    <option value="" className="bg-acquisition-dark">
                      Select your role
                    </option>
                    <option value="owner" className="bg-acquisition-dark">
                      Owner / Operator
                    </option>
                    <option value="gm" className="bg-acquisition-dark">
                      General Manager
                    </option>
                    <option value="headpro" className="bg-acquisition-dark">
                      Head Pro / PGA Professional
                    </option>
                    <option value="director" className="bg-acquisition-dark">
                      Director of Golf
                    </option>
                    <option value="other" className="bg-acquisition-dark">
                      Other
                    </option>
                  </select>
                </div>

                {/* Monthly Rounds */}
                <div>
                  <label
                    htmlFor="monthlyRounds"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Estimated Monthly Rounds
                  </label>
                  <select
                    id="monthlyRounds"
                    value={formData.monthlyRounds}
                    onChange={(e) =>
                      setFormData({ ...formData, monthlyRounds: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-transparent transition-colors"
                  >
                    <option value="" className="bg-acquisition-dark">
                      Select range
                    </option>
                    <option value="under1000" className="bg-acquisition-dark">
                      Under 1,000
                    </option>
                    <option value="1000-3000" className="bg-acquisition-dark">
                      1,000 - 3,000
                    </option>
                    <option value="3000-5000" className="bg-acquisition-dark">
                      3,000 - 5,000
                    </option>
                    <option value="5000+" className="bg-acquisition-dark">
                      5,000+
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-orb-grey focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your current challenges..."
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>

                <p className="text-center text-sm text-steel">
                  We&apos;ll reach out within 24 hours to schedule your demo.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
