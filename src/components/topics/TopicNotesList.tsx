import TTopicNote from "@/types/TopicNote";
import getTimeAgo from "@/helpers/getTimeAgo";
import Link from "next/link";

interface TopicNotesListProps {
  notes: TTopicNote[];
  classroomId: number;
  topicId: number;
}

export default function TopicNotesList({
  notes,
  classroomId,
  topicId,
}: TopicNotesListProps) {
  if (!notes || notes.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No notes found for this topic.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {notes.map((note) => (
        <Link
          key={note.id}
          href={`/skolar/classroom/${classroomId}/topic/${topicId}/note/${note.id}`}
          className="block"
        >
          <div className="p-4 rounded-xl border border-gray-200 bg-surface hover:bg-background hover:border-primary/50 transition-all duration-300 flex justify-between items-center group cursor-pointer">
            <div>
              <h4 className="font-semibold text-heading group-hover:text-primary transition-colors">
                {note.title}
              </h4>
              <p className="text-xs text-gray-400 mt-1">
                Created {getTimeAgo(note.createdAt)}
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-300 group-hover:text-primary transition-colors"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
}
