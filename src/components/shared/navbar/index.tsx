"use client";
import useScreen from "@/hooks/useScreen";
import NavList from "./navList";

export default function Navbar() {
  const { currentWidth } = useScreen();

  return (
    <nav
      className={`min-w-64 h-full bg-surface p-4 border-r border-gray-200
       ${currentWidth < 768 ? "hidden" : "block"}`}
    >
      <NavList />
    </nav>
  );
}
