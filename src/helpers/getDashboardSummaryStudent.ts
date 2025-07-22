
export default async function getDashboardSummaryStudent() {
  const res = await fetch("/api/summary/student", {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data;
  /* const res = await fetchWrapper<TDashboardSummaryStudent>({
    url: `${process.env.NEXT_PUBLIC_API_URL}/dashboard/summary/student`,
    method: "GET",
    parseJson: true,
  });
  return res; */
}
