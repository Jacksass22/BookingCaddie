"use client";

import { useEffect } from "react";

const VAPI_PUBLIC_KEY = "daf87472-30a2-44a9-96bb-1b832815c8d1";
const ASSISTANT_ID = "1fa0e900-ab80-449a-b8c7-02e55c371cc5";

export function VapiWidget() {
  useEffect(() => {
    // Load Vapi Chat Widget SDK
    const existingScript = document.querySelector(
      'script[src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Create the vapi-widget element if it doesn't exist
    const existingWidget = document.querySelector("vapi-widget");
    if (!existingWidget) {
      const widget = document.createElement("vapi-widget");
      widget.setAttribute("public-key", VAPI_PUBLIC_KEY);
      widget.setAttribute("assistant-id", ASSISTANT_ID);
      widget.setAttribute("mode", "chat");
      widget.setAttribute("theme", "dark");
      widget.setAttribute("size", "compact");
      widget.setAttribute("position", "bottom-right");
      widget.setAttribute("title", "BookingCaddie AI");
      widget.setAttribute("chat-placeholder", "Ask about BookingCaddie...");
      widget.setAttribute("primary-color", "#0072CE");
      widget.setAttribute("accent-color", "#06B6D4");
      widget.setAttribute("button-color", "#0072CE");
      document.body.appendChild(widget);
    }

    // Fix red "End Chat" text color by injecting styles into shadow DOM
    const fixEndChatColor = () => {
      const widget = document.querySelector("vapi-widget");
      if (widget?.shadowRoot) {
        // Inject style tag if not already present
        if (!widget.shadowRoot.querySelector('#custom-vapi-styles')) {
          const style = document.createElement('style');
          style.id = 'custom-vapi-styles';
          style.textContent = `
            * { --red-500: #6b8bb8 !important; --red-600: #6b8bb8 !important; }
            [class*="text-red"], [class*="red-"] { color: #6b8bb8 !important; }
            button[class*="end"], button[class*="End"] { color: #6b8bb8 !important; }
            .text-red-500, .text-red-600 { color: #6b8bb8 !important; }
          `;
          widget.shadowRoot.appendChild(style);
        }

        // Also directly modify any red elements
        const allElements = widget.shadowRoot.querySelectorAll('*');
        allElements.forEach((el: any) => {
          const computed = window.getComputedStyle(el);
          if (computed.color === 'rgb(239, 68, 68)' || computed.color === 'rgb(220, 38, 38)') {
            el.style.setProperty('color', '#6b8bb8', 'important');
          }
        });
      }
    };

    // Run periodically to catch dynamically added elements
    const colorInterval = setInterval(fixEndChatColor, 300);

    return () => {
      // Cleanup on unmount
      clearInterval(colorInterval);
      const widget = document.querySelector("vapi-widget");
      if (widget) {
        widget.remove();
      }
    };
  }, []);

  return null;
}
