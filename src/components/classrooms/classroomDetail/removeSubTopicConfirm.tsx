import PopUp from "@/components/shared/popup";
import EPopupColors from "@/enums/popupColors";
import removeTopicNote from "@/helpers/removeTopicNote";
import useClassroomId from "@/hooks/useClassroomId";
import useLoading from "@/hooks/useLoading";
import useToast from "@/hooks/useToast";
import { useModal } from "@/store/modalStore";
import TTopicNote from "@/types/TopicNote";
import { mutate } from "swr";

interface IRemoveSubTopicConfirm {
  topicNote: TTopicNote;
}
export default function RemoveSubTopicConfirm({
  topicNote,
}: IRemoveSubTopicConfirm) {
  const modalContext = useModal();
  const { id } = useClassroomId();
  const { loading, startLoading, stopLoading } = useLoading();
  const { message, type, showToast } = useToast();
  const handleConfirm = async () => {
    try {
      startLoading();
      const res = await removeTopicNote(topicNote.topicId, topicNote.id, id);
      if (!res.success) {
        showToast(res.message ?? "An unexpected error occured.", "error");
        return;
      }
      mutate("topics");
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
        This sub-topic will be removed from the topic. This action cannot be
        undone.
      </p>
      <div className="space-y-2 border border-gray-300 rounded-xl p-4 bg-background">
        <p>
          <span className="font-semibold">Title:</span> {topicNote.title}
        </p>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={handleConfirm}
          disabled={loading}
          className="bg-error text-white font-semibold px-4 py-2 rounded-full border border-error hover:bg-error/90 hover:text-white transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-error/50"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
