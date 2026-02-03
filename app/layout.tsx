import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VapiWidget } from "@/components/VapiWidget";

export const metadata: Metadata = {
  title: "BookingCaddie | AI Voice Reception for Golf Courses",
  description:
    "Never miss a call. Never miss a booking. AI Voice Receptionist built specifically for golf courses. Answer calls, book tee times, handle cancellations — automatically, 24/7.",
  keywords: [
    "golf course AI",
    "voice receptionist",
    "tee time booking",
    "golf course phone system",
    "AI phone answering",
    "golf course software",
  ],
  icons: {
    icon: "/images/Favicon.png",
    shortcut: "/images/Favicon.png",
    apple: "/images/Favicon.png",
  },
  openGraph: {
    title: "BookingCaddie | AI Voice Reception for Golf Courses",
    description: "Never miss a call. Never miss a booking.",
    type: "website",
    locale: "en_US",
    siteName: "BookingCaddie",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <VapiWidget />
      </body>
    </html>
  );
}
