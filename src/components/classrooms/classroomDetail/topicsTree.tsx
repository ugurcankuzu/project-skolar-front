"use client";
import TreeItem from "@/components/shared/treeItem";
import formatTimeAgo from "@/helpers/getTimeAgo";
import useClassroomId from "@/hooks/useClassroomId";
import useTopicsSWR from "@/hooks/useTopicsSWR";
import TopicTreeSkeleton from "@/skeletons/classrooms/topicTreeSkeleton";
import TTopicNote from "@/types/TopicNote";
import TTopic from "@/types/Topics";
import Link from "next/link";

export default function TopicsTree() {
  const { id } = useClassroomId();
  const { topics, isLoading, error } = useTopicsSWR(id);
  if (isLoading) return <TopicTreeSkeleton />;
  if (error)
    return (
      <div className="text-red-500 text-center">Failed to load topics.</div>
    );

  const renderItem = (item: TTopic) => {
    return (
      <div className="space-y-2">
        <p className="font-semibold text-heading">{item.title}</p>
        <p className="text-body text-sm">{item.description}</p>
        <p className="text-body text-sm">{formatTimeAgo(item.createdAt)}</p>
      </div>
    );
  };
  const renderChild = (item: TTopicNote, id: string | number) => {
    return (
      <div className="space-y-2" key={id}>
        <p className="font-semibold text-heading">{item.title}</p>
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold text-heading">Topics</h2>
        <button className="bg-primary shadow text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer">
          Add Topic
        </button>
      </div>
      <div>
        {topics && topics?.length > 0 && (
          <ul>
            {topics?.map((topic) => (
              <li
                className="group bg-surface p-4 rounded-xl border border-gray-300 space-y-4 hover:bg-background transition-colors duration-300 my-4 first:mt-0 last:mb-0"
                key={topic.id}
              >
                <Link href={`/skolar/classroom/${id}/topic/${topic.id}`}>
                  <TreeItem
                    key={topic.id}
                    item={topic}
                    render={renderItem}
                    childItems={topic.topicNotes}
                    renderChildren={renderChild}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
        {topics && topics?.length === 0 && (
          <p className="text-center text-body">No topics found.</p>
        )}
      </div>
    </div>
  );
}
