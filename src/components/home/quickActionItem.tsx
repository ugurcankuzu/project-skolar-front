import Link from "next/link";
import { motion } from "motion/react";
import { enterScreen } from "@/animations/shared";
interface IQuickActionItem {
  title: string;
  link: string;
}
export default function QuickActionItem({ title, link }: IQuickActionItem) {
  return (
    <motion.li variants={enterScreen} className="w-full md:w-auto ">
      <Link
        href={link}
        className="bg-surface shadow px-4 py-2 rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-colors duration-300 active:bg-primary/80"
      >
        {title}
      </Link>
    </motion.li>
  );
}
