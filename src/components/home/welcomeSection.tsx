"use client";
import useNotificationsSWR from "@/hooks/useNotificationsSWR";
import { useUserContext } from "@/store/userStore";
import Pill from "../shared/pill";

export default function WelcomeSection() {
  const userStore = useUserContext();
  const { notifications, isLoading, error } = useNotificationsSWR();
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
      <p className="text-3xl font-bold text-heading">{`${getGreetingByTimeOfDay()} ${
        userStore.user?.firstName
      }!`}</p>
      {notifications && notifications.length > 0 && (
        <Pill
          color="warning"
          text={`${notifications.length} New Notifications`}
          dot={true}
        />
      )}
    </div>
  );
}
