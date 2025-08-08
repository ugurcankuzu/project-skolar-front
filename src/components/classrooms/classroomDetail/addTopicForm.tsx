"use client";

import Input from "@/components/shared/input";
import Loader from "@/components/shared/loader";
import PopUp from "@/components/shared/popup";
import EPopupColors from "@/enums/popupColors";
import AddTopic from "@/helpers/addTopic";
import useClassroomId from "@/hooks/useClassroomId";
import useLoading from "@/hooks/useLoading";
import useToast from "@/hooks/useToast";
import { AddTopicFormValues, AddTopicFormSchema } from "@/types/addTopicForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { mutate } from "swr";

export default function AddTopicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<AddTopicFormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(AddTopicFormSchema),
  });
  const { message, type, showToast } = useToast();
  const { loading, startLoading, stopLoading } = useLoading();
  const { id } = useClassroomId();
  const submitHandler = async (data: AddTopicFormValues) => {
    try {
      startLoading();
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description ?? "");
      const res = await AddTopic(formData, id);
      if (res.success) {
        mutate("topics");
        showToast(res.message ?? "Topic created successfully.", "success");
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
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitHandler, (errors) => console.log(errors))}
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
        <label htmlFor="title">Title</label>
        <Input id="title" {...register("title")} />
        {errors.title && (
          <p className="text-red-500 bg-error/30 rounded-xl px-4 py-2">
            {errors.title.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          {...register("description")}
          minLength={0}
          maxLength={255}
          rows={4}
          className="resize-none w-full border border-gray-300 rounded-xl px-4 py-2 outline-none"
        />
        {errors.description && (
          <p className="text-red-500 bg-error/30 rounded-xl px-4 py-2">
            {errors.description.message}
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
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
    </form>
  );
}
