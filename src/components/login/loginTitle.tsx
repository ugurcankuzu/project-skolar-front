"use client"
import { loginSectionChildVariant } from "@/animations/login-signup";
import { motion } from "motion/react";
import Link from "next/link";

const LoginTitleStyles = {
  title: "leading-8 text-xl text-heading font-bold",
  subtitle: "font-light text-body",
  signupLink: "text-accent",
};

export default function LoginTitle() {
  return (
    <motion.div variants={loginSectionChildVariant}>
      <p className={LoginTitleStyles.title}>Log in to your account</p>
      <p className={LoginTitleStyles.subtitle}>
        Don't you have an account ?{" "}
        <span className={LoginTitleStyles.signupLink}>
          <Link href={"/signup"}>Sign up</Link>
        </span>
      </p>
    </motion.div>
  );
}
