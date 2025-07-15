import TDashboardSummaryEducator from "@/types/dashboardSummaryEducator";
import fetchWrapper from "./fetchWrapper";
import getJWT from "./getJWT";

export default async function getDashboardSummaryEducator() {
  const tkn = await getJWT();
  const response = await fetchWrapper<TDashboardSummaryEducator>({
    url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/summary/educator`,
    method: "GET",
    parseJson: true,
    headers: {
      Authorization: "Bearer " + tkn,
    },
  });
  return response;
}
