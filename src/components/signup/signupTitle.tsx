import { loginSectionChildVariant } from "@/animations/login-signup";
import { motion } from "motion/react";
import Link from "next/link";

const SignupTitleStyles = {
  title: "leading-8 text-xl text-heading font-bold",
  subtitle: "font-light text-body",
  loginLink: "text-accent",
};

export default function SignupTitle() {
  return (
    <motion.div variants={loginSectionChildVariant}>
      <p className={SignupTitleStyles.title}>Create an account</p>
      <p className={SignupTitleStyles.subtitle}>
        Already have an account ?{" "}
        <span className={SignupTitleStyles.loginLink}>
          <Link href={"/login"}>Log in</Link>
        </span>
      </p>
    </motion.div>
  );
}
