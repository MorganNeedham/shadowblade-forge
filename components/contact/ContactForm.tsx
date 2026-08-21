"use client";

import { useActionState } from "react";

import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <form
      className="contact-form"
      action={formAction}
      noValidate
    >
      <div
        className="contact-form__honeypot"
        aria-hidden="true"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-form__row">
        <div className="form-field">
          <label htmlFor="name">
            Name
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={
              state.errors?.name ? true : undefined
            }
            aria-describedby={
              state.errors?.name
                ? "name-error"
                : undefined
            }
          />

          {state.errors?.name && (
            <p
              className="form-field__error"
              id="name-error"
            >
              {state.errors.name[0]}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">
            Email
            <span aria-hidden="true">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={
              state.errors?.email ? true : undefined
            }
            aria-describedby={
              state.errors?.email
                ? "email-error"
                : undefined
            }
          />

          {state.errors?.email && (
            <p
              className="form-field__error"
              id="email-error"
            >
              {state.errors.email[0]}
            </p>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="subject">
          Subject
          <span aria-hidden="true">*</span>
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          aria-invalid={
            state.errors?.subject ? true : undefined
          }
          aria-describedby={
            state.errors?.subject
              ? "subject-error"
              : undefined
          }
        />

        {state.errors?.subject && (
          <p
            className="form-field__error"
            id="subject-error"
          >
            {state.errors.subject[0]}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="topic">
          What Can We Help With?
        </label>

        <select
          id="topic"
          name="topic"
          defaultValue=""
        >
          <option value="">
            Select a topic
          </option>

          <option value="general">
            General Question
          </option>

          <option value="leather">
            Leather Goods
          </option>

          <option value="dice">
            Artisan Dice
          </option>

          <option value="custom">
            Custom Work
          </option>

          <option value="events">
            Events &amp; Vendor Inquiries
          </option>

          <option value="other">
            Something Else
          </option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="message">
          Message
          <span aria-hidden="true">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          aria-invalid={
            state.errors?.message ? true : undefined
          }
          aria-describedby={
            state.errors?.message
              ? "message-error"
              : undefined
          }
        />

        {state.errors?.message && (
          <p
            className="form-field__error"
            id="message-error"
          >
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <p className="contact-form__required">
        <span aria-hidden="true">*</span>
        Required fields
      </p>

      {state.message && (
        <p
          className={
            state.success
              ? "contact-form__status contact-form__status--success"
              : "contact-form__status contact-form__status--error"
          }
          role="status"
        >
          {state.message}
        </p>
      )}

      <button
        className="button button--primary"
        type="submit"
        disabled={pending}
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}