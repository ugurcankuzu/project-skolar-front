import TNotification from "@/types/Notification";
import fetchWrapper from "./fetchWrapper";
import getJWT from "./getJWT";
import { IApiResponse } from "@/types/fetchWrapper";

export default async function getNotifications(): Promise<
  IApiResponse<TNotification[]>
> {
  const tkn = await getJWT();
  const res = await fetchWrapper<TNotification[]>({
    url: `${process.env.NEXT_PUBLIC_API_URL}/notifications`,
    method: "GET",
    headers: {
      Authorization: "Bearer " + tkn,
    },
  });
  return res; /** res => success,message,data */
}
