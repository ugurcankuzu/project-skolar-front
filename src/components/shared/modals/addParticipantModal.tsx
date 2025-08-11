import AddParticipantForm from "@/components/classrooms/classroomDetail/addParticipantForm";
import ModalBase from "./modalBase";

export default function AddParticipantModal() {
  return (
    <ModalBase
      title="Add Participant"
      description="Add a new participant to this classroom"
    >
      <AddParticipantForm />
    </ModalBase>
  );
}
