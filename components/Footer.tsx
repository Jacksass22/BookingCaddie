import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/solutions", label: "Solutions" },
    { href: "/integrations", label: "Integrations" },
    { href: "/faq", label: "FAQ" },
    { href: "/demo", label: "Book a Demo" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-acquisition-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/bookingcaddiecutoutlogo.png"
                alt="BookingCaddie"
                width={52}
                height={52}
                className="w-13 h-13"
                style={{ width: '52px', height: '52px' }}
              />
              <span className="text-xl font-bold text-white leading-none">
                Booking<span className="text-gradient-cyan">Caddie</span>
              </span>
            </Link>
            <p className="text-steel text-sm mb-4">
              AI Voice Reception for Golf Courses.
              <br />
              Never miss a call. Never miss a booking.
            </p>
            <div className="flex items-center gap-2 text-steel text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@bookingcaddie.com" className="hover:text-cyan-accent transition-colors">
                hello@bookingcaddie.com
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel hover:text-cyan-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel hover:text-cyan-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel hover:text-cyan-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-orb-grey text-sm">
            © {new Date().getFullYear()} BookingCaddie. All rights reserved.
          </p>
          <p className="text-orb-grey text-sm">
            Built specifically for golf courses.
          </p>
          <p className="text-orb-grey text-sm">
            by{" "}
            <a
              href="https://defiantintegration.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orb-grey hover:text-cyan-accent transition-colors"
            >
              Defiant Integration
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
