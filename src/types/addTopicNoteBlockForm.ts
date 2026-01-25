import { z } from "zod/v4";

export const AddTopicNoteBlockFormSchema = z.object({
  type: z.enum(["text", "image", "quote", "list"], {
    error: "Please select a valid block type.",
  }),
  content: z
    .string({
      error: "Please enter valid content.",
    })
    .min(1, { error: "Content cannot be empty." })
    .max(255, { error: "Content must be maximum 255 characters." }),
  imageUrl: z.url({ error: "Please enter a valid URL." }).optional(),
  topicNoteId: z.number({
    error: "Please select a valid topic note.",
  }),
});

export type AddTopicNoteBlockFormValues = z.infer<
  typeof AddTopicNoteBlockFormSchema
>;
