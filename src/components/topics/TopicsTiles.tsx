"use client";
import useTopicsSWR from "@/hooks/useTopicsSWR";
import TopicTile from "./TopicTile";
import TopicTitle from "./TopicTitle";
import TopicTilesSkeleton from "@/skeletons/topics/TopicTilesSkeleton";

interface ITopicsTilesSettings {
  classroomId: number;
}
interface ITopicsTiles {
  settings: ITopicsTilesSettings;
}
export default function TopicsTiles({ settings }: ITopicsTiles) {
  const { topics, isLoading, error } = useTopicsSWR(settings.classroomId);
  if (isLoading) return <TopicTilesSkeleton />;
  if (error) return <p className="text-red-500">Error loading topics.</p>;
  return (
    <div className="size-full flex flex-col gap-4">
      <TopicTitle classroomId={settings.classroomId} />

      {topics && topics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map((topic) => (
            <TopicTile
              topic={topic}
              classroomId={settings.classroomId}
              key={topic.id}
            />
          ))}
        </div>
      )}
      {topics && topics.length === 0 && (
        <p className="text-center text-body">
          No topics found for this classroom.
        </p>
      )}
    </div>
  );
}
