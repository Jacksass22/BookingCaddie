import Link from "next/link";
import { ArrowRight, Clock, TrendingUp, PhoneOff, Phone } from "lucide-react";
import { ProductSelector } from "@/components/ProductSelector";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-defiant-blue/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-cyan-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
              <span className="text-white">AI Voice Reception for</span>
              <br />
              <span className="text-gradient-cyan">Golf Courses</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-steel mb-10 max-w-2xl mx-auto leading-relaxed">
              Answer every call. Book more tee times.
              <br className="hidden sm:block" />{" "}
              Let your staff focus on hospitality — not the phone.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/demo" className="btn-primary text-lg px-8 py-4">
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/solutions" className="btn-secondary text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-steel">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-accent" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-accent" />
                <span>Increase bookings 30%+</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneOff className="w-4 h-4 text-cyan-accent" />
                <span>Pick up the phone 50% less</span>
              </div>
            </div>

            {/* Try AI CTA */}
            <div className="mt-8 lg:mt-12 mb-16 lg:mb-0">
              <a
                href="tel:+18438688065"
                className="inline-flex items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-4 bg-gradient-to-r from-defiant-blue/20 via-electric-blue/10 to-cyan-accent/20 border border-cyan-accent/30 rounded-xl sm:rounded-2xl hover:border-cyan-accent/50 transition-all group"
              >
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-defiant-blue to-cyan-accent rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm text-cyan-accent font-medium">Try it right now</p>
                  <p className="text-base sm:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-accent transition-colors">
                    +1 (843) 868-8065
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-accent ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-steel text-xs sm:text-sm mt-2 sm:mt-3">
                Call our AI assistant to experience it firsthand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Selector Section */}
      <ProductSelector />

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Golf courses don&apos;t need more software
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto">
              They need someone to answer the phone. BookingCaddie does exactly
              that — and nothing more than necessary.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { value: "24/7", label: "Phone Coverage" },
              { value: "<3s", label: "Answer Time" },
              { value: "98%", label: "Booking Accuracy" },
              { value: "30%+", label: "More Bookings" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gradient-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-steel">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="max-w-3xl mx-auto glow-card p-8 lg:p-12">
            <blockquote className="text-xl lg:text-2xl text-steel-light text-center mb-6 leading-relaxed">
              &quot;We were missing 40% of our calls during peak hours. Now
              every call gets answered, and our bookings are up significantly.
              The AI sounds natural — golfers don&apos;t even realize
              it&apos;s not a person.&quot;
            </blockquote>
            <div className="text-center">
              <p className="font-semibold text-white">Mike Thompson</p>
              <p className="text-steel">Head Pro, Riverside Golf Club</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-navy/50 to-dark-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-defiant-blue/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Up and running in 48 hours
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto">
              No IT team required. We handle the heavy lifting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "Connect",
                description:
                  "We integrate with your phone line and booking system. Keep your existing number — golfers won't notice a thing.",
                gradient: "from-defiant-blue/20 to-electric-blue/10",
              },
              {
                step: "02",
                title: "Train",
                description:
                  "We train the AI on your specific course — rates, policies, tee sheet, and everything that makes your operation unique.",
                gradient: "from-electric-blue/20 to-cyan-accent/10",
              },
              {
                step: "03",
                title: "Go Live",
                description:
                  "Start answering calls automatically. Your staff handles 50% fewer calls while you capture every booking.",
                gradient: "from-cyan-accent/20 to-cyan-accent/5",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-colors">
                  <div className="text-5xl font-bold text-gradient-cyan mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-steel-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="py-16 lg:py-20 section-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-steel mb-8">
            Integrates with the tools you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {["Lightspeed", "ForeUP", "Teesnap", "GolfNow", "Chronogolf", "Club Prophet"].map(
              (name) => (
                <div
                  key={name}
                  className="text-xl font-semibold text-orb-grey hover:text-steel transition-colors"
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-defiant-blue/20 via-electric-blue/10 to-cyan-accent/20" />
        <div className="absolute inset-0 bg-dark-bg/80" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Never miss a call. Never miss a booking.
          </h2>
          <p className="text-xl text-steel mb-8 max-w-2xl mx-auto">
            See how BookingCaddie can transform your pro shop operations.
            Schedule a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/demo" className="btn-primary text-lg px-8 py-4">
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/faq" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
