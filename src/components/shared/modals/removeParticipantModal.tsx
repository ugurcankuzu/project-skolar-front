import RemoveParticipantConfirm from "@/components/classrooms/classroomDetail/removeParticipantConfirm";
import ModalBase from "./modalBase";
import TParticipant from "@/types/participant";

interface IRemoveParticipantModal {
  participant: TParticipant;
}
export default function RemoveParticipantModal({
  participant,
}: IRemoveParticipantModal) {
  return (
    <ModalBase
      title="Confirm Remove Participant"
      description="Are you sure you want to remove this participant from the classroom? This action cannot be undone."
    >
      <RemoveParticipantConfirm participant={participant} />
    </ModalBase>
  );
}
