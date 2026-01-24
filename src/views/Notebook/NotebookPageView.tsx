"use client";
import ViewContainer from "@/components/shared/viewContainer";
import useTopicNoteBlocksSWR from "@/hooks/useTopicNoteBlocksSWR";
import NotebookBlockRenderer from "@/components/notebook/NotebookBlockRenderer";
import Link from "next/link";
import { useUserContext } from "@/store/userStore";

interface INotebookPageViewSettings {
  classroomId: number;
  topicId: number;
  noteId: number;
  noteTitle?: string;
}

interface INotebookPageView {
  settings: INotebookPageViewSettings;
}

export default function NotebookPageView({ settings }: INotebookPageView) {
  const { blocks, isLoading, error } = useTopicNoteBlocksSWR(
    settings.classroomId,
    settings.topicId,
    settings.noteId
  );
  const { user } = useUserContext();
  //TODO: TopicNoteBlock modal will be created
  const handleAddBlockModal = () => {};
  const renderAction = () => {
    if (!user?.isEducator) return null;
    return (
      <button className="bg-primary shadow text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer">
        Add Topic
      </button>
    );
  };
  if (isLoading) {
    return (
      <div className="size-full flex flex-col items-center">
        <ViewContainer>
          <div className="animate-pulse space-y-6">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="space-y-4 pt-6">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              <div className="h-32 bg-gray-200 rounded-xl mt-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </ViewContainer>
      </div>
    );
  }

  if (error) {
    return (
      <div className="size-full flex flex-col items-center">
        <ViewContainer>
          <Link
            href={`/skolar/classroom/${settings.classroomId}/topic/${settings.topicId}`}
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
            Back to Topic
          </Link>
          <div className="text-center py-12">
            <div className="text-error text-lg font-semibold mb-2">
              Failed to load notebook
            </div>
            <p className="text-body">
              There was an error loading the content. Please try again.
            </p>
          </div>
        </ViewContainer>
      </div>
    );
  }

  return (
    <div className="size-full flex flex-col items-center">
      <ViewContainer>
        {/* Back Navigation */}
        <Link
          href={`/skolar/classroom/${settings.classroomId}/topic/${settings.topicId}`}
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-6"
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
          Back to Topic
        </Link>

        {/* Notebook Page Container */}
        <div className="notebook-page bg-surface rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 min-h-[60vh]">
          {/* Notebook Header Decoration */}
          <div className="flex items-center gap-2 mb-8 pb-4 border-b-2 border-dashed border-gray-200">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="w-full flex justify-end items-center gap-4">
              <span className="ml-auto text-xs text-gray-400">
                {blocks?.length || 0} blocks
              </span>
              {renderAction()}
            </div>
          </div>

          {/* Note Title */}
          {settings.noteTitle && (
            <h1 className="text-3xl font-bold text-heading mb-8">
              {settings.noteTitle}
            </h1>
          )}

          {/* Blocks Content */}
          {blocks && blocks.length > 0 ? (
            <div className="notebook-content space-y-2">
              {blocks.map((block) => (
                <NotebookBlockRenderer key={block.id} block={block} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12 text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p>This notebook page is empty.</p>
            </div>
          )}
        </div>
      </ViewContainer>
    </div>
  );
}
