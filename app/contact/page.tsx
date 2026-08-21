import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact Shadowblade Forge with questions about our work, future products, commissions, events, or the forge.",
};

export default function ContactPage() {
    return (
        <main>
            <PageHero
                eyebrow="Get in Touch"
                title="Contact the Forge"
                description="Questions, ideas, or interested in what we're building? We'd be glad to hear from you."
            />

            <section className="contact-section">
                <div className="container contact-section__grid">
                    <div className="contact-section__intro">
                        <p className="contact-section__eyebrow">
                            Send a Message
                        </p>

                        <h2>
                            Have Something in Mind?
                        </h2>

                        <p>
                            Whether you have a question about our work, want to
                            learn more about an upcoming product, or are interested
                            in seeing Shadowblade Forge at an event, send us a
                            message below.
                        </p>

                        <div className="contact-section__note">
                            <h3>Before You Write</h3>

                            <p>
                                Shadowblade Forge is currently developing its first
                                collections. Product availability and custom work may
                                be limited while the forge grows.
                            </p>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </section>
        </main>
    );
}