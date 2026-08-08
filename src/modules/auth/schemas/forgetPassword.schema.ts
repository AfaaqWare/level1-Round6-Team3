import { z } from "zod";
import {
  createAuthEmailSchema,
  type AuthEmailValidationMessages,
} from "./email.schema";

export type ForgetPasswordValidationMessages = AuthEmailValidationMessages;

export const createForgetPasswordSchema = (
  messages: ForgetPasswordValidationMessages
) =>
  z.object({
    email: createAuthEmailSchema(messages),
  });

export type ForgetPasswordFormValues = z.infer<
  ReturnType<typeof createForgetPasswordSchema>
>;
