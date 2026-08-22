"use server";

import { Resend } from "resend";
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

  const {
    name,
    email,
    subject,
    topic,
    message,
  } = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !contactEmail) {
    console.error(
      "Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variable.",
    );

    return {
      success: false,
      message:
        "The contact form is temporarily unavailable. Please try again later.",
    };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Shadowblade Forge <onboarding@resend.dev>",
    to: [contactEmail],
    replyTo: email,
    subject: `[Shadowblade Forge] ${subject}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic || "Not selected"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);

    return {
      success: false,
      message:
        "Something went wrong while sending your message. Please try again.",
    };
  }

  return {
    success: true,
    message:
      "Your message has been sent. Thank you for contacting Shadowblade Forge.",
  };
}