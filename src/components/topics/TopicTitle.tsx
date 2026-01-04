"use client";
import useClassroomDetailSWR from "@/hooks/useClassroomDetailSWR";

export default function TopicTitle({ classroomId }: { classroomId: number }) {
  const { classroom, isLoading, error } = useClassroomDetailSWR(classroomId);
  if (isLoading) return null;
  if (error) return null;
  return (
    <div className="text-2xl font-semibold text-heading mb-4">
      <h1>{classroom?.title} Topics</h1>
    </div>
  );
}
