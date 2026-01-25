export default async function addTopicNote(
  formData: FormData,
  topicId: number
) {
  const res = await fetch("/api/topics/" + topicId + "/notes", {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
