import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "passwordRequired" })
      .min(8, { message: "passwordMinLength" })
      .refine((value) => /[A-Z]/.test(value), { message: "passwordUppercase" })
      .refine((value) => /[a-z]/.test(value), { message: "passwordLowercase" })
      .refine((value) => /\d/.test(value), { message: "passwordNumber" }),
    confirmPassword: z.string().min(1, { message: "confirmPasswordRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsMustMatch",
    path: ["confirmPassword"],
  });

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
