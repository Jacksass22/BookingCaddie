"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variant } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  direction?: "top" | "bottom";
}

const BlurText = ({
  text,
  className = "",
  delay = 0,
  direction = "bottom",
}: BlurTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  const defaultVariants: { hidden: Variant; visible: Variant } = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: direction === "top" ? -20 : 20,
    },
    visible: (i: number) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.08,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={defaultVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default BlurText;
