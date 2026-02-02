"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Check, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
          <h1 className="text-3xl font-bold text-white mb-4">Message sent!</h1>
          <p className="text-lg text-steel mb-8">
            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
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
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-steel mb-8">
              Have a question about BookingCaddie? Want to learn more about how
              it can help your course? We&apos;d love to hear from you.
            </p>

            {/* Contact methods */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cyan-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Call Us</h3>
                  <a
                    href="tel:+18005551234"
                    className="text-cyan-accent hover:text-cyan-300 transition-colors"
                  >
                    (800) 555-1234
                  </a>
                  <p className="text-steel text-sm mt-1">Mon-Fri 9am-6pm CT</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:hello@bookingcaddie.com"
                    className="text-cyan-accent hover:text-cyan-300 transition-colors"
                  >
                    hello@bookingcaddie.com
                  </a>
                  <p className="text-steel text-sm mt-1">
                    We respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Office</h3>
                  <p className="text-steel">
                    Austin, Texas
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="glow-card p-6">
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/demo"
                    className="flex items-center gap-2 text-cyan-accent hover:text-cyan-300 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Book a Demo
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="flex items-center gap-2 text-cyan-accent hover:text-cyan-300 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/solutions"
                    className="flex items-center gap-2 text-cyan-accent hover:text-cyan-300 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Explore Solutions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="glow-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a message
              </h2>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Name *
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
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Email *
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
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-transparent transition-colors"
                  >
                    <option value="" className="bg-acquisition-dark">
                      Select a topic
                    </option>
                    <option value="sales" className="bg-acquisition-dark">
                      Sales Inquiry
                    </option>
                    <option value="support" className="bg-acquisition-dark">
                      Technical Support
                    </option>
                    <option value="partnership" className="bg-acquisition-dark">
                      Partnership
                    </option>
                    <option value="press" className="bg-acquisition-dark">
                      Press / Media
                    </option>
                    <option value="other" className="bg-acquisition-dark">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-steel-light mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-orb-grey focus:outline-none focus:ring-2 focus:ring-cyan-accent/50 focus:border-transparent transition-colors resize-none"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="w-full btn-primary text-lg py-4">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
