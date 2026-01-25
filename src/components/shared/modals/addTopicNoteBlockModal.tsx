import AddTopicNoteBlockForm from "@/components/classrooms/classroomDetail/TopicNoteBlock/AddTopicNoteBlockForm";
import ModalBase from "./modalBase";

export default function AddTopicNoteBlockModal() {
  const MODAL_TITLE = "Add Topic Note";
  const MODAL_DESCRIPTION = "Create a new topic note";
  return (
    <ModalBase title={MODAL_TITLE} description={MODAL_DESCRIPTION}>
      <AddTopicNoteBlockForm />
    </ModalBase>
  );
}
