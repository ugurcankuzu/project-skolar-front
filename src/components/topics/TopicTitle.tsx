"use client";
import useClassroomDetailSWR from "@/hooks/useClassroomDetailSWR";
import TopicTitleSkeleton from "@/skeletons/topics/TopicTitleSkeleton";
import { notFound } from "next/navigation";

export default function TopicTitle({ classroomId }: { classroomId: number }) {
  const { classroom, isLoading, error } = useClassroomDetailSWR(classroomId);
  if (isLoading) return <TopicTitleSkeleton />;
  //Maybe specific not found page
  if (error) return notFound();
  return (
    <div className="text-2xl font-semibold text-heading mb-4">
      <h1>{classroom?.title} Topics</h1>
    </div>
  );
}
