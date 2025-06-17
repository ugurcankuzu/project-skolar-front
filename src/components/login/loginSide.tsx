"use client";
import { loginSectionVariant } from "@/animations/login-signup";
import { motion } from "motion/react";

const LoginSideStyles = {
  mainContainer: "w-full md:w-2/5 flex flex-col gap-4 px-8",
};

export default function LoginSide({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.main
      className={LoginSideStyles.mainContainer}
      variants={loginSectionVariant}
      initial="hidden"
      animate="visible"
    >{children}</motion.main>
  );
}
