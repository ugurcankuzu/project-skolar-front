"use client";
import ViewContainer from "@/components/shared/viewContainer";
import useTopicsSWR from "@/hooks/useTopicsSWR";
import { notFound } from "next/navigation";
import TopicNotesList from "@/components/topics/TopicNotesList";
import Link from "next/link";

interface ITopicDetailsViewSettings {
  classroomId: number;
  topicId: number;
}

interface ITopicDetailsView {
  settings: ITopicDetailsViewSettings;
}

export default function TopicDetailsView({ settings }: ITopicDetailsView) {
  const { topics, isLoading } = useTopicsSWR(settings.classroomId);

  if (isLoading) {
    return (
      <ViewContainer>
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="space-y-4 pt-4">
            <div className="h-24 bg-gray-200 rounded-xl"></div>
            <div className="h-24 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </ViewContainer>
    );
  }

  const topic = topics?.find((t) => t.id === settings.topicId);

  if (!topic) {
    return notFound();
  }

  return (
    <div className="size-full flex flex-col items-center">
      <ViewContainer>
        <div className="mb-6">
          <Link
            href={`/skolar/classroom/${settings.classroomId}/topic`}
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Topics
          </Link>
          <h1 className="text-3xl font-bold text-heading mb-2">
            {topic.title}
          </h1>
          {topic.description && (
            <p className="text-body text-gray-600">{topic.description}</p>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-heading">Notes</h2>
          <TopicNotesList notes={topic.topicNotes} />
        </div>
      </ViewContainer>
    </div>
  );
}
