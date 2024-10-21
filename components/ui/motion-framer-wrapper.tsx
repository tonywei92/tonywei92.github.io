"use client";

import { motion, HTMLMotionProps } from "framer-motion";

export function MotionFramerWrapper({
  children,
  ...props
}: {
  children: React.ReactNode;
} & HTMLMotionProps<"div">) {
  return <motion.div {...props}>{children}</motion.div>;
}
