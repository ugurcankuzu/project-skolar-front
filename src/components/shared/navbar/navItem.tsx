import isCurrentPath from "@/helpers/isCurrentPath";
import Link from "next/link";
import { motion } from "motion/react";
import { JSX } from "react";
import { enterScreen } from "@/animations/shared";
interface INavItem {
  path: string;
  name: string;
  Icon?: JSX.Element;
}
export default function NavItem({ path, name, Icon }: INavItem) {
  const baseStyle =
    "rounded-xl cursor-pointer px-4 py-2 font-semibold transition-bg duration-300 flex items-center gap-2";
  const activePathStyle = "bg-primary text-white  hover:bg-primary/80";
  const inactivePathStyle = "text-heading hover:bg-primary/35 ";
  const currentPath = window.location.pathname;

  return (
    <Link href={path}>
      <motion.li
        className={`${baseStyle} ${
          isCurrentPath(path, currentPath) ? activePathStyle : inactivePathStyle
        }`}
        variants={enterScreen}
      >
        {Icon}
        {name}
      </motion.li>
    </Link>
  );
}
