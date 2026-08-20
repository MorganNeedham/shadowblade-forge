import Link from "next/link";

export default function HomeHero() {
    return (
        <section className="home-hero">
            <div className="home-hero__overlay" aria-hidden="true" />

            <div className="container home-hero__content">
                <p className="home-hero__eyebrow">
                    Shadowblade Forge
                </p>

                <h1 className="home-hero__title">
                    Fantasy-Forged Accessories,
                    <span>Handcrafted for Modern Life.</span>
                </h1>

                <p className="home-hero__tagline">
                    Old-world craft for modern-day adventurers.
                </p>

                <Link
                    href="#forge-preview"
                    className="button button--primary"
                >
                    See What&apos;s in the Forge
                </Link>
            </div>
        </section>
    );
}