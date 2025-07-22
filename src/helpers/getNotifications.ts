import { IApiResponse } from "@/types/fetchWrapper";
import TNotification from "@/types/Notification";

export default async function getNotifications(): Promise<
  IApiResponse<TNotification[]>
> {
  const res = await fetch("/api/notifications", {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data;
  /* const res = await fetchWrapper<TNotification[]>({
    url: `${process.env.NEXT_PUBLIC_API_URL}/notifications`,
    method: "GET",
    
  });
  return res; /** res => success,message,data */
}
