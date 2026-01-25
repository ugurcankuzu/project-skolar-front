import Input from "@/components/shared/input";
import { AddTopicNoteBlockFormValues } from "@/types/addTopicNoteBlockForm";
import {
  UseFormClearErrors,
  UseFormRegister,
  UseFormResetField,
} from "react-hook-form";

interface IAddTopicNoteBlockFormBodySettings {
  type: "text" | "image" | "quote" | "list";
  register: UseFormRegister<AddTopicNoteBlockFormValues>;
  resetField: UseFormResetField<AddTopicNoteBlockFormValues>;
  clearErrors: UseFormClearErrors<AddTopicNoteBlockFormValues>;
}
interface IAddTopicNoteBlockFormBody {
  settings: IAddTopicNoteBlockFormBodySettings;
}
export default function AddTopicNoteBlockFormBody({
  settings,
}: IAddTopicNoteBlockFormBody) {
  const { type } = settings;
  switch (type) {
    case "text":
      return (
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="content">Content</label>
            <Input {...settings.register("content")} type="text" id="content" />
          </div>
          <div className="flex justify-end items-center">
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer"
            >
              Add Text Block
            </button>
          </div>
        </div>
      );
    case "image":
      return <div>Image block content</div>;
    case "quote":
      return <div>Quote block content</div>;
    case "list":
      return <div>List block content</div>;
    default:
      return null;
  }
}
