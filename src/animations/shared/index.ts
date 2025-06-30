import { Variant, Variants } from "motion/react";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const expandCircles: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 1 } },
};

export const loaderContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Her bir çocuk arasında 0.2sn bekle
    },
  },
};
export const loader: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: [0, 0.5, 1, 0.5, 0],
    y: [0, -5, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeOut",
    },
  },
};
export const enterScreen: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};
