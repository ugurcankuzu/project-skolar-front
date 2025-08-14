export default async function removeTopicNote(
  topicId: number,
  topicNoteId: number,
  classId: number
) {
  const res = await fetch(
    "/api/topics/" + classId + "/" + topicId + "/notes/" + topicNoteId,
    {
      method: "DELETE",
      credentials: "include",
    }
  );
  const data = await res.json();
  return data;
}
