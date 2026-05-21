import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  const directionMap = {
    up: { y: 32, x: 0 },
    down: { y: -32, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = prefersReduced
    ? { opacity: 0 }
    : { opacity: 0, ...directionMap[direction] };

  const animate = prefersReduced
    ? { opacity: isInView ? 1 : 0 }
    : { opacity: isInView ? 1 : 0, x: isInView ? 0 : directionMap[direction].x, y: isInView ? 0 : directionMap[direction].y };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: prefersReduced ? 0.15 : 0.6, delay: prefersReduced ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
