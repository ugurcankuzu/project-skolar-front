import AddTopicNoteForm from "@/components/classrooms/classroomDetail/addTopicNoteForm";
import ModalBase from "./modalBase";

interface ICreateTopicNoteModal {
  topicId: number;
}

export default function CreateTopicNoteModal({
  topicId,
}: ICreateTopicNoteModal) {
  return (
    <ModalBase title="Add Sub-topic" description="Create a new sub-topic">
      <AddTopicNoteForm topicId={topicId} />
    </ModalBase>
  );
}
