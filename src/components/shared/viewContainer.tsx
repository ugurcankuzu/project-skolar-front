"use client";
import { containerVariant } from "@/animations/shared";
import { HTMLMotionProps, Variants, motion } from "motion/react";

interface IViewContainer extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: Variants;
}

export default function ViewContainer({
  children,
  variant = containerVariant,
  ...props
}: IViewContainer) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className="w-full max-w-screen-xl px-4 py-8 space-y-4 md:space-y-12"
      {...props}
    >
      {children}
    </motion.div>
  );
}
