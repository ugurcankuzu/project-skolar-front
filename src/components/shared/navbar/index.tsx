"use client";
import useScreen from "@/hooks/useScreen";
import NavList from "./navList";

export default function Navbar() {
  const { isMobile } = useScreen();

  return (
    <nav
      className={`min-w-64 h-full bg-surface p-4 ${
        isMobile ? "hidden" : "block"
      }`}
    >
      <NavList />
    </nav>
  );
}
