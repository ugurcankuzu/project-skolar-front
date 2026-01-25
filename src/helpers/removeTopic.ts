export default async function removeTopic(topicId: number) {
  const res = await fetch("/api/topics/" + topicId, {
    method: "DELETE",
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
