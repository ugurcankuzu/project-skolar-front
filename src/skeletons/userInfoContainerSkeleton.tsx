import { enterScreen } from "@/animations/shared";
import { motion } from "motion/react";

export default function UserInfoSkeleton() {
  return (
    <motion.div
      className="flex items-center justify-end gap-4 flex-1"
      variants={enterScreen}
      exit={{
        y: "-100%",
        opacity: 0,
      }}
    >
      <div className="w-20 h-8 bg-gray-300 rounded-xl animate-pulse"></div>
      <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
      <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
    </motion.div>
  );
}
