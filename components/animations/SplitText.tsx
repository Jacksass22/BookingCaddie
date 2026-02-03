"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, Variant } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

const SplitText = ({
  text,
  className = "",
  delay = 0,
  charDelay = 0.03,
}: SplitTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Trigger animation after mount + delay to handle hero elements
  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  const characters = text.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: charDelay,
        delayChildren: delay,
      },
    },
  };

  const charVariants: { hidden: Variant; visible: Variant } = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      className={`inline-block ${className}`}
      style={{ perspective: "1000px" }}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default SplitText;
