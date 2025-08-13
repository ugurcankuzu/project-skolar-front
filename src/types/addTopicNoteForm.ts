import { z } from "zod/v4";

export const AddTopicNoteFormSchema = z.object({
  title: z
    .string({
      message: "Please enter a valid title.",
    })
    .min(3, { message: "Title must be minimum 3 character" })
    .max(100, { message: "Title must be maximum 50 character" }),
});
export type AddTopicNoteFormValues = z.infer<typeof AddTopicNoteFormSchema>;
