import Link from "next/link";

type ShopCategoryCardProps = {
  title: string;
  description: string;
  href: string;
  variant: "leather" | "dice";
};

export default function ShopCategoryCard({
  title,
  description,
  href,
  variant,
}: ShopCategoryCardProps) {
  return (
    <article className="shop-category">
      <div
        className={`shop-category__visual shop-category__visual--${variant}`}
        aria-hidden="true"
      />

      <div className="shop-category__content">
        <h2>{title}</h2>

        <p>{description}</p>

        <Link
          href={href}
          className="button button--primary"
        >
          Explore {title}
        </Link>
      </div>
    </article>
  );
}