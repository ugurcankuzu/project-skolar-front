export default async function getClassroomsSummary() {
  const res = await fetch("/api/classes/my-classes", {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data;
  /* const res = await fetchWrapper<TClassroomSummary[]>({
    url: process.env.NEXT_PUBLIC_API_URL + "/classes/my-classes",
    method: "GET",
    parseJson: true,
  });
  return res; */
}
