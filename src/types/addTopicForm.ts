import { z } from "zod/v4";

export const AddTopicFormSchema = z.object({
  title: z
    .string({
      message: "Please enter a valid title.",
    })
    .min(3, { message: "Title must be minimum 3 character" })
    .max(50, { message: "Title must be maximum 50 character" }), // .length değil .max
  description: z
    .string({
      message: "Please enter a valid description.",
    })
    .max(255, { message: "Description must be maximum 255 character" }) // .length değil .max
    .nullable(),
});
export type AddTopicFormValues = z.infer<typeof AddTopicFormSchema>;
