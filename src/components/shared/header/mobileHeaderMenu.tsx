import HamburgerMenuIcon from "@/components/icons/hamburgerMenuIcon";
import { useState } from "react";
import MobileNavbar from "../navbar/mobileNavbar";

export default function MobileHeaderMenu() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <div className="flex items-center justify-center">
      <button className="text-primary text-sm" onClick={toggleNavbar}>
        <HamburgerMenuIcon />
      </button>
      {isNavbarOpen && <MobileNavbar />}
    </div>
  );
}
