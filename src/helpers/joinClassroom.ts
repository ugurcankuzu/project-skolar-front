export default async function joinClassroom(joinCode: string) {
  const res = await fetch("/api/classes/join", {
    method: "POST",
    body: JSON.stringify({ joinCode }),
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
