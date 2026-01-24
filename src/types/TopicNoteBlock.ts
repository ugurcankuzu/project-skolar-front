type TTopicNoteBlock = {
  id: number;
  noteId: number;
  blockOrder: number;
  type: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export default TTopicNoteBlock;
