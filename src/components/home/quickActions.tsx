"use client";
import { useUserContext } from "@/store/userStore";
import SparklesIcon from "../icons/sparklesIcon";
import Link from "next/link";
import QuickActionItem from "./quickActionItem";

export default function QuickActions() {
  const userStore = useUserContext();
  const educatorActions = [
    {
      title: "Create Class",
      link: "/skolar/classroom/create",
    },
    {
      title: "Create Assignment",
      link: "/skolar/assignment/create",
    },
  ];
  const studentActions = [
    { title: "Join Class", link: "/skolar/classroom/join" },
    { title: "My Assignments", link: "/skolar/assignment" },
  ];
  const actions = userStore.user?.isEducator ? educatorActions : studentActions;
  return (
    <div className="w-full bg-background space-y-4 rounded-2xl p-4">
      <div className="flex items-center gap-2 font-semibold text-heading">
        <span>
          <SparklesIcon />
        </span>
        <h2>Quick Actions</h2>
      </div>
      <div>
        <ul className="flex flex-col md:flex-row items-center gap-4">
          {actions.map((action) => (
            <QuickActionItem key={action.title} {...action} />
          ))}
        </ul>
      </div>
    </div>
  );
}
