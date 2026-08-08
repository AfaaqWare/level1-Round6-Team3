import { z } from "zod";

export const signInSchema = (t: (key: string) => string) =>
  z.object({
    email: z
      .string()
      .trim()
      .min(1, { error: t("schema.emailRequired") })
      .pipe(
        z.email({
          error: t("schema.invalidEmail"),
        })
      ),

    password: z.string().min(1, {
      error: t("schema.passwordRequired"),
    }),
  });

export type SignInFormData = z.infer<ReturnType<typeof signInSchema>>;
