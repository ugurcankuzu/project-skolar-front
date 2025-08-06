function convertTurkishChars(text: string): string {
  return text
    .replace(/[ğĞ]/g, "g")
    .replace(/[üÜ]/g, "u")
    .replace(/[şŞ]/g, "s")
    .replace(/[ıI]/g, "i")
    .replace(/[İ]/g, "i")
    .replace(/[öÖ]/g, "o")
    .replace(/[çÇ]/g, "c");
}
export default function classroomLinkGenerate(
  classroomId: number,
  classroomName: string
) {
  const convertedName = convertTurkishChars(classroomName);
  const splittedName = convertedName.split(" ");
  const joinedName = splittedName.join("-");
  // Clear special chars such as (:, ; etc.)
  const clearedName = joinedName.replace(/[^a-zA-Z0-9-]/g, "");
  // Remove multiple dashes (but keep single ones)
  const singleDashedName = clearedName.replace(/--+/g, "-");
  const finalName = singleDashedName.toLowerCase();
  // Remove dash from start and end
  const trimmedName = finalName.replace(/^-+|-+$/g, "");

  // Use double dash to separate name from ID
  return `/skolar/classroom/${trimmedName}--${classroomId}`;
}

export function  parseClassroomLink(url: string) {
  // Extract the slug part: /classroom/math-class--123 → math-class--123
  const slug = url.replace("/skolar/classroom/", "");

  // Split by double dash
  const lastDoubleDashIndex = slug.lastIndexOf("--");

  if (lastDoubleDashIndex === -1) {
    throw new Error("Invalid classroom URL format");
  }

  const name = slug.substring(0, lastDoubleDashIndex);
  const id = parseInt(slug.substring(lastDoubleDashIndex + 2));

  if (isNaN(id)) {
    throw new Error("Invalid classroom ID in URL");
  }

  return { name, id };
}
