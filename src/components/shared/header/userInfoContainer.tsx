"use client";

import { enterScreen } from "@/animations/shared";
import BellIcon from "@/components/icons/bellIcon";
import LogoutIcon from "@/components/icons/logoutIcon";
import useScreen from "@/hooks/useScreen";
import { useUserContext } from "@/store/userStore";
import { motion } from "motion/react";
import Pill from "../pill";
import MobileHeaderMenu from "./mobileHeaderMenu";
import useNotificationsSWR from "@/hooks/useNotificationsSWR";
import UserInfoSkeleton from "@/skeletons/userInfoContainerSkeleton";
export default function HeaderUserInfoContainer() {
  const userContext = useUserContext();
  const screenSize = useScreen();
  const { notifications, isLoading } = useNotificationsSWR();
  if (isLoading) return <UserInfoSkeleton />;
  return (
    <motion.div
      className="flex items-center justify-end gap-4 flex-1"
      variants={enterScreen}
      initial="hidden"
      animate="visible"
    >
      {userContext.user && !screenSize.isMobile ? (
        <>
          <Pill
            text={userContext.user?.isEducator ? "Educator" : "Student"}
            color="primary"
            dot={false}
          />
          {/* <div className="bg-secondary/35 px-4 py-1 rounded-xl">
            <p className="text-semibold text-sm text-primary">
              {userContext.user?.isEducator ? "Educator" : "Student"}
            </p>
          </div> */}
          <div className="flex items-center justify-center relative">
            <button className="text-primary text-sm">
              <BellIcon />
              <span className="absolute -top-1 -right-1 bg-error text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {notifications?.length}
              </span>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-primary text-sm">
              <LogoutIcon />
            </button>
          </div>
        </>
      ) : (
        <MobileHeaderMenu />
      )}
    </motion.div>
  );
}
