import Link from "next/link";
import { ArrowRight, Check, Zap, RefreshCw, Shield } from "lucide-react";

const integrations = [
  {
    name: "Lightspeed Golf",
    description: "Real-time availability sync and automatic booking updates",
    features: ["Two-way sync", "Live inventory", "Automatic confirmations"],
  },
  {
    name: "ForeUP",
    description: "Seamless integration with ForeUP tee sheet management",
    features: ["Direct booking", "Customer lookup", "Rate management"],
  },
  {
    name: "Teesnap",
    description: "Connect BookingCaddie to your Teesnap system",
    features: ["Real-time sync", "Waitlist integration", "Member recognition"],
  },
  {
    name: "GolfNow",
    description: "Integrate with GolfNow for expanded distribution",
    features: ["Availability sync", "Booking management", "Rate parity"],
  },
  {
    name: "Chronogolf",
    description: "Full integration with Chronogolf by Lightspeed",
    features: ["Live availability", "Customer profiles", "Reporting sync"],
  },
  {
    name: "Club Prophet",
    description: "Connect with Club Prophet management systems",
    features: ["Tee time sync", "Member data", "POS integration"],
  },
];

const additionalIntegrations = [
  "Sagacity Golf",
  "TeeQuest",
  "EZLinks",
  "Quick18",
  "Supreme Golf",
  "Golf EMS",
];

export default function IntegrationsPage() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-navy/30 to-dark-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-defiant-blue/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Works with your existing tools
          </h1>
          <p className="text-xl text-steel max-w-2xl mx-auto">
            BookingCaddie integrates with all major tee sheet platforms. Keep
            your current system — we just make it smarter.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                icon: Zap,
                title: "Real-Time Sync",
                description:
                  "Availability updates instantly. No double bookings, no manual updates required.",
              },
              {
                icon: RefreshCw,
                title: "Two-Way Integration",
                description:
                  "Changes in your tee sheet reflect in BookingCaddie, and vice versa. Always in sync.",
              },
              {
                icon: Shield,
                title: "Secure Connection",
                description:
                  "Enterprise-grade security. Your data stays protected with encrypted connections.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-defiant-blue to-cyan-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-steel">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16 lg:py-24 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Supported Platforms
          </h2>
          <p className="text-steel text-center mb-16 max-w-2xl mx-auto">
            Direct integrations with the most popular golf management systems.
            Don&apos;t see yours? We likely support it — just ask.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-cyan-accent/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-defiant-blue to-cyan-accent rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {integration.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {integration.name}
                  </h3>
                </div>
                <p className="text-steel text-sm mb-4">
                  {integration.description}
                </p>
                <ul className="space-y-2">
                  {integration.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                      <span className="text-steel-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional integrations */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-steel mb-6 text-center">Also integrates with:</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {additionalIntegrations.map((name) => (
                <span
                  key={name}
                  className="text-steel-light hover:text-cyan-accent transition-colors cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-navy/50 to-dark-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-accent/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Integration in 3 steps
          </h2>
          <p className="text-steel text-center mb-16 max-w-xl mx-auto">
            We handle the technical work. You just provide access.
          </p>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                step: "01",
                title: "Connect",
                description:
                  "Share your tee sheet credentials. We establish a secure, encrypted connection.",
              },
              {
                step: "02",
                title: "Sync",
                description:
                  "We pull your availability, rates, and policies. Everything stays in perfect sync.",
              },
              {
                step: "03",
                title: "Done",
                description:
                  "Bookings flow automatically between BookingCaddie and your existing system.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-bold text-gradient-cyan mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-steel-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration CTA */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-defiant-blue/20 via-electric-blue/10 to-cyan-accent/20" />
        <div className="absolute inset-0 bg-dark-bg/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Don&apos;t see your system?
          </h2>
          <p className="text-xl text-steel mb-8">
            We build custom integrations for Enterprise customers. API access
            available for unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/faq" className="btn-secondary text-lg px-8 py-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
