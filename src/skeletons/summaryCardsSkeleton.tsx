import { enterScreen } from "@/animations/shared";
import { motion } from "motion/react";

export default function SummaryCardsSkeleton() {
  return (
    <motion.div
      variants={enterScreen}
      className="w-full h-96 sm:h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse"
    >
      <motion.div
        variants={enterScreen}
        className="bg-gray-300 rounded-xl size-full sm:h-32"
      ></motion.div>
      <motion.div
        variants={enterScreen}
        className="bg-gray-300 rounded-xl size-full sm:h-32"
      ></motion.div>
      <motion.div
        variants={enterScreen}
        className="bg-gray-300 rounded-xl size-full sm:h-32"
      ></motion.div>
    </motion.div>
  );
}
