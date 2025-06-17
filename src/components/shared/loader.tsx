"use client";
import { loader, loaderContainer } from "@/animations/shared";
import { motion } from "motion/react";

const LoaderStyles = {
  container: "w-full h-full flex items-center justify-center gap-2",
  dot: "w-[15px] h-[15px] bg-accent rounded-full",
};

export default function Loader() {
  return (
    <motion.div
      className={LoaderStyles.container}
      variants={loaderContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={LoaderStyles.dot} variants={loader} />
      <motion.div className={LoaderStyles.dot} variants={loader} />
      <motion.div className={LoaderStyles.dot} variants={loader} />
    </motion.div>
  );
}
