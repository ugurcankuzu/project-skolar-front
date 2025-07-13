import formatTimeAgo from "@/helpers/getTimeAgo";
import TNotification from "@/types/Notification";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import NotificationItem from "./notificationItem";

interface INotificationWindow {
  notifications: TNotification[] | undefined;
  setWindowOpen: () => void;
}
export default function NotificationWindow({
  notifications,
  setWindowOpen,
}: INotificationWindow) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setWindowOpen();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setWindowOpen]);

  return (
    <div
      className="absolute top-full right-0 bg-white shadow-md rounded-md p-2 z-10 w-64
          "
      ref={modalRef}
    >
      {notifications && notifications.length > 0 && (
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </ul>
      )}
      {notifications && notifications.length === 0 && (
        <p className="text-center text-gray-500 text-sm py-2">
          No new notifications
        </p>
      )}
    </div>
  );
}
