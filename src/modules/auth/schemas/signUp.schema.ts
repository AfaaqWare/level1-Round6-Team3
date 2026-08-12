import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: "nameRequired" }),
    email: z
      .string()
      .trim()
      .min(1, { message: "emailRequired" })
      .pipe(z.email({ message: "emailInvalid" })),
    password: z
      .string()
      .min(1, { message: "passwordRequired" })
      .min(8, { message: "passwordMinLength" })
      .refine((value) => /[A-Z]/.test(value), { message: "passwordUppercase" })
      .refine((value) => /[a-z]/.test(value), { message: "passwordLowercase" })
      .refine((value) => /\d/.test(value), { message: "passwordNumber" }),
    confirmPassword: z.string().min(1, { message: "confirmPasswordRequired" }),
    terms: z.boolean().refine((value) => value === true, { message: "termsRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsMustMatch",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
