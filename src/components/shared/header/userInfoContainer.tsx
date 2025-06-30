"use client";

import { enterScreen } from "@/animations/shared";
import BellIcon from "@/components/icons/bellIcon";
import HamburgerMenuIcon from "@/components/icons/hamburgerMenuIcon";
import LogoutIcon from "@/components/icons/logoutIcon";
import useScreen from "@/hooks/useScreen";
import { useUserContext } from "@/store/userStore";
import { motion } from "motion/react";
export default function HeaderUserInfoContainer() {
  const userContext = useUserContext();
  const screenSize = useScreen();
  return (
    <motion.div
      className="flex items-center justify-end gap-4 flex-1"
      variants={enterScreen}
      initial="hidden"
      animate="visible"
    >
      {userContext.user && !screenSize.isMobile ? (
        <>
          <div className="bg-secondary/35 px-4 py-1 rounded-xl">
            <p className="text-semibold text-sm text-primary">
              {userContext.user?.isEducator ? "Educator" : "Student"}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-primary text-sm">
              <BellIcon />
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-primary text-sm">
              <LogoutIcon />
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <button className="text-primary text-sm">
            <HamburgerMenuIcon />
          </button>
        </div>
      )}
    </motion.div>
  );
}
