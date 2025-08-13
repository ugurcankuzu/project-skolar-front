export default async function addTopicNote(
  formData: FormData,
  topicId: number
) {
  const classId = formData.get("classId");
  const res = await fetch("/api/topics/" + classId + "/" + topicId + "/notes", {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
