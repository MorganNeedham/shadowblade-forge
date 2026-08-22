import type { Metadata } from "next";
import Link from "next/link";

import PageHero from "@/components/ui/PageHero";
import ShopCategoryCard from "@/components/shop/ShopCategoryCard";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Explore fantasy-inspired leather goods and artisan dice from Shadowblade Forge.",
};

export default function ShopPage() {
  return (
    <main>
      <PageHero
        eyebrow="The Forge"
        title="Shop Shadowblade Forge"
        description="Handcrafted fantasy-inspired goods designed to bring a little adventure into modern life."
      />

      <section className="shop-categories">
        <div className="container">
          <div className="shop-categories__grid">
            <ShopCategoryCard
              title="Leather Goods"
              description="Functional leatherwork shaped by fantasy aesthetics, thoughtful construction, and everyday utility."
              href="/shop/leather"
              variant="leather"
            />

            <ShopCategoryCard
              title="Artisan Dice"
              description="Handmade dice and accessories created for adventurers, collectors, and the game table."
              href="/shop/dice"
              variant="dice"
            />
          </div>
        </div>
      </section>

      <section className="shop-progress">
        <div className="container shop-progress__inner">
          <p className="shop-progress__eyebrow">
            Currently in the Forge
          </p>

          <h2>
            The First Collections Are Taking Shape
          </h2>

          <p>
            Shadowblade Forge is currently designing, building,
            and testing its first products. We&apos;re taking the
            time to get the details right rather than rushing pieces
            onto the shelf.
          </p>

          <Link
            href="/blog"
            className="button button--primary"
          >
            Follow the Forge Journal
          </Link>
        </div>
      </section>
    </main>
  );
}