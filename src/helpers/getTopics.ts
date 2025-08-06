export default async function getTopics(id: number) {
  const res = await fetch("/api/classes/" + id + "/topics");
  const data = await res.json();
  return data;
}
