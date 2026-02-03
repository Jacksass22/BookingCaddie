"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  direction = "up",
  distance = 100,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const getTransform = () => {
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 0.5], [distance, 0]);
      case "down":
        return useTransform(scrollYProgress, [0, 0.5], [-distance, 0]);
      case "left":
        return useTransform(scrollYProgress, [0, 0.5], [distance, 0]);
      case "right":
        return useTransform(scrollYProgress, [0, 0.5], [-distance, 0]);
      default:
        return useTransform(scrollYProgress, [0, 0.5], [distance, 0]);
    }
  };

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = direction === "up" || direction === "down" ? getTransform() : 0;
  const x = direction === "left" || direction === "right" ? getTransform() : 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, x }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
