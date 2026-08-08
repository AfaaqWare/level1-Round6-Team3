import { z } from "zod";

export type AuthEmailValidationMessages = {
  emailRequired: string;
  emailInvalid: string;
};

export const createAuthEmailSchema = ({
  emailRequired,
  emailInvalid,
}: AuthEmailValidationMessages) =>
  z.string().trim().min(1, emailRequired).email(emailInvalid);
