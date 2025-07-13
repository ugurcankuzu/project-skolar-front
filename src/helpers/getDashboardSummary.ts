import TDashboardSummary from "@/types/dashboardSummary";
import fetchWrapper from "./fetchWrapper";
import getJWT from "./getJWT";

export default async function getDashboardSummary() {
  const tkn = await getJWT();
  const response = await fetchWrapper<TDashboardSummary>({
    url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/summary`,
    method: "GET",
    parseJson: true,
    headers: {
      Authorization: "Bearer " + tkn,
    },
  });
  return response;
}
