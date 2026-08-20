import HomeHero from "@/components/home/HomeHero";

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
          <p className="forge-preview__eyebrow">
            Explore the Forge
          </p>

          <h2 id="forge-preview-title">
            Crafted for Adventure
          </h2>
        </div>
      </section>
    </main>
  );
}