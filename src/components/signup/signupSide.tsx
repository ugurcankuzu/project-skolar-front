"use client";
import { loginSectionVariant } from "@/animations/login-signup";
import { motion } from "motion/react";
import FormLogo from "../shared/formLogo";
import SignupForm from "./signupForm";
import SignupTitle from "./signupTitle";

const SignupSideStyles = {
  mainContainer: "w-full md:w-2/5 flex flex-col gap-4 px-8",
};

export default function SignupSide() {
  return (
    <motion.main
      className={SignupSideStyles.mainContainer}
      variants={loginSectionVariant}
    >
      <FormLogo />
      <SignupTitle />
      <SignupForm />
    </motion.main>
  );
}
