import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/ui/PageHero";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "The Forge Journal",
  description:
    "Follow Shadowblade Forge through product development, prototypes, field tests, leatherwork, artisan dice, and life behind the bench.",
};

const journalCategories = [
  {
    title: "Forge Notes",
    description:
      "Announcements, shop updates, and what is currently taking shape.",
  },
  {
    title: "Leatherwork",
    description:
      "Patterns, prototypes, materials, construction, and lessons from the bench.",
  },
  {
    title: "Dice Lab",
    description:
      "Artisan dice development, experiments, designs, and future collections.",
  },
  {
    title: "Field Tests",
    description:
      "How prototypes perform once they leave the workbench and enter the real world.",
  },
];

export default function BlogPage() {
  const hasPosts = blogPosts.length > 0;

  return (
    <main>
      <PageHero
        eyebrow="The Forge Journal"
        title="From the Bench"
        description="Follow the process behind Shadowblade Forge—from early ideas and prototypes to field tests, finished designs, and everything learned along the way."
      />

      <section className="journal-section">
        <div className="container">
          <div className="journal-section__heading">
            <p className="journal-section__eyebrow">
              Latest Entries
            </p>

            <h2>
              What&apos;s Happening in the Forge
            </h2>
          </div>

          {hasPosts ? (
            <div className="journal-grid">
              {blogPosts.map((post) => (
                <article
                  className="journal-post"
                  key={post.slug}
                >
                  <p className="journal-post__category">
                    {post.category}
                  </p>

                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="journal-post__link"
                  >
                    Read Entry
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="journal-empty">
              <span
                className="journal-empty__mark"
                aria-hidden="true"
              >
                ◆
              </span>

              <p className="journal-empty__eyebrow">
                The First Entry Is Being Written
              </p>

              <h3>
                There&apos;s Plenty Happening Behind the Bench.
              </h3>

              <p>
                The Forge Journal will document product development,
                prototypes, experiments, field tests, and the work
                that goes into building Shadowblade Forge.
              </p>

              <Link
                href="/contact"
                className="button button--primary"
              >
                Contact the Forge
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="journal-categories">
        <div className="container">
          <div className="journal-categories__heading">
            <p className="journal-section__eyebrow">
              Explore the Journal
            </p>

            <h2>
              Stories From the Forge
            </h2>
          </div>

          <div className="journal-categories__grid">
            {journalCategories.map((category) => (
              <article
                className="journal-category"
                key={category.title}
              >
                <span
                  className="journal-category__mark"
                  aria-hidden="true"
                >
                  ◆
                </span>

                <h3>{category.title}</h3>

                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}