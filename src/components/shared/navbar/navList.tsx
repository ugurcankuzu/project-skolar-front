"use client";
import { enterScreen } from "@/animations/shared";
import AssignmentsIcon from "@/components/icons/assignmentsIcon";
import ClassroomIcon from "@/components/icons/classroomIcon";
import HomeIcon from "@/components/icons/homeIcon";
import { motion } from "motion/react";
import NavItem from "./navItem";

export default function NavList() {
  const paths = [
    {
      id: 0,
      path: "/skolar",
      name: "Home",
      icon: HomeIcon,
      // 1. Burası ana giriş noktası olduğu için isBasePath: true eklendi.
      isBasePath: true,
    },
    {
      id: 1,
      path: "/skolar/classroom",
      name: "Classrooms",
      icon: ClassroomIcon,
      // Diğerleri için eklemeye gerek yok, varsayılanı false.
    },
    {
      id: 2,
      path: "/skolar/assignments",
      name: "Assignments",
      icon: AssignmentsIcon,
    },
  ];

  return (
    <motion.ul
      className="flex flex-col gap-2"
      variants={enterScreen}
      initial="hidden"
      animate="visible"
    >
      {paths.map((path) => (
        <NavItem
          key={path.id}
          path={path.path}
          name={path.name}
          Icon={<path.icon className="size-5" />}
          // 2. `isBasePath` prop'u NavItem component'ine aktarıldı.
          // Eğer `path.isBasePath` undefined ise, NavItem bunu false olarak kabul eder.
          isBasePath={path.isBasePath}
        />
      ))}
    </motion.ul>
  );
}
