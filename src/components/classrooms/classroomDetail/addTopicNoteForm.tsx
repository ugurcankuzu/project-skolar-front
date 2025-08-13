import Input from "@/components/shared/input";
import Loader from "@/components/shared/loader";
import PopUp from "@/components/shared/popup";
import EPopupColors from "@/enums/popupColors";
import addTopicNote from "@/helpers/addTopicNote";
import useClassroomId from "@/hooks/useClassroomId";
import useLoading from "@/hooks/useLoading";
import useToast from "@/hooks/useToast";
import {
  AddTopicNoteFormSchema,
  AddTopicNoteFormValues,
} from "@/types/addTopicNoteForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { mutate } from "swr";

interface ITopicNoteForm {
  topicId: number;
}
export default function AddTopicNoteForm({ topicId }: ITopicNoteForm) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<AddTopicNoteFormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(AddTopicNoteFormSchema),
  });
  const { message, type, showToast } = useToast();
  const { loading, startLoading, stopLoading } = useLoading();
  const { id } = useClassroomId();
  const submitHandler = async (data: AddTopicNoteFormValues) => {
    try {
      startLoading();
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("classId", id.toString());
      const res = await addTopicNote(formData, topicId);
      if (res.success) {
        showToast(res.message ?? "Topic note created successfully.", "success");
        reset();
        clearErrors();
        mutate("topics");
      } else {
        showToast(res.message ?? "An unexpected error occured.", "error");
      }
    } catch (err) {
      showToast("An unexpected error occured.", "error");
    } finally {
      stopLoading();
    }
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitHandler)}
    >
      {message && type === "success" && (
        <div>
          <PopUp popupColor={EPopupColors.SUCCESS} popupMessage={message} />
        </div>
      )}
      {message && type === "error" && (
        <div>
          <PopUp popupColor={EPopupColors.ERROR} popupMessage={message} />
        </div>
      )}
      <div>
        <label htmlFor="title">Title</label>
        <Input id="title" type="text" {...register("title")} />
        {errors.title && (
          <p className="text-red-500 bg-error/30 rounded-xl px-4 py-2">
            {errors.title.message}
          </p>
        )}
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="reset"
          onClick={() => {
            reset();
            clearErrors();
          }}
          disabled={loading}
          className="bg-surface text-primary font-semibold px-4 py-2 rounded-full border border-secondary hover:bg-secondary/90 hover:text-white transition-colors cursor-pointer mr-2"
        >
          Clear
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer"
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
    </form>
  );
}
