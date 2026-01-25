export default async function removeTopicNote(
  topicId: number,
  topicNoteId: number
) {
  const res = await fetch(
    "/api/topics/" + topicId + "/notes/" + topicNoteId,
    {
      method: "DELETE",
      credentials: "include",
    }
  );
  const data = await res.json();
  return data;
}
