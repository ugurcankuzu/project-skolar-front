import TTopic from "@/types/Topics";
import ModalBase from "./modalBase";
import RemoveTopicConfirm from "@/components/classrooms/classroomDetail/removeTopicConfirm";

interface IRemoveTopicModal {
  topic: TTopic;
}
export default function RemoveTopicModal({ topic }: IRemoveTopicModal) {
  return (
    <ModalBase
      title="Confirm Remove Topic"
      description="Are you sure you want to remove this topic? This action cannot be undone."
    >
      <RemoveTopicConfirm topic={topic} />
    </ModalBase>
  );
}
