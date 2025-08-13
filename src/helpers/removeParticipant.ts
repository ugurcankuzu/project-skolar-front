export default async function removeParticipant(
  participantId: number,
  classId: number
) {
  const res = await fetch("/api/classes/" + classId + "/remove-user", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: participantId }),
    credentials: "include",
  });
  const data = await res.json();
  return data;
}
