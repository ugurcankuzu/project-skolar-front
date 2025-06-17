import { z } from "zod/v4";

export const LoginFormSchema = z.object({
  email: z.email({
    error: "Please enter a valid email address.",
  }),
  password: z
    .string({
      error: "Please enter a valid password.",
    })
    .min(8, { error: "Password must be minimum 8 character" }),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
