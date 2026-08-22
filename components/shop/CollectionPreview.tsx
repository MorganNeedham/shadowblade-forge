import Link from "next/link";

type CollectionPreviewProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant: "leather" | "dice";
  statusTitle: string;
  statusText: string;
  highlights: string[];
};

export default function CollectionPreview({
  eyebrow,
  title,
  description,
  variant,
  statusTitle,
  statusText,
  highlights,
}: CollectionPreviewProps) {
  return (
    <>
      <section className={`collection-hero collection-hero--${variant}`}>
        <div className="collection-hero__overlay" aria-hidden="true" />

        <div className="container collection-hero__content">
          <p className="collection-hero__eyebrow">
            {eyebrow}
          </p>

          <h1>{title}</h1>

          <p className="collection-hero__description">
            {description}
          </p>
        </div>
      </section>

      <section className="collection-status">
        <div className="container collection-status__grid">
          <div
            className={`collection-status__visual collection-status__visual--${variant}`}
            aria-hidden="true"
          />

          <div className="collection-status__content">
            <p className="collection-status__eyebrow">
              Currently in Development
            </p>

            <h2>{statusTitle}</h2>

            <p>{statusText}</p>

            <ul className="collection-status__highlights">
              {highlights.map((highlight) => (
                <li key={highlight}>
                  <span aria-hidden="true">◆</span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="collection-status__actions">
              <Link
                href="/blog"
                className="button button--primary"
              >
                Follow the Forge Journal
              </Link>

              <Link
                href="/contact"
                className="collection-status__contact"
              >
                Contact the Forge
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}