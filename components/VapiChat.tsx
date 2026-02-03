"use client";

import { useEffect, useState, ComponentType } from "react";

const VAPI_PUBLIC_KEY = "daf87472-30a2-44a9-96bb-1b832815c8d1";
const ASSISTANT_ID = "1fa0e900-ab80-449a-b8c7-02e55c371cc5";

export function VapiChat() {
  const [Widget, setWidget] = useState<ComponentType<any> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadWidget = async () => {
      try {
        const mod = await import("@vapi-ai/client-sdk-react");
        if (mounted && mod.VapiWidget) {
          setWidget(() => mod.VapiWidget);
        }
      } catch (err) {
        console.error("Failed to load VapiWidget:", err);
        if (mounted) {
          setError("Failed to load chat widget. Please try refreshing the page.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadWidget();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="w-full h-[500px] rounded-2xl border border-white/10 bg-[#0d1117] flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-cyan-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-steel">Loading AI assistant...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !Widget) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="w-full h-[400px] rounded-2xl border border-white/10 bg-[#0d1117] flex items-center justify-center">
          <div className="text-center px-8">
            <p className="text-white mb-2">Unable to load AI chat</p>
            <p className="text-steel text-sm mb-4">{error || "Please try again later"}</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-accent/20 text-cyan-accent rounded-lg hover:bg-cyan-accent/30 transition-colors"
            >
              Contact us instead
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-[#0d1117]">
        <Widget
          publicKey={VAPI_PUBLIC_KEY}
          assistantId={ASSISTANT_ID}
          mode="chat"
          theme="dark"
          size="full"
          chatPlaceholder="Ask about BookingCaddie..."
          chatFirstMessage="Hi! I'm BookingCaddie's AI assistant. Ask me anything about our AI voice receptionist for golf courses."
          accentColor="#06B6D4"
          baseBgColor="#0d1117"
          borderRadius="medium"
        />
      </div>
      <p className="text-center text-sm text-steel mt-6">
        Have a specific question?{" "}
        <a href="/contact" className="text-cyan-accent hover:underline">
          Contact our team
        </a>
        .
      </p>
    </div>
  );
}
