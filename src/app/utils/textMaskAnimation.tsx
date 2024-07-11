import React, { useRef } from "react";
import { useInView, motion } from "framer-motion";

interface MaskTextProps {
  phrases: string[];
  className?: string; // Optional className prop
}
export const animation = {
  initial: { y: "100%" },
  enter: (i: number) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.075 * i,
    },
  }),
};
const MaskText: React.FC<MaskTextProps> = ({ phrases, className }) => {
  const body = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(body, { once: true, margin: "75%" });

  return (
    <div ref={body} className={`flex ${className || ""}`}>
      {" "}
      {/* Apply className here */}
      {phrases.map((phrase, index) => (
        <span key={index} className="overflow-hidden">
          <motion.p
            className="inline-block"
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </span>
      ))}
    </div>
  );
};

export default MaskText;
