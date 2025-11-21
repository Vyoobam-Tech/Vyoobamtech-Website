import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedBox({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
