"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function TryAIButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-40 sm:bottom-auto sm:top-24 sm:right-6">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-defiant-blue to-cyan-accent rounded-full shadow-lg shadow-cyan-accent/20 hover:shadow-cyan-accent/40 transition-shadow"
          >
            <Phone className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white whitespace-nowrap">Try AI</span>
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-gradient-to-r from-navy/95 to-dark-bg/95 backdrop-blur-md border border-cyan-accent/30 rounded-2xl p-4 shadow-xl shadow-cyan-accent/10 max-w-[260px] sm:max-w-none"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-defiant-blue to-cyan-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-cyan-accent">Try our AI</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-steel hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <a
              href="tel:+18438688065"
              className="block text-xl sm:text-2xl font-bold text-white hover:text-cyan-accent transition-colors mb-2"
            >
              (843) 868-8065
            </a>

            <p className="text-xs text-steel">
              Call now to experience our AI assistant
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
