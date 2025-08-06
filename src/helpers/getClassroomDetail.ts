export default async function getClassroomDetail(id: number) {
  const res = await fetch(`/api/classes/${id}`, {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
