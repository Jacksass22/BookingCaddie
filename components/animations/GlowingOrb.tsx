"use client";

import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: number;
  color?: string;
  className?: string;
}

const GlowingOrb = ({
  size = 400,
  color = "cyan",
  className = "",
}: GlowingOrbProps) => {
  const colors: Record<string, { inner: string; outer: string }> = {
    cyan: {
      inner: "rgba(6, 182, 212, 0.4)",
      outer: "rgba(6, 182, 212, 0.1)",
    },
    blue: {
      inner: "rgba(59, 130, 246, 0.4)",
      outer: "rgba(59, 130, 246, 0.1)",
    },
    purple: {
      inner: "rgba(139, 92, 246, 0.4)",
      outer: "rgba(139, 92, 246, 0.1)",
    },
  };

  const selectedColor = colors[color] || colors.cyan;

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${selectedColor.inner} 0%, ${selectedColor.outer} 40%, transparent 70%)`,
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default GlowingOrb;
