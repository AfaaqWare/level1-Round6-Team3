import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

