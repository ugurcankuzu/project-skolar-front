"use client"
import { loginSectionChildVariant } from "@/animations/login-signup";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "@/assets/img/skolar-logo.png";
export default function FormLogo() {
  return (
    <motion.div variants={loginSectionChildVariant}>
      <Image src={logo} alt="" />
    </motion.div>
  );
}
