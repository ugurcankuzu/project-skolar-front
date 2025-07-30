import { z } from "zod/v4";

export const JoinClassroomFormSchema = z.object({
  char1: z.string({
    message: "Please enter a valid character.",
  }),
  char2: z.string({
    message: "Please enter a valid character.",
  }),
  char3: z.string({
    message: "Please enter a valid character.",
  }),
  char4: z.string({
    message: "Please enter a valid character.",
  }),
  char5: z.string({
    message: "Please enter a valid character.",
  }),
  char6: z.string({
    message: "Please enter a valid character.",
  }),
});

export type JoinClassroomFormValues = z.infer<typeof JoinClassroomFormSchema>;
