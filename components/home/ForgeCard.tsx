import Link from "next/link";

type ForgeCardProps = {
  title: string;
  description: string;
  href: string;
  imageClass: string;
  linkText: string;
};

export default function ForgeCard({
  title,
  description,
  href,
  imageClass,
  linkText,
}: ForgeCardProps) {
  return (
    <article className="forge-card">
      <div
        className={`forge-card__image ${imageClass}`}
        aria-hidden="true"
      />

      <div className="forge-card__content">
        <h3>{title}</h3>

        <p>{description}</p>

        <Link href={href} className="forge-card__link">
          {linkText}
        </Link>
      </div>
    </article>
  );
}