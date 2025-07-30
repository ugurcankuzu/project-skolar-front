import { z } from "zod/v4";

export const JoinClassroomFormSchema = z.object({
  char1: z
    .string({
      message: "Please enter a valid character.",
    })
    .length(1)
    .regex(/^[a-zA-Z0-9]$/),
  char2: z
    .string({
      message: "Please enter a valid character.",
    })
    .length(1)
    .regex(/^[a-zA-Z0-9]$/),
  char3: z
    .string({
      message: "Please enter a valid character.",
    })
    .length(1)
    .regex(/^[a-zA-Z0-9]$/),
  char4: z
    .string({
      message: "Please enter a valid character.",
    })
    .length(1)
    .regex(/^[a-zA-Z0-9]$/),
  char5: z
    .string({
      message: "Please enter a valid character.",
    })
    .length(1)
    .regex(/^[a-zA-Z0-9]$/),
  char6: z
    .string({
      message: "Please enter a valid character.",
    })
    .length(1)
    .regex(/^[a-zA-Z0-9]$/),
});

export type JoinClassroomFormValues = z.infer<typeof JoinClassroomFormSchema>;
