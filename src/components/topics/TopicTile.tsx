import TTopic from "@/types/Topics";
import Link from "next/link";

export default function TopicTile({
  topic,
  classroomId,
}: {
  topic: TTopic;
  classroomId: number;
}) {
  return (
    <Link href={`/skolar/classroom/${classroomId}/topic/${topic.id}`}>
      <div
        key={topic.id}
        className="bg-surface p-4 rounded-xl border border-gray-200 space-y-2 hover:bg-background transition-colors duration-300"
      >
        <h3 className="text-lg font-semibold text-heading">{topic.title}</h3>
        {topic.description && (
          <p className="text-sm text-body line-clamp-2">{topic.description}</p>
        )}
        <p className="text-xs text-gray-500">
          Notes: {topic.topicNotes.length}
        </p>
      </div>
    </Link>
  );
}
