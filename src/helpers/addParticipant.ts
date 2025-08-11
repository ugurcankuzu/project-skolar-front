export default async function addParticipant(
  formData: FormData,
  classId: number
) {
  const res = await fetch("/api/classes/" + classId + "/add-user", {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
