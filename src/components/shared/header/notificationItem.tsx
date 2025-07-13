import formatTimeAgo from "@/helpers/getTimeAgo";
import TNotification from "@/types/Notification";
import Link from "next/link";

interface INotificationItem {
  notification: TNotification;
}
export default function NotificationItem({ notification }: INotificationItem) {
  return (
    <Link
      href={notification.link ? notification.link : "#"}
    >
      <li className="py-2 text-sm p-2 rounded-md my-2 hover:bg-gray-100 space-y-1">
        <p>{notification.title}</p>
        <p className="text-heading">{notification.message}</p>
        <p className="text-gray-500 text-xs">
          {formatTimeAgo(notification.createdAt)}
        </p>
      </li>
    </Link>
  );
}
