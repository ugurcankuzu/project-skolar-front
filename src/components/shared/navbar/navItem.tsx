// NavItem.tsx

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { JSX } from "react";
import { enterScreen } from "@/animations/shared";
import { usePathname } from "next/navigation";

interface INavItem {
  path: string;
  name: string;
  Icon?: JSX.Element;
  // Opsiyonel olarak ana giriş noktası olduğunu belirten bir prop ekleyebiliriz.
  isBasePath?: boolean;
}

export default function NavItem({
  path,
  name,
  Icon,
  isBasePath = false,
}: INavItem) {
  const baseStyle =
    "rounded-xl cursor-pointer px-4 py-2 font-semibold transition-bg duration-300 flex items-center gap-2";
  const activePathStyle = "bg-primary text-white hover:bg-primary/80";
  const inactivePathStyle = "text-heading hover:bg-primary/35";

  const currentPath = usePathname();

  // YENİ VE DAHA AKILLI AKTİFLİK MANTIĞI
  // Eğer link bir "ana giriş noktası" ise (isBasePath=true), sadece tam eşleşmede aktif olur.
  // Değilse, mevcut yolun bu linkin yolu ile başlayıp başlamadığını kontrol eder.
  const isActive = isBasePath
    ? currentPath === path
    : currentPath.startsWith(path);

  return (
    <Link href={path}>
      <motion.li
        className={`${baseStyle} ${
          isActive ? activePathStyle : inactivePathStyle
        }`}
        variants={enterScreen}
      >
        {Icon}
        {name}
      </motion.li>
    </Link>
  );
}
