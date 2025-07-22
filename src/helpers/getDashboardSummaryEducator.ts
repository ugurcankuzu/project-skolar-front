
export default async function getDashboardSummaryEducator() {
  const res = await fetch("/api/summary/educator", {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data;
  /*  const response = await fetchWrapper<TDashboardSummaryEducator>({
    url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/summary/educator`,
    method: "GET",
    parseJson: true,
    
  });
  return response; */
}
