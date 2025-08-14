import TTopicNote from "@/types/TopicNote";
import ModalBase from "./modalBase";
import RemoveSubTopicConfirm from "@/components/classrooms/classroomDetail/removeSubTopicConfirm";

interface IRemoveSubTopicModal {
  topicNote: TTopicNote;
}
export default function RemoveSubTopicModal({
  topicNote,
}: IRemoveSubTopicModal) {
  return (
    <ModalBase
      title="Confirm Remove Sub-topic"
      description="Are you sure you want to remove this sub-topic? This action cannot be undone."
    >
      <RemoveSubTopicConfirm topicNote={topicNote} />
    </ModalBase>
  );
}
