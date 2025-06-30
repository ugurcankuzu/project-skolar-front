"use client";
import { enterScreen } from "@/animations/shared";
import { motion } from "motion/react";
export default function RoleContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="size-full md:max-w-screen-md bg-surface flex flex-col items-center justify-center gap-8"
      variants={enterScreen}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
