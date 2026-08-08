import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: "passwordRequired" })
      .min(8, { message: "passwordMinLength" })
      .regex(/[A-Z]/, { message: "passwordUppercase" })
      .regex(/[a-z]/, { message: "passwordLowercase" })
      .regex(/[0-9]/, { message: "passwordNumber" }),
    confirmPassword: z
      .string()
      .min(1, { message: "confirmPasswordRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsMustMatch",
    path: ["confirmPassword"],
  });
