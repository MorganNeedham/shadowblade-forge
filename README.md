# Shadowblade Forge

A full-stack website built for **Shadowblade Forge**, a small fantasy-inspired accessories business. The project is currently in active development and serves as both a real business website and an ongoing opportunity for me to strengthen my full-stack development skills.

## Project Overview

Shadowblade Forge was built with **Next.js, React, and TypeScript** and includes custom pages for the brand, product collections, the Forge Journal, and customer contact.

One of the most important milestones in this project was implementing the contact workflow. It was my first time independently taking a frontend interaction through server-side processing and an external API outside of a guided learning environment.

Rather than following a prebuilt exercise, I worked through the implementation, errors, validation, environment configuration, and API behavior until the full workflow was functioning correctly.

## Current Features

* Responsive multi-page website
* Custom homepage and brand content
* About page
* Shop and collection pages
* Forge Journal / blog section
* Reusable React components
* TypeScript data and component types
* Functional customer contact form
* Server-side form processing with Next.js Server Actions
* Form validation with Zod
* Email delivery through the Resend API
* Environment-based configuration for sensitive values
* User-facing validation and error states

## Tech Stack

* **Next.js 16**
* **React 19**
* **TypeScript**
* **CSS**
* **Zod**
* **Resend**
* **ESLint**
* **Git & GitHub**

## Technical Highlight: Contact Workflow

The contact form is currently one of the parts of the project I am most proud of.

Form data is sent from the user interface to a Next.js Server Action, where it is validated using a Zod schema before being processed. Server-side environment variables are used for configuration, and validated submissions are sent through the Resend email API.

The workflow also handles invalid input, missing server configuration, API failures, and successful submissions with appropriate feedback to the user.

This feature helped me move beyond simply understanding frontend and backend concepts separately and gave me hands-on experience connecting user interaction, server-side logic, validation, configuration, and an external API into one working feature.

## Project Structure

```text
shadowblade-forge/
├── app/          # Next.js routes, pages, styles, and server actions
├── components/   # Reusable UI components
├── data/         # Application and product data
├── public/       # Static assets
├── types/        # Shared TypeScript types
└── README.md
```

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/MorganNeedham/shadowblade-forge.git
cd shadowblade-forge
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file using `.env.example` as a template:

```text
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=your_email@example.com
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Status

**Active development**

The core site structure and contact workflow are functional, while additional business, shop, and content features continue to be developed and refined.

## What I Learned

This project has been especially valuable because it required me to work through problems independently rather than completing a guided exercise.

Some of the areas I have strengthened through this project include:

* Connecting frontend interactions to server-side logic
* Working with third-party APIs
* Reading documentation and troubleshooting integration issues
* Server-side validation
* Environment variable management
* Error handling and user feedback
* Reusable React component design
* TypeScript organization
* Responsive UI development
* Git-based development workflows

## Author

**Morgan Needham**

* GitHub: https://github.com/MorganNeedham
* LinkedIn: https://www.linkedin.com/in/morganhneedham/
