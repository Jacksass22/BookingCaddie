import Link from "next/link";
import { ArrowRight, Heart, Target, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="pb-16 lg:pb-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Golf courses don&apos;t need more software. They need someone to
              answer the phone.
            </h1>
            <p className="text-xl text-steel">
              We built BookingCaddie because we saw courses struggling with a
              simple problem: they couldn&apos;t answer all their calls. Not
              because they didn&apos;t care — because they were too busy taking
              care of golfers.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 section-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-steel">
                <p>
                  BookingCaddie started with a simple observation: pro shops are
                  busiest when phones ring the most. Saturday morning, the
                  weather&apos;s perfect, and everyone wants a tee time. But
                  your staff is checking in golfers, handling the register, and
                  answering questions face-to-face.
                </p>
                <p>
                  We talked to dozens of course managers and heard the same
                  thing: &quot;We know we&apos;re missing calls. We just
                  can&apos;t do anything about it.&quot;
                </p>
                <p>
                  So we built something to help. Not another complicated
                  platform. Not a chatbot pretending to be intelligent. A real
                  AI voice system that can have natural conversations, book tee
                  times, and handle the routine calls that eat up staff time.
                </p>
                <p>
                  Today, BookingCaddie answers thousands of calls every day for
                  golf courses across the country. Our customers see more
                  bookings, happier golfers, and staff who can finally focus on
                  hospitality instead of the phone.
                </p>
              </div>
            </div>

            <div className="glow-card p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-white mb-8">
                What We Believe
              </h3>
              <div className="space-y-8">
                {[
                  {
                    icon: Target,
                    title: "Focus on One Thing",
                    description:
                      "We're not trying to replace your tee sheet, POS, or marketing platform. We do one thing — answer phones — and we do it better than anyone.",
                  },
                  {
                    icon: Heart,
                    title: "Golf Comes First",
                    description:
                      "We're golfers building for golfers. Every feature is designed with the unique needs of golf operations in mind.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Technology Should Disappear",
                    description:
                      "The best tech doesn't feel like tech. When golfers call, they should feel like they're talking to someone who cares — because our AI was trained to.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-cyan-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-steel text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-defiant-blue/20 via-electric-blue/10 to-cyan-accent/20" />
        <div className="absolute inset-0 bg-dark-bg/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Same golf course. Better results.
          </h2>
          <p className="text-xl text-steel">
            That&apos;s our promise. You don&apos;t need to change how you
            operate. BookingCaddie works alongside your existing systems and
            staff to help you capture every opportunity.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 section-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-steel max-w-2xl mx-auto">
              A small team of engineers, designers, and golf enthusiasts based
              in Austin, Texas. We&apos;re backed by investors who believe in
              the future of AI-powered hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Alex Rivera",
                role: "CEO & Co-founder",
                bio: "Former head of product at a golf tech company. 15 handicap.",
              },
              {
                name: "Jordan Chen",
                role: "CTO & Co-founder",
                bio: "AI/ML engineer with a background in voice recognition. Scratch golfer.",
              },
              {
                name: "Sam Thompson",
                role: "Head of Customer Success",
                bio: "10 years in golf course management. Knows the business inside and out.",
              },
            ].map((person, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 border border-white/10" />
                <h3 className="font-semibold text-white">{person.name}</h3>
                <p className="text-cyan-accent text-sm mb-2">{person.role}</p>
                <p className="text-steel text-sm">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 section-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to never miss a call?
          </h2>
          <p className="text-xl text-steel mb-8">
            Let&apos;s talk about how BookingCaddie can help your course.
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
