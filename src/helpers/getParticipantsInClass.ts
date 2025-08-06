export default async function getParticipantsInClass(classId: number) {
  const res = await fetch("/api/classes/" + classId + "/participants");
  const data = await res.json();
  return data;
}
