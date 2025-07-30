import JoinClassroomForm from "@/components/classrooms/joinClassroomForm";
import ModalBase from "./modalBase";

export default function JoinClassroomModal() {
  return (
    <ModalBase
      title="Join Classroom"
      description="Join an existing classroom using Join Code that given by Classroom Creator"
    >
      <JoinClassroomForm />
    </ModalBase>
  );
}
