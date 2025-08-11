"use client";
import useClassroomId from "@/hooks/useClassroomId";
import useParticipantsInClassSWR from "@/hooks/useParticipantsInClassSWR";
import TParticipant from "@/types/participant";
import ParticipantsHead from "./participantHead";
import ParticipantItem from "./participantItem";
import ParticipantTableSkeleton from "@/skeletons/classrooms/participantTableSkeleton";
import { useModal } from "@/store/modalStore";
import AddParticipantModal from "@/components/shared/modals/addParticipantModal";

const mockData: TParticipant[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    joinedAt: new Date().toString(),
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    joinedAt: new Date().toString(),
  },
  {
    id: 3,
    firstName: "Peter",
    lastName: "Jones",
    email: "peter.jones@example.com",
    joinedAt: new Date().toString(),
  },
];
export default function ParticipantsTable() {
  const { id } = useClassroomId();
  const { participants, isLoading, error } = useParticipantsInClassSWR(id);
  const modalContext = useModal();
  const handleOpenModal = () => {
    modalContext?.openModal(<AddParticipantModal />);
  };
  if (isLoading) return <ParticipantTableSkeleton />;
  if (error)
    return (
      <div className="text-red-500 text-center">
        Failed to load participants.
      </div>
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold text-heading">Participants</h2>
        <button
          onClick={handleOpenModal}
          className="bg-primary shadow text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer"
        >
          Add Participant
        </button>
      </div>
      <div className="w-full max-w-full overflow-x-auto border border-gray-300 rounded-xl">
        {participants && participants?.length > 0 && (
          <table className="w-full text-start">
            <thead>
              <ParticipantsHead />
            </thead>
            <tbody>
              {participants?.map((participant) => (
                <ParticipantItem
                  key={participant.id}
                  participant={participant}
                />
              ))}
            </tbody>
          </table>
        )}
        {participants && participants?.length === 0 && (
          <p className="text-center text-body p-4">No participants found.</p>
        )}
      </div>
    </div>
  );
}
