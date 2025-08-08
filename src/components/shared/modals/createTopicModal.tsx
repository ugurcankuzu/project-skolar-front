"use client";
import AddTopicForm from "@/components/classrooms/classroomDetail/addTopicForm";
import ModalBase from "./modalBase";

export default function CreateTopicModal() {
  return (
    <ModalBase title="Add Topic" description="Create a new topic">
      <AddTopicForm />
    </ModalBase>
  );
}
