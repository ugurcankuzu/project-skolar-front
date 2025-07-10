"use client";
import { useUserContext } from "@/store/userStore";
import Pill from "../shared/pill";

export default function WelcomeSection() {
  const userStore = useUserContext();
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
    <div className="w-full h-96 bg-primary-light rounded-2xl">
      <p className="text-3xl font-bold text-heading">{`${getGreetingByTimeOfDay()} ${
        userStore.user?.firstName
      }!`}</p>
      <div className="w-full flex items-center flex-wrap gap-2 py-2">
        <Pill text="2 Gönderim" color="warning" dot={true} />
        <Pill text="2 Ödev" color="warning" dot={true} />
      </div>
    </div>
  );
}
