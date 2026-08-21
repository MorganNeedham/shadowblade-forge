import type { Metadata } from "next";

import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shadowblade Forge, our approach to handcrafted fantasy-inspired accessories, and the values behind the forge.",
};

const craftValues = [
  {
    title: "Craft Over Speed",
    description:
      "We would rather take the time to make something thoughtfully than rush a piece simply to put it on a shelf.",
  },
  {
    title: "Fantasy With Purpose",
    description:
      "Our designs draw from fantasy and adventure while remaining practical enough to become part of everyday life.",
  },
  {
    title: "Made With Intention",
    description:
      "From materials and construction to the smallest visual details, every choice should contribute to the finished piece.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="Made for Those Who Carry Adventure With Them"
        description="Shadowblade Forge creates handcrafted fantasy-inspired goods that bring old-world character into modern life."
      />

      <section className="about-story">
        <div className="container about-story__grid">
          <div className="about-story__content">
            <p className="about-story__eyebrow">
              From the Bench
            </p>

            <h2>
              Where Fantasy Meets the Everyday
            </h2>

            <p>
              Shadowblade Forge began with a love for fantasy,
              tabletop gaming, and creating things by hand. What
              started with artisan dice grew into an interest in
              leatherwork and the challenge of creating accessories
              that feel at home in another world without becoming
              impractical in this one.
            </p>

            <p>
              Our goal is simple: create distinctive pieces with
              character, craftsmanship, and a reason to be used.
              Whether carried to a game table, a festival, or simply
              through everyday life, each design should feel like it
              belongs to the person carrying it.
            </p>
          </div>

          <div
            className="about-story__visual"
            aria-hidden="true"
          >
            <span className="about-story__mark">
              ◆
            </span>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-values__heading">
            <p className="about-values__eyebrow">
              What Guides the Forge
            </p>

            <h2>
              Built Around the Craft
            </h2>
          </div>

          <div className="about-values__grid">
            {craftValues.map((value) => (
              <article
                className="about-value"
                key={value.title}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mark">
        <div className="container about-mark__inner">
          <div
            className="about-mark__symbol"
            aria-hidden="true"
          >
            ◆
          </div>

          <div className="about-mark__content">
            <p className="about-mark__eyebrow">
              Our Mark
            </p>

            <h2>
              The Blade, the Forge, and What Stands Above Them
            </h2>

            <p>
              The Shadowblade Forge mark combines imagery of the
              blade and forge with a small cross placed above the
              design—a reminder that the work itself is never meant
              to stand above the values that guide it.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}