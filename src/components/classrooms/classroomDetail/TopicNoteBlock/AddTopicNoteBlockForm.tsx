import useLoading from "@/hooks/useLoading";
import {
  AddTopicNoteBlockFormSchema,
  AddTopicNoteBlockFormValues,
} from "@/types/addTopicNoteBlockForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AddTopicNoteBlockFormBody from "./addTopicNoteBlockFormBody";

export default function AddTopicNoteBlockForm() {
  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    clearErrors,
    watch,
    setValue,
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(AddTopicNoteBlockFormSchema),
  });
  // const { message, type, showToast } = useToast();
  const { startLoading, stopLoading } = useLoading();
  // Hooks End

  // Handlers
  const submitHandler = async (data: AddTopicNoteBlockFormValues) => {
    try {
      startLoading();
      const formData = new FormData();
      formData.append("type", data.type);
      formData.append("content", data.content);
      if (data.imageUrl) {
        formData.append("imageUrl", data.imageUrl);
      }
      formData.append("topicNoteId", data.topicNoteId.toString());

      //const res = await addTopicNoteBlock(formData);
    } catch {
      // showToast("An unexpected error occured.", "error");
    } finally {
      stopLoading();
    }
  };
  const handleTypeSelection = (type: "text" | "image" | "quote" | "list") => {
    setValue("type", type);
  };
  const handleMoveTypeButtonBackground = (
    type: "text" | "image" | "quote" | "list",
  ) => {
    switch (type) {
      case "text":
        return "left-0";
      case "image":
        return "left-1/4";
      case "quote":
        return "left-2/4";
      case "list":
        return "left-3/4";
      default:
        return "";
    }
  };
  // Handlers End

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="space-y-2 flex flex-col">
        <div className="flex justify-between relative items-center border border-gray-300 rounded overflow-hidden w-full size-h-10">
          {/** sliding background */}
          <div
            className={`w-1/4 h-full rounded border border-primary absolute bg-primary px-4 py-1 left-0 top-0 z-0 transition-position ease-in-out duration-300 shadow ${handleMoveTypeButtonBackground(watch("type") as "text" | "image" | "quote" | "list")}`}
          ></div>
          {/** */}
          <button
            className={`size-full px-4 py-1 rounded cursor-pointer z-10 bg-transparent ${watch("type") === "text" ? "text-white" : "text-black hover:bg-gray-100 transition-colors duration-200 ease-in-out"}`}
            onClick={() => handleTypeSelection("text")}
          >
            Text
          </button>
          <button
            className={`size-full px-4 py-1 rounded cursor-pointer z-10 bg-transparent ${watch("type") === "image" ? "text-white" : "text-black hover:bg-gray-100 transition-colors duration-200 ease-in-out"}`}
            onClick={() => handleTypeSelection("image")}
          >
            Image
          </button>
          <button
            className={`size-full px-4 py-1 rounded cursor-pointer z-10 bg-transparent ${watch("type") === "quote" ? "text-white" : "text-black hover:bg-gray-100 transition-colors duration-200 ease-in-out"}`}
            onClick={() => handleTypeSelection("quote")}
          >
            Quote
          </button>
          <button
            className={`size-full px-4 py-1 rounded cursor-pointer z-10 bg-transparent ${watch("type") === "list" ? "text-white" : "text-black hover:bg-gray-100 transition-colors duration-200 ease-in-out"}`}
            onClick={() => handleTypeSelection("list")}
          >
            List
          </button>
        </div>
        {errors.type && (
          <p className="text-sm text-red-600">{errors.type.message}</p>
        )}
      </div>
      <div className="space-y-2 flex flex-col mt-4">
        <AddTopicNoteBlockFormBody
          settings={{
            type: watch("type") as "text" | "image" | "quote" | "list",
            register: register,
            resetField: resetField,
            clearErrors: clearErrors,
          }}
        />
      </div>
    </form>
  );
}
