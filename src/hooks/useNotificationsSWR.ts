import getNotifications from "@/helpers/getNotifications";
import swrFetchAdapter from "@/helpers/swrFetchAdapter";
import TNotification from "@/types/Notification";
import useSWR from "swr";

const SWR_KEY = "notifications";

export default function useNotificationsSWR() {
  const { data, isLoading, error } = useSWR(
    SWR_KEY,
    swrFetchAdapter<TNotification[], []>(getNotifications),
    {
      onError: (err) => console.log(err),
    }
  );

  return {
    notifications: data,
    isLoading,
    error,
  };
}
