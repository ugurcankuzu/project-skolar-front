export default async function getTopics(id: number) {
  const res = await fetch("/api/topics/class/" + id);
  const data = await res.json();
  return data;
}
