"use client";
import { enterScreen } from "@/animations/shared";
import useNotificationsSWR from "@/hooks/useNotificationsSWR";
import { useUserContext } from "@/store/userStore";
import { motion } from "motion/react";
import Pill from "../shared/pill";
import WelcomeSectionSkeleton from "@/skeletons/welcomeSectionSkeleton";

export default function WelcomeSection() {
  const { user } = useUserContext();
  const { notifications, isLoading, error } = useNotificationsSWR();
  const getSubtitle = () => {
    const educatorSubtitle = "Manage your classrooms and assignments";
    const studentSubtitle =
      "Attend your classes, complete assignments, and track your progress.";
    return user?.isEducator ? educatorSubtitle : studentSubtitle;
  };
  const getGreetingByTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  return (
    <div className="w-full rounded-2xl space-y-4">
      {user && (
        <>
          <p className="text-3xl font-bold text-heading">{`${getGreetingByTimeOfDay()} ${
            user?.firstName
          }!`}</p>
          <p className="text-gray-400">{getSubtitle()}</p>
          {notifications && notifications.length > 0 && (
            <Pill
              color="warning"
              text={`${notifications.length} New Notifications`}
              dot={true}
            />
          )}
        </>
      )}
      {!user && <WelcomeSectionSkeleton />}
    </div>
  );
}
