import { z } from "zod/v4";

export const AddParticipantFormSchema = z.object({
  email: z
    .email({
      error: "Please enter a valid email address.",
    })
    .max(100, { message: "Email must be maximum 100 character" }),
});

export type AddParticipantFormValues = z.infer<typeof AddParticipantFormSchema>;
