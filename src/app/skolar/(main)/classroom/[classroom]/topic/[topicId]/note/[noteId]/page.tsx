import { notFound } from "next/navigation";
import NotebookPageView from "@/views/Notebook/NotebookPageView";

export default async function NotebookPage({
  params,
}: {
  params: Promise<{ classroom: string; topicId: string; noteId: string }>;
}) {
  const { classroom, topicId, noteId } = await params;
  const classroomIdInt = parseInt(classroom, 10);
  const topicIdInt = parseInt(topicId, 10);
  const noteIdInt = parseInt(noteId, 10);

  if (
    Number.isNaN(classroomIdInt) ||
    Number.isNaN(topicIdInt) ||
    Number.isNaN(noteIdInt)
  ) {
    notFound();
  }

  return (
    <NotebookPageView
      settings={{
        classroomId: classroomIdInt,
        topicId: topicIdInt,
        noteId: noteIdInt,
      }}
    />
  );
}
