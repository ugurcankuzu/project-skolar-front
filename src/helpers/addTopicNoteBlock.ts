export default async function addTopicNoteBlock(
  formData: FormData,
  topicId: number,
) {
  //api/topics/{classId}/{topicId}/notes/{toicNoteId}/blocks
  const res = await fetch("/api/topics/" + topicId + "/blocks", {
    method: "POST",
    body: formData,
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
