"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(150, "Subject is too long."),

  topic: z.string().trim().optional(),

  message: z
    .string()
    .trim()
    .min(10, "Please enter a little more detail.")
    .max(5000, "Message is too long."),

  website: z.string().max(0),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    topic?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const submittedData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    topic: formData.get("topic"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  const result = contactSchema.safeParse(submittedData);

  if (!result.success) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    message: "Your message is ready to send.",
  };
}