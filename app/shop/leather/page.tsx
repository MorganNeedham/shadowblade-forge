import type { Metadata } from "next";

import CollectionPreview from "@/components/shop/CollectionPreview";

export const metadata: Metadata = {
  title: "Leather Goods",
  description:
    "Explore handcrafted fantasy-inspired leather goods currently in development at Shadowblade Forge.",
};

export default function LeatherPage() {
  return (
    <main>
      <CollectionPreview
        eyebrow="Leather Goods"
        title="Built for the Journey"
        description="Fantasy-inspired leatherwork designed with character, craftsmanship, and modern-day practicality in mind."
        variant="leather"
        statusTitle="Our First Leather Collection Is Taking Shape"
        statusText="Patterns are being refined, prototypes are being built, and designs are being tested before they earn a place in the shop. We would rather take the time to make something worth carrying than rush a piece onto the shelf."
        highlights={[
          "Handcrafted construction",
          "Fantasy-inspired design",
          "Practical everyday utility",
          "Prototype and field testing",
        ]}
      />
    </main>
  );
}