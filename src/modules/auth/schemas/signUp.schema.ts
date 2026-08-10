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
      .min(8, { message: "passwordLength" })
      .max(14, { message: "passwordLength" })
      .refine((value) => /^[A-Za-z0-9]+$/.test(value), { message: "passwordAlphanumeric" })
      .refine((value) => /[A-Za-z]/.test(value), { message: "passwordLetter" })
      .refine((value) => /\d/.test(value), { message: "passwordNumber" }),
    confirmPassword: z.string().min(1, { message: "confirmPasswordRequired" }),
    terms: z.boolean().refine((value) => value === true, { message: "termsRequired" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsMustMatch",
    path: ["confirmPassword"],
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
