export default async function AddTopic(formData: FormData, classId: number) {
  const res = await fetch("/api/topics/class/" + classId, {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
