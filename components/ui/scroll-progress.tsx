"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 right-0 text-xs z-50 opacity-50 dark:opacity-100">
      <motion.div
        className="bg-primary h-1"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
