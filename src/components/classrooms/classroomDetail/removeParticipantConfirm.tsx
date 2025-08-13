import Loader from "@/components/shared/loader";
import PopUp from "@/components/shared/popup";
import EPopupColors from "@/enums/popupColors";
import removeParticipant from "@/helpers/removeParticipant";
import useClassroomId from "@/hooks/useClassroomId";
import useLoading from "@/hooks/useLoading";
import useToast from "@/hooks/useToast";
import { useModal } from "@/store/modalStore";
import TParticipant from "@/types/participant";
import { mutate } from "swr";

interface IRemoveParticipantConfirm {
  participant: TParticipant;
}
export default function RemoveParticipantConfirm({
  participant,
}: IRemoveParticipantConfirm) {
  const { loading, startLoading, stopLoading } = useLoading();
  const { message, type, showToast } = useToast();
  const { id } = useClassroomId();
  const modalContext = useModal();
  const submitHandler = async () => {
    try {
      startLoading();
      const res = await removeParticipant(participant.id, id);
      if (!res.success) {
        showToast(res.message ?? "An unexpected error occured.", "error");
        return;
      }
      mutate("participantsInClassroom");
      modalContext?.closeModal();
    } catch (err) {
      showToast("An unexpected error occured.", "error");
    } finally {
      stopLoading();
    }
  };
  return (
    <div className="flex flex-col gap-4">
      {message && type === "error" && (
        <div>
          <PopUp popupColor={EPopupColors.ERROR} popupMessage={message} />
        </div>
      )}
      <p>
        This participant who has these details will be removed from the
        classroom.
      </p>
      <div className="space-y-2 border border-gray-300 rounded-xl p-4 bg-background">
        <p>
          <span className="font-semibold">First Name:</span>{" "}
          {participant.firstName}
        </p>
        <p>
          <span className="font-semibold">Last Name:</span>{" "}
          {participant.lastName}
        </p>
        <p>
          <span className="font-semibold">E-Mail:</span> {participant.email}
        </p>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={submitHandler}
          disabled={loading}
          className="bg-error text-white font-semibold px-4 py-2 rounded-full border border-error hover:bg-error/90 hover:text-white transition-colors cursor-pointer"
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
    </div>
  );
}
