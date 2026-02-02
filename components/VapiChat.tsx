"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function VapiChat() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center">
      <Image
        src="/images/bookingcaddiecutoutlogo.png"
        alt="BookingCaddie AI"
        width={120}
        height={120}
        className="w-28 h-28 mx-auto mb-6"
      />
      <h2 className="text-2xl font-bold text-white mb-3">Chat with our AI</h2>
      <p className="text-steel max-w-lg mx-auto text-center mb-8">
        Have questions about BookingCaddie? Use the chat widget in the bottom-right corner
        to start a conversation with our AI assistant.
      </p>
      <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-defiant-blue/20 to-cyan-accent/20 border border-cyan-accent/30 rounded-xl">
        <MessageCircle className="w-5 h-5 text-cyan-accent" />
        <span className="text-white">Click the chat icon below to get started</span>
      </div>
      <p className="text-center text-sm text-steel mt-8">
        For complex inquiries,{" "}
        <a href="/contact" className="text-cyan-accent hover:underline">
          contact our team
        </a>
        .
      </p>
    </div>
  );
}
