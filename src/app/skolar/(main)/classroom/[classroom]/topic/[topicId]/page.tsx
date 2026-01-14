import { notFound } from "next/navigation";
import TopicDetailsView from "@/views/Classrooms/Topics/TopicDetailsView";

export default async function TopicDetailsPage({
  params,
}: {
  params: Promise<{ classroom: string; topicId: string }>;
}) {
  const { classroom, topicId } = await params;
  const classroomIdInt = parseInt(classroom, 10);
  const topicIdInt = parseInt(topicId, 10);

  if (Number.isNaN(classroomIdInt) || Number.isNaN(topicIdInt)) {
    notFound();
  }

  return (
    <TopicDetailsView
      settings={{ classroomId: classroomIdInt, topicId: topicIdInt }}
    />
  );
}
