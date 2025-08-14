import Loader from "@/components/shared/loader";
import PopUp from "@/components/shared/popup";
import EPopupColors from "@/enums/popupColors";
import removeTopic from "@/helpers/removeTopic";
import useClassroomId from "@/hooks/useClassroomId";
import useLoading from "@/hooks/useLoading";
import useToast from "@/hooks/useToast";
import { useModal } from "@/store/modalStore";
import TTopic from "@/types/Topics";
import { mutate } from "swr";

interface IRemoveTopicConfirm {
  topic: TTopic;
}
export default function RemoveTopicConfirm({ topic }: IRemoveTopicConfirm) {
  const { id } = useClassroomId();
  const { loading, startLoading, stopLoading } = useLoading();
  const { message, type, showToast } = useToast();
  const modalContext = useModal();
  const handleConfirm = async () => {
    try {
      startLoading();
      const res = await removeTopic(topic.id, id);
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
        This topic will be removed from the classroom. This action cannot be
        undone.
      </p>
      <div className="space-y-2 border border-gray-300 rounded-xl p-4 bg-background">
        <p>
          <span className="font-semibold">Title:</span> {topic.title}
        </p>
        {topic.description && (
          <p>
            <span className="font-semibold">Description:</span>{" "}
            {topic.description}
          </p>
        )}
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          disabled={loading}
          onClick={handleConfirm}
          className="bg-error text-white font-semibold px-4 py-2 rounded-full border border-error hover:bg-error/90 hover:text-white transition-colors cursor-pointer"
        >
          {loading ? <Loader /> : "Confirm"}
        </button>
      </div>
    </div>
  );
}
