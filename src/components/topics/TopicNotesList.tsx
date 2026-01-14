import TTopicNote from "@/types/TopicNote";
import getTimeAgo from "@/helpers/getTimeAgo";

interface TopicNotesListProps {
  notes: TTopicNote[];
}

export default function TopicNotesList({ notes }: TopicNotesListProps) {
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
        <div
          key={note.id}
          className="p-4 rounded-xl border border-gray-200 bg-surface hover:bg-background transition-colors duration-300 flex justify-between items-center"
        >
          <div>
            <h4 className="font-semibold text-heading">{note.title}</h4>
            <p className="text-xs text-gray-400 mt-1">
              Created {getTimeAgo(note.createdAt)}
            </p>
          </div>
          {/* Future: Add action buttons like Delete/Edit here if needed */}
        </div>
      ))}
    </div>
  );
}
