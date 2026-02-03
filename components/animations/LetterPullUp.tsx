"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface LetterPullUpProps {
  text: string;
  className?: string;
  delay?: number;
}

const LetterPullUp = ({ text, className = "", delay = 0 }: LetterPullUpProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay + i * 0.05,
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <div ref={ref} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em]">
          <motion.span
            variants={pullupVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            custom={i}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default LetterPullUp;
