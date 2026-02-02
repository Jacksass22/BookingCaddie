import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were missing 40% of our calls during peak hours. Now every call gets answered, and our bookings are up 35%. The AI sounds natural — golfers don't even realize it's not a person.",
    author: "Mike Thompson",
    role: "Head Pro",
    course: "Riverside Golf Club",
    location: "Austin, TX",
    stats: { label: "More Bookings", value: "+35%" },
  },
  {
    quote:
      "My staff was spending 3 hours a day on the phone. Now they can actually focus on the golfers in front of them. Best investment we've made in years.",
    author: "Sarah Chen",
    role: "General Manager",
    course: "Oakmont Municipal",
    location: "Denver, CO",
    stats: { label: "Hours Saved/Day", value: "3+" },
  },
  {
    quote:
      "The waitlist feature alone has paid for the service ten times over. We used to lose dozens of potential bookings when we were full. Now they all get captured.",
    author: "James Rodriguez",
    role: "Owner",
    course: "Desert Hills Golf Resort",
    location: "Scottsdale, AZ",
    stats: { label: "Waitlist Conversions", value: "89%" },
  },
  {
    quote:
      "Setup took less than a day. I was skeptical about AI handling calls, but the conversations are remarkably natural. Our regulars love that someone always picks up.",
    author: "Linda Park",
    role: "Director of Golf",
    course: "Bayview Country Club",
    location: "San Diego, CA",
    stats: { label: "Setup Time", value: "<1 Day" },
  },
  {
    quote:
      "We're a small municipal course with limited staff. BookingCaddie lets us compete with the private clubs on service without breaking the budget.",
    author: "Robert Martinez",
    role: "Course Manager",
    course: "Lincoln Park Golf Course",
    location: "Chicago, IL",
    stats: { label: "ROI", value: "5x" },
  },
  {
    quote:
      "The weather notifications have been a game-changer. No-shows dropped by half because golfers know exactly what to expect before they arrive.",
    author: "David Kim",
    role: "Head Pro",
    course: "Pacific Links",
    location: "Seattle, WA",
    stats: { label: "Fewer No-Shows", value: "-50%" },
  },
];

const logos = [
  "Riverside Golf Club",
  "Oakmont Municipal",
  "Desert Hills Resort",
  "Bayview CC",
  "Lincoln Park GC",
  "Pacific Links",
  "Valley Oaks",
  "Sunrise Golf",
];

export default function CustomersPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="pb-16 lg:pb-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by golf courses everywhere
          </h1>
          <p className="text-xl text-steel max-w-2xl mx-auto">
            From municipal courses to private clubs, BookingCaddie helps golf
            operations capture more bookings and deliver better service.
          </p>
        </div>
      </section>

      {/* Logo bar */}
      <section className="py-12 section-navy border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {logos.map((name) => (
              <div
                key={name}
                className="text-lg font-semibold text-orb-grey hover:text-steel transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Golf Courses" },
              { value: "2M+", label: "Calls Answered" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "$4.2M", label: "Revenue Captured" },
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

      {/* Testimonials */}
      <section className="py-16 lg:py-24 section-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What our customers say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="glow-card p-6 lg:p-8">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/10" />
                  <p className="text-steel-light relative z-10 pl-4">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-steel text-sm">
                      {testimonial.role}, {testimonial.course}
                    </p>
                    <p className="text-orb-grey text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gradient-cyan">
                      {testimonial.stats.value}
                    </p>
                    <p className="text-steel text-xs">
                      {testimonial.stats.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 lg:py-24 section-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-accent font-medium mb-2 block">
                Case Study
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                How Riverside Golf Club increased bookings by 35%
              </h2>
              <p className="text-steel text-lg mb-6">
                Before BookingCaddie, Riverside was missing nearly half their
                calls during peak hours. With a small pro shop team, they simply
                couldn&apos;t keep up with phone volume while serving golfers
                in-person.
              </p>
              <p className="text-steel mb-8">
                Within 30 days of implementing BookingCaddie, they saw a 35%
                increase in bookings and reduced staff phone time by 80%. The AI
                handles routine calls, while staff focus on the customer
                experience.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-cyan-accent font-semibold hover:text-cyan-300 transition-colors"
              >
                See how it can work for you
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="glow-card p-8">
              <h3 className="font-semibold text-white mb-6">Results Summary</h3>
              <div className="space-y-6">
                {[
                  { label: "Booking Increase", value: "+35%" },
                  { label: "Calls Answered", value: "100%" },
                  { label: "Staff Phone Time", value: "-80%" },
                  { label: "Customer Satisfaction", value: "4.9/5" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0 last:pb-0"
                  >
                    <span className="text-steel">{item.label}</span>
                    <span className="text-2xl font-bold text-gradient-cyan">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
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
            Join the courses already winning with AI
          </h2>
          <p className="text-xl text-steel mb-8">
            See why golf courses trust BookingCaddie to handle their most
            important calls.
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
