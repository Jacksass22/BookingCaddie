"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Clock, Users, Moon, Repeat, Coffee, Rocket } from "lucide-react";
import BlurText from "@/components/animations/BlurText";
import SplitText from "@/components/animations/SplitText";
import LetterPullUp from "@/components/animations/LetterPullUp";
import CountUp from "@/components/animations/CountUp";
import MagneticCard from "@/components/animations/MagneticCard";
import GlowingOrb from "@/components/animations/GlowingOrb";
import TextScramble from "@/components/animations/TextScramble";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero - Full Screen Dramatic Intro */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <GlowingOrb size={600} color="cyan" className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <GlowingOrb size={400} color="blue" className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />

        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0A0A0F_70%)]"
          style={{ y: backgroundY }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-cyan-accent/60 text-sm tracking-[0.3em] uppercase font-medium">
              <TextScramble text="Your Staff Deserves Better" speed={30} />
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.95]">
            <SplitText text="Same Question." className="block" delay={0.3} />
            <SplitText text="Hundredth Time." className="block mt-2" delay={0.6} />
            <SplitText text="Zero Patience Left." className="block mt-2 text-cyan-accent" delay={0.9} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-xl text-steel max-w-2xl mx-auto"
          >
            Built by former pro shop staff who got tired of being a human FAQ.
            <span className="block mt-2 text-white/80">We built the solution we wished we had.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-steel/50"
            >
              <span className="text-sm">Scroll to discover</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-steel/50 to-transparent mx-auto mt-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Numbers That Matter */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <BlurText
              text="Where your staff hours actually go"
              className="text-3xl md:text-4xl font-bold text-white justify-center"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: 62,
                suffix: "%",
                label: "of calls are routine questions",
                sublabel: "tee times, rates, hours, directions",
                icon: Repeat,
              },
              {
                number: 15,
                suffix: "+ hrs",
                label: "per week on the phone",
                sublabel: "per staff member during peak season",
                icon: Clock,
              },
              {
                number: 24,
                suffix: "/7",
                label: "coverage without overtime",
                sublabel: "nights, weekends, holidays",
                icon: Moon,
              },
            ].map((stat, i) => (
              <MagneticCard key={i} strength={40}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-navy/50 to-transparent border border-white/5 hover:border-cyan-accent/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <stat.icon className="w-8 h-8 text-cyan-accent/50 mb-6" />

                  <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                    <CountUp
                      target={stat.number}
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>

                  <p className="text-xl text-white font-medium mb-1">{stat.label}</p>
                  <p className="text-steel text-sm">{stat.sublabel}</p>
                </motion.div>
              </MagneticCard>
            ))}
          </div>
        </div>
      </section>

      {/* The Story - Scroll Narrative */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="space-y-32">
            {/* Chapter 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-accent via-cyan-accent/50 to-transparent" />
              <span className="text-cyan-accent text-sm tracking-widest uppercase mb-4 block">
                Chapter 01
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <BlurText text="We've Been There. Literally." />
              </h2>
              <div className="space-y-4 text-lg text-steel leading-relaxed">
                <BlurText
                  text="BookingCaddie was built by former pro shop staff. We've answered those calls. Thousands of them."
                  delay={0.2}
                  className="text-white"
                />
                <BlurText
                  text="&quot;What time do you open?&quot; &quot;How much for 18 holes?&quot; &quot;Do you have anything at 9?&quot;"
                  delay={0.3}
                  className="text-steel italic"
                />
                <BlurText
                  text="The same questions. Every single day. While golfers wait at the counter. While carts need staging. While a hundred other things need attention."
                  delay={0.4}
                />
                <BlurText
                  text="We didn't read about this problem in a market report. We lived it. So we built the solution we wished we had."
                  delay={0.6}
                  className="text-cyan-accent font-medium"
                />
              </div>
            </motion.div>

            {/* Chapter 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-electric-blue via-electric-blue/50 to-transparent" />
              <span className="text-electric-blue text-sm tracking-widest uppercase mb-4 block">
                Chapter 02
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <BlurText text="The Real Cost Isn't Just Wages." />
              </h2>
              <div className="space-y-4 text-lg text-steel leading-relaxed">
                <BlurText
                  text="It's the golfer who waited too long at check-in because Sarah was stuck on the phone. It's the cart that didn't get staged. It's the burned-out employee who quits mid-season."
                  delay={0.2}
                />
                <BlurText
                  text="And it's those calls that come in right after you close — the guy planning tomorrow's round at 6 PM, the early bird at 6 AM wanting to book before work. Revenue walking out the door because nobody's there to pick up."
                  delay={0.4}
                  className="text-white"
                />
                <BlurText
                  text="Until now."
                  delay={0.6}
                  className="text-cyan-accent font-semibold text-xl"
                />
              </div>
            </motion.div>

            {/* Chapter 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-[2px] h-full bg-gradient-to-b from-defiant-blue via-defiant-blue/50 to-transparent" />
              <span className="text-defiant-blue text-sm tracking-widest uppercase mb-4 block">
                Chapter 03
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <BlurText text="We Handle the Routine. You Handle the Rest." />
              </h2>
              <div className="space-y-4 text-lg text-steel leading-relaxed">
                <BlurText
                  text="BookingCaddie answers the calls that eat up your day. Tee time availability. Rates and specials. Directions. Hours. Booking confirmations."
                  delay={0.2}
                />
                <BlurText
                  text="24 hours a day. 7 days a week. Holidays included. No overtime. No sick days. No turnover."
                  delay={0.4}
                  className="text-white"
                />
                <BlurText
                  text="Your team gets to focus on hospitality, service, and the work that actually requires a human touch."
                  delay={0.6}
                  className="text-cyan-accent font-medium"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beliefs - Interactive Cards */}
      <section className="relative py-32 overflow-hidden">
        <GlowingOrb size={500} color="purple" className="top-1/2 left-0 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <LetterPullUp
              text="What We Stand For"
              className="text-4xl md:text-5xl font-bold text-white"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Staff time is valuable",
                description:
                  "Every minute on a routine call is a minute not spent with a golfer on-site. We give your team their time back.",
                icon: Coffee,
              },
              {
                title: "24/7 shouldn't cost 24/7",
                description:
                  "Late-night inquiries, early-morning bookings, holiday requests — covered without adding a single shift.",
                icon: Moon,
              },
              {
                title: "Humans for hospitality",
                description:
                  "AI for the routine. People for the personal. We handle FAQ calls so your team can handle the moments that matter.",
                icon: Users,
              },
              {
                title: "Nothing slips through",
                description:
                  "That 6 AM booking request? Handled. The voicemail from last night? Already processed. Every inquiry gets answered.",
                icon: Phone,
              },
            ].map((belief, i) => (
              <MagneticCard key={i} strength={25}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 hover:border-white/20 transition-all duration-500 cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-accent/20 transition-colors duration-300">
                      <belief.icon className="w-6 h-6 text-cyan-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-accent transition-colors duration-300">
                        {belief.title}
                      </h3>
                      <p className="text-steel leading-relaxed">{belief.description}</p>
                    </div>
                  </div>
                </motion.div>
              </MagneticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Voice - Additional Services */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Rocket className="w-4 h-4 text-cyan-accent" />
              <span className="text-sm text-steel">When you&apos;re ready for more</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Beyond Voice: Full-Service Golf Tech
            </h2>

            <p className="text-lg text-steel max-w-2xl mx-auto mb-8">
              Love what BookingCaddie does for your phones? We can help with the bigger picture too —
              custom app development, modern websites, complete booking system overhauls, and
              marketing automation that actually works.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {["Custom Apps", "Website Design", "Booking Systems", "Marketing Automation"].map((service, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-steel hover:border-cyan-accent/30 hover:text-white transition-all duration-300"
                >
                  {service}
                </motion.span>
              ))}
            </div>

            <p className="text-steel/60 text-sm mt-8">
              Not sure what you need? <Link href="/contact" className="text-cyan-accent hover:underline">Just ask</Link> — we&apos;ll point you in the right direction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <GlowingOrb size={300} color="cyan" className="bottom-0 right-1/4" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <LetterPullUp
              text="Ready to give your team their time back?"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            />

            <p className="text-xl text-steel mb-10 max-w-xl mx-auto">
              See how BookingCaddie can cut labor hours and keep your phones covered 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/demo">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Us
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
