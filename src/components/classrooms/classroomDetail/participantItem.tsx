import RemoveParticipantModal from "@/components/shared/modals/removeParticipantModal";
import formatTimeAgo from "@/helpers/getTimeAgo";
import { useModal } from "@/store/modalStore";
import TParticipant from "@/types/participant";

interface IParticipantItem {
  participant: TParticipant;
}
export default function ParticipantItem({ participant }: IParticipantItem) {
  const modalContext = useModal();
  const handleOpenModal = () => {
    modalContext?.openModal(
      <RemoveParticipantModal participant={participant} />
    );
  };
  return (
    <tr className="even:bg-background odd:bg-surface hover:bg-background/30 transition-bg duration-300 cursor-pointer">
      <td className="p-2 border-r border-gray-300">{participant.id}</td>
      <td className="p-2 border-r border-gray-300">{participant.firstName}</td>
      <td className="p-2 border-r border-gray-300">{participant.lastName}</td>
      <td className="p-2 border-r border-gray-300">{participant.email}</td>
      <td className="p-2 border-r border-gray-300">
        {formatTimeAgo(participant.joinedAt)}
      </td>
      <td className="p-2 text-center">
        <button
          onClick={handleOpenModal}
          className="bg-error rounded-lg px-4 py-1 text-white hover:bg-error/80 active:bg-error/90 transition-colors cursor-pointer"
        >
          Kick
        </button>
      </td>
    </tr>
  );
}
