"use client";
import {
  CreateClassroomFormValues,
  CreateClassroomFormSchema,
} from "@/types/createClassroomForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../shared/input";
import createClassroom from "@/helpers/createClassroom";
import { mutate } from "swr";

export default function CreateClassroomForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<CreateClassroomFormValues>({
    mode: "onBlur",
    resolver: zodResolver(CreateClassroomFormSchema),
  });
  const submitHandler = async (data: CreateClassroomFormValues) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("userLimit", data.userLimit.toString());
    if (data.imageFile && data.imageFile.length > 0) {
      formData.append("imageFile", data.imageFile[0]);
    }
    const res = await createClassroom(formData);
    console.log(res);
    if (res.success) {
      mutate("classroomsSummary");
    }
  };
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(submitHandler, (errors) => console.log(errors))}
    >
      <div className="space-y-2">
        <label htmlFor="title">Title</label>
        <Input id="title" {...register("title")} />
        {errors.title && (
          <p className="text-red-500 bg-error/30 rounded-xl px-4 py-1">
            {errors.title.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="description">Description</label>
        <Input id="description" {...register("description")} />
        {errors.description && (
          <p className="text-red-500 bg-error/30 rounded-xl px-4 py-1">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full space-y-2">
          <label htmlFor="coverImage">Cover Image</label>
          <Input
            type="file"
            id="coverImage"
            {...register("imageFile")}
            className="file:bg-primary file:text-white file:font-semibold file:px-2 file:py-1 file:rounded-full file:hover:bg-primary/90 file:hover:text-white file:transition-colors file:cursor-pointer file:transition-colors file:cursor-pointer file:border file:border-primary border-0"
            accept="image/png, image/jpeg"
            multiple={false}
          />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="userLimit">User Limit</label>
          <Input
            type="number"
            id="userLimit"
            {...register("userLimit", { valueAsNumber: true })}
          />
          {errors.userLimit && (
            <p className="text-red-500 bg-error/30 rounded-xl px-4 py-1">
              {errors.userLimit.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button
          className="bg-surface text-primary font-semibold px-4 py-2 rounded-full border border-secondary hover:bg-secondary/90 hover:text-white transition-colors cursor-pointer"
          type="reset"
          onClick={() => {
            reset();
            clearErrors();
          }}
        >
          Clear
        </button>
        <button
          type="submit"
          className="bg-primary text-white font-semibold px-4 py-2 rounded-full border border-primary hover:bg-primary/90 hover:text-white transition-colors cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
    
  );
}
