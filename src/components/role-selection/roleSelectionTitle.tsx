"use client";
import { enterScreen } from "@/animations/shared";
import { motion } from "motion/react";

const RoleSelectionTitleStyles = {
  container: "w-full flex flex-col space-y-4",
  heading: "text-4xl sm:text-5xl font-bold text-center text-heading",
  body: "text-center text-body text-md leading-relaxed",
};
export default function RoleSelectionTitle() {
  return (
    <motion.div
      className={RoleSelectionTitleStyles.container}
      variants={enterScreen}
    >
      <motion.h1
        className={RoleSelectionTitleStyles.heading}
        variants={enterScreen}
      >
        Select Your Role
      </motion.h1>
      <motion.p
        className={RoleSelectionTitleStyles.body}
        variants={enterScreen}
      >
        Please select your role. This will help us personalize your experience.
        Note that this selection cannot be changed later.
      </motion.p>
    </motion.div>
  );
}
