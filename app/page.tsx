import HomeHero from "@/components/home/HomeHero";
import ForgeCard from "@/components/home/ForgeCard";
import MissionSection from "@/components/home/MissionSection";

export default function Home() {
  return (
    <main>
      <HomeHero />

      <section
        className="forge-preview"
        id="forge-preview"
        aria-labelledby="forge-preview-title"
      >
        <div className="container">
          <div className="forge-preview__heading">
            <p className="forge-preview__eyebrow">
              Explore the Forge
            </p>

            <h2 id="forge-preview-title">
              Crafted for Adventure
            </h2>
          </div>

          <div className="forge-preview__grid">
            <ForgeCard
              title="Leather Goods"
              description="Pouches · Journals · Bracers · Accessories"
              href="/shop/leather"
              imageClass="forge-card__image--leather"
              linkText="Coming Soon"
            />

            <ForgeCard
              title="Artisan Dice"
              description="Handmade Dice · Sets · Accessories"
              href="/shop/dice"
              imageClass="forge-card__image--dice"
              linkText="Coming Soon"
            />

            <ForgeCard
              title="The Forge Journal"
              description="Build Updates · Prototypes · Behind the Bench"
              href="/blog"
              imageClass="forge-card__image--journal"
              linkText="Read the Journal"
            />
          </div>
        </div>
      </section>
      <MissionSection />
    </main>
  );
}