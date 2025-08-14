export default async function removeTopic(topicId: number, classId: number) {
  const res = await fetch("/api/topics/" + classId + "/" + topicId, {
    method: "DELETE",
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
