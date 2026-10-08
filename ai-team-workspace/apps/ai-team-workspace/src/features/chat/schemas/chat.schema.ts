import * as z from "zod";

export const chatSchema = z.object({
  name: z
    .string()
    .min(3, "Chat name must be at least 3 characters")
    .max(100),

  description: z
    .string()
    .max(500)
    .optional(),

  color: z.string(),
});

export type ChatFormValues = z.infer<typeof chatSchema>;