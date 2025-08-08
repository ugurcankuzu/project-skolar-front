export default async function getTopics(id: number) {
  const res = await fetch("/api/topics/" + id);
  const data = await res.json();
  return data;
}
