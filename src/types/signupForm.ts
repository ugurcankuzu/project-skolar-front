import { z } from "zod/v4";

export const RegisterFormSchema = z
  .object({
    email: z.email({
      error: "Please enter a valid email address.",
    }),
    firstName: z
      .string({
        error: "Please enter a valid name.",
      })
      .min(3, { error: "Name must be minimum 3 character" })
      .max(50, { error: "Name must be maximum 50 character" }),
    lastName: z
      .string({
        error: "Please enter a valid name.",
      })
      .min(3, { error: "Name must be minimum 3 character" })
      .max(50, { error: "Name must be maximum 50 character" }),
    password: z
      .string({
        error: "Please enter a valid password.",
      })
      .min(8, { error: "Password must be minimum 8 character" }),
    confirmPassword: z
      .string({
        error: "Please enter a valid password.",
      })
      .min(8, { error: "Password must be minimum 8 character" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
export type RegisterFormValues = z.infer<typeof RegisterFormSchema>;
