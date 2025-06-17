import { Variant, Variants } from "motion/react";

export const loginSectionVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const loginSectionChildVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const loginHeroImageChange: Variant = {
  opacity: [0, 1],
  y: [50, 0],
  transition: { duration: 0.8, ease: "easeOut" },
};
