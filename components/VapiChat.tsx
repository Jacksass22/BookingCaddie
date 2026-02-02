"use client";

import { useEffect, useRef } from "react";

const VAPI_PUBLIC_KEY = "daf87472-30a2-44a9-96bb-1b832815c8d1";
const ASSISTANT_ID = "1fa0e900-ab80-449a-b8c7-02e55c371cc5";

export function VapiChat() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Vapi Chat Widget SDK if not already loaded
    const existingScript = document.querySelector(
      'script[src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"]'
    );

    const initWidget = () => {
      if (containerRef.current) {
        // Check if widget already exists in container
        const existingWidget = containerRef.current.querySelector("vapi-widget");
        if (!existingWidget) {
          const widget = document.createElement("vapi-widget");
          widget.setAttribute("public-key", VAPI_PUBLIC_KEY);
          widget.setAttribute("assistant-id", ASSISTANT_ID);
          widget.setAttribute("mode", "chat");
          widget.setAttribute("theme", "dark");
          widget.setAttribute("size", "full");
          widget.setAttribute("position", "inline");
          widget.setAttribute("title", "BookingCaddie AI");
          widget.setAttribute("chat-placeholder", "Ask about BookingCaddie...");
          widget.setAttribute("primary-color", "#0072CE");
          widget.setAttribute("accent-color", "#06B6D4");
          widget.setAttribute("button-color", "#0072CE");
          containerRef.current.appendChild(widget);
        }
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
      script.async = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    } else {
      // Script already loaded, init widget
      initWidget();
    }

    return () => {
      // Cleanup on unmount
      if (containerRef.current) {
        const widget = containerRef.current.querySelector("vapi-widget");
        if (widget) {
          widget.remove();
        }
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Embedded Chat Container */}
      <div
        ref={containerRef}
        className="w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-navy/30"
        style={{
          // Style overrides for embedded widget
          position: 'relative',
        }}
      />
      <p className="text-center text-sm text-steel mt-6">
        For complex inquiries,{" "}
        <a href="/contact" className="text-cyan-accent hover:underline">
          contact our team
        </a>
        .
      </p>
    </div>
  );
}
