import { Suspense } from "react";
import HeaderLogo from "./headerLogo";
import HeaderUserInfoContainer from "./userInfoContainer";
import { AnimatePresence } from "motion/react";

const HeaderStyles = {
  header: "w-full h-16 bg-surface flex items-center justify-center",

  userInfoContainer: "flex items-center gap-4",
  roleBadge: "bg-secondary/35 px-4 py-1 rounded-xl",
  roleText: "text-semibold text-sm text-primary",
  iconButtonContainer: "flex items-center justify-center",
  iconButton: "text-primary text-sm",
};

export default function Header() {
  return (
    <header className={HeaderStyles.header}>
      <div className="size-full flex items-center justify-between px-2 sm:px-4 ">
        <HeaderLogo />
        <AnimatePresence>
          <HeaderUserInfoContainer />
        </AnimatePresence>
      </div>
    </header>
  );
}
