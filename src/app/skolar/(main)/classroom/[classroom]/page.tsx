import { parseClassroomLink } from "@/helpers/classroomLinkGenerate";
import getProfile from "@/helpers/getProfile";
import ClassroomDetailPageView from "@/views/Classrooms/ClassroomDetail/ClassroomDetailPageView";
import { notFound } from "next/navigation";

export default async function ClassroomDetailPage({
  params,
}: {
  params: Promise<{ classroom: string }>;
}) {
  const { classroom } = await params;
  let classroomId;
  try {
    classroomId = parseClassroomLink(classroom).id;
  } catch (err) {
    console.log(err);
    notFound();
  }

  return <ClassroomDetailPageView />;
}
