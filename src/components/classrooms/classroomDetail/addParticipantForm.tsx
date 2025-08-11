import Input from "@/components/shared/input";
import PopUp from "@/components/shared/popup";
import EPopupColors from "@/enums/popupColors";
import addParticipant from "@/helpers/addParticipant";
import useClassroomId from "@/hooks/useClassroomId";
import useLoading from "@/hooks/useLoading";
import useToast from "@/hooks/useToast";
import {
  AddParticipantFormSchema,
  AddParticipantFormValues,
} from "@/types/addParticipantForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { mutate } from "swr";

export default function AddParticipantForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(AddParticipantFormSchema),
  });
  const { message, type, showToast } = useToast();
  const { loading, startLoading, stopLoading } = useLoading();
  const { id } = useClassroomId();
  const submitHandler = async (data: AddParticipantFormValues) => {
    try {
      startLoading();
      const formData = new FormData();
      formData.append("email", data.email);
      const res = await addParticipant(formData, id);
      if (res.success) {
        showToast(res.message ?? "Participant added successfully.", "success");
        mutate("participantsInClassroom");
        reset();
        clearErrors();
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
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col gap-4"
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

      <div className="space-y-2">
        <label htmlFor="email">Student E-Mail</label>
        <Input {...register("email")} type="email" id="email" />
        {errors.email && (
          <p className="text-red-500 bg-error/30 rounded-xl px-4 py-2">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          type="reset"
          disabled={loading}
          onClick={() => {
            reset();
            clearErrors();
          }}
          className="bg-surface text-primary font-semibold px-4 py-2 rounded-full border border-secondary hover:bg-secondary/90 hover:text-white transition-colors cursor-pointer mr-2"
        >
          Clear
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
