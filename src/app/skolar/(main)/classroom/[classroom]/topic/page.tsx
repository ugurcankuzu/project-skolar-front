import { parseClassroomLink } from "@/helpers/classroomLinkGenerate";
import ClassroomTopicsView from "@/views/Classrooms/Topics/ClassroomTopicsView";
import { notFound } from "next/navigation";

export default async function TopicsDashboardPage({
  params,
}: {
  params: Promise<{ classroom: string }>;
}) {
  const { classroom } = await params;
  const classroomId = parseInt(classroom, 10);

  if (Number.isNaN(classroomId)) {
    notFound();
  }
  return <ClassroomTopicsView settings={{ classroomId: classroomId }} />;
}
