"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { enterScreen } from "@/animations/shared";
import Link from "next/link";
const HeaderLogoStyles = {
  logoContainer: "relative w-fit h-full",
  logo: "w-full h-full",
};

export default function HeaderLogo() {
  return (
    <motion.div
      className={HeaderLogoStyles.logoContainer}
      variants={enterScreen}
      initial="hidden"
      animate="visible"
    >
      <Link href={"/skolar"}>
        <Image
          src={"/logo-mini.png"}
          alt={"Logo"}
          className={HeaderLogoStyles.logo}
          width={100}
          height={100}
        />
      </Link>
    </motion.div>
  );
}
