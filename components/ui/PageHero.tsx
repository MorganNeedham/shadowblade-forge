type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__content">
        {eyebrow && (
          <p className="page-hero__eyebrow">
            {eyebrow}
          </p>
        )}

        <h1 className="page-hero__title">
          {title}
        </h1>

        {description && (
          <p className="page-hero__description">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}