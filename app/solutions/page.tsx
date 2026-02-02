import Link from "next/link";
import {
  Phone,
  MessageSquare,
  Calendar,
  Bell,
  Check,
  ArrowRight,
  Mic,
  Clock,
  Users,
  Zap,
} from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="pb-16 lg:pb-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            One platform. Built for golf.
          </h1>
          <p className="text-xl text-steel max-w-2xl mx-auto">
            The AI Voice Receptionist is the core. Everything else exists to
            support it — helping you capture every booking opportunity.
          </p>
        </div>
      </section>

      {/* AI Voice Receptionist - Primary */}
      <section id="voice" className="py-16 lg:py-24 section-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-defiant-blue/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cyan-accent" />
                </div>
                <span className="bg-cyan-accent/10 text-cyan-accent px-3 py-1 rounded-full text-sm font-medium border border-cyan-accent/20">
                  Core Product
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                AI Voice Receptionist
              </h2>
              <p className="text-lg text-steel mb-6">
                Your course&apos;s phone — answered automatically, 24/7.
                BookingCaddie handles tee times, cancellations, questions, and
                waitlists just like a trained staff member.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, text: "Answers in under 3 seconds" },
                  { icon: Mic, text: "Natural conversation" },
                  { icon: Users, text: "Recognizes returning golfers" },
                  { icon: Zap, text: "Instant tee sheet sync" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-steel-light" />
                    </div>
                    <span className="text-steel-light">{item.text}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Answers calls instantly, day or night",
                  "Books tee times via natural conversation",
                  "Handles cancellations and rebooks automatically",
                  "Answers questions about rates, hours, and policies",
                  "Manages waitlists when times are full",
                  "Integrates directly with your tee sheet",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-cyan-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-accent" />
                    </div>
                    <span className="text-steel-light">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/demo" className="btn-primary">
                See It In Action
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Visual */}
            <div className="glow-card p-6 lg:p-8">
              <div className="bg-acquisition-dark rounded-2xl p-6 text-center mb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-defiant-blue to-cyan-accent rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <p className="text-steel text-sm mb-1">Active Call</p>
                <p className="text-white font-semibold text-lg mb-6">
                  +1 (555) 123-4567
                </p>

                {/* Waveform */}
                <div className="flex items-center justify-center gap-1 h-16 mb-6">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-cyan-accent rounded-full animate-waveform"
                      style={{
                        height: `${Math.random() * 40 + 20}px`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Transcript */}
                <div className="bg-white/5 rounded-xl p-4 text-left border border-white/10">
                  <p className="text-steel text-xs mb-3 uppercase tracking-wide">
                    Live Transcript
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="text-steel">
                      <span className="text-cyan-accent">Golfer:</span>{" "}
                      &quot;Hi, I&apos;d like to book a tee time for this Saturday.&quot;
                    </p>
                    <p className="text-steel">
                      <span className="text-white">BookingCaddie:</span>{" "}
                      &quot;Of course! How many players and what time works best?&quot;
                    </p>
                    <p className="text-steel">
                      <span className="text-cyan-accent">Golfer:</span>{" "}
                      &quot;Four players, around 8 in the morning.&quot;
                    </p>
                    <p className="text-white">
                      <span className="text-white">BookingCaddie:</span>{" "}
                      &quot;I have 7:52 AM and 8:14 AM available. Which would you prefer?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Chatbot */}
      <section id="chatbot" className="py-16 lg:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="glow-card overflow-hidden max-w-md mx-auto">
                <div className="bg-gradient-to-r from-defiant-blue to-electric-blue px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">BookingCaddie</p>
                    <p className="text-white/70 text-sm">Online now</p>
                  </div>
                </div>
                <div className="p-4 space-y-3 bg-acquisition-dark min-h-[300px]">
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] border border-white/5">
                      <p className="text-steel-light text-sm">
                        Hi! I can help you book a tee time or answer any
                        questions about our course. What can I do for you?
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-gradient-to-r from-defiant-blue to-electric-blue rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      <p className="text-white text-sm">
                        What&apos;s your cancellation policy?
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] border border-white/5">
                      <p className="text-steel-light text-sm">
                        You can cancel up to 24 hours before your tee time for a
                        full refund. Same-day cancellations are subject to a 50%
                        fee. Would you like to make a booking?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-steel-light" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Website Chatbot
              </h2>
              <p className="text-lg text-steel mb-6">
                For golfers browsing your site instead of calling, BookingCaddie
                provides instant chat assistance — powered by the same
                intelligence as your voice receptionist.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Answers booking questions instantly",
                  "Guides users to call or book online",
                  "Knows your course rules, pricing, and hours",
                  "Zero configuration required",
                  "Same AI brain as your phone system",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-cyan-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-accent" />
                    </div>
                    <span className="text-steel-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking System */}
      <section id="booking" className="py-16 lg:py-24 section-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-steel-light" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Booking System / CRM
              </h2>
              <p className="text-lg text-steel mb-6">
                A modern booking experience designed to work seamlessly with
                your voice system. Everything connects — calls, chats, and
                online bookings in one place.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Mobile-friendly booking interface",
                  "Live availability sync",
                  "Prepaid tee times support",
                  "Booking history tied to phone interactions",
                  "Customer profiles built automatically",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-cyan-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-accent" />
                    </div>
                    <span className="text-steel-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glow-card overflow-hidden max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div className="px-6 py-4 border-b border-white/10">
                <p className="font-semibold text-white">Book a Tee Time</p>
                <p className="text-steel text-sm">Saturday, March 15</p>
              </div>
              <div className="p-4 space-y-2">
                {[
                  { time: "7:30 AM", price: "$65", spots: 4 },
                  { time: "8:00 AM", price: "$65", spots: 2 },
                  { time: "8:30 AM", price: "$75", spots: 4, popular: true },
                  { time: "9:00 AM", price: "$75", spots: 3 },
                  { time: "9:30 AM", price: "$85", spots: 4 },
                ].map((slot, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-4 rounded-xl border ${
                      slot.popular
                        ? "border-cyan-accent/50 bg-cyan-accent/10"
                        : "border-white/10 hover:border-cyan-accent/30 hover:bg-white/5"
                    } cursor-pointer transition-colors`}
                  >
                    <div>
                      <p className="font-semibold text-white">{slot.time}</p>
                      <p className="text-steel text-sm">
                        {slot.spots} spots left
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-cyan-accent">
                        {slot.price}
                      </p>
                      {slot.popular && (
                        <span className="text-xs text-cyan-accent font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Reminders */}
      <section id="reminders" className="py-16 lg:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-4 max-w-md mx-auto">
              <div className="glow-card p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-cyan-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-cyan-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-white text-sm">
                      Tee Time Reminder
                    </p>
                    <p className="text-steel text-sm mt-1">
                      Your tee time at Pine Valley is tomorrow at 8:30 AM. Reply
                      C to confirm or X to cancel.
                    </p>
                    <p className="text-orb-grey text-xs mt-2">Just now</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 rounded-2xl border border-amber-500/20 p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🌧️</span>
                  </div>
                  <div>
                    <p className="font-medium text-amber-400 text-sm">
                      Weather Update
                    </p>
                    <p className="text-amber-200/70 text-sm mt-1">
                      Rain expected Saturday AM. Your booking is protected —
                      we&apos;ll notify you of any changes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 rounded-2xl border border-emerald-500/20 p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-medium text-emerald-400 text-sm">
                      Confirmed!
                    </p>
                    <p className="text-emerald-200/70 text-sm">
                      See you on the course!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-steel-light" />
                </div>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Smart Reminders & Follow-Ups
              </h2>
              <p className="text-lg text-steel mb-6">
                Automated confirmations and reminders that reduce no-shows
                without staff involvement. Protect your revenue while your team
                focuses on hospitality.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "SMS & email confirmations",
                  "Day-before reminders",
                  "Weather notifications",
                  "One-tap cancellation handling",
                  "Automatic waitlist management",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-cyan-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-accent" />
                    </div>
                    <span className="text-steel-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-defiant-blue/20 via-electric-blue/10 to-cyan-accent/20" />
        <div className="absolute inset-0 bg-dark-bg/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to see it in action?
          </h2>
          <p className="text-xl text-steel mb-8">
            Schedule a personalized demo and see how BookingCaddie can transform
            your course operations.
          </p>
          <Link href="/demo" className="btn-primary text-lg px-8 py-4">
            Book a Demo
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
