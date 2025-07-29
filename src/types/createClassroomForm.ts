import { z } from "zod/v4";

export const CreateClassroomFormSchema = z.object({
  title: z
    .string({
      message: "Please enter a valid title.",
    })
    .min(3, { message: "Title must be minimum 3 character" })
    .max(100, { message: "Title must be maximum 100 character" }),
  userLimit: z
    .number({
      message: "Please enter a valid user limit.",
    })
    .positive({ message: "User limit must be a positive number" })
    .int({ message: "User limit must be an integer. ex: `10`" })
    .min(1, { message: "User limit must be at least 1" })
    .max(255, { message: "User limit cannot exceed 255" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(255, { message: "Description cannot exceed 255 characters" }),
  imageFile: z
    .instanceof(FileList)
    .optional()
    .refine((files) => !files || files.length === 0 || files.length === 1, {
      message: "Please select only one image",
    })
    .refine(
      (files) => !files || files.length === 0 || files[0]?.size <= 5000000,
      { message: "Max file size is 5MB" }
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        ["image/jpeg", "image/png", "image/jpg"].includes(files[0]?.type),
      { message: "Only .jpg, .jpeg and .png formats are supported" }
    ),
});

export type CreateClassroomFormValues = z.infer<
  typeof CreateClassroomFormSchema
>;
