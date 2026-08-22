import type { Metadata } from "next";

import CollectionPreview from "@/components/shop/CollectionPreview";

export const metadata: Metadata = {
  title: "Artisan Dice",
  description:
    "Explore artisan dice and tabletop accessories from Shadowblade Forge.",
};

export default function DicePage() {
  return (
    <main>
      <CollectionPreview
        eyebrow="Artisan Dice"
        title="Made for the Roll"
        description="Handcrafted dice and tabletop accessories created for adventurers, collectors, and stories yet to be told."
        variant="dice"
        statusTitle="The Dice Forge Is Being Rebuilt"
        statusText="Artisan dice were part of the beginning of Shadowblade Forge, and they will remain part of its future. The collection is being reworked so it can return as part of one unified shop alongside our leather goods."
        highlights={[
          "Handmade artisan dice",
          "Unique fantasy-inspired designs",
          "Tabletop accessories",
          "Future limited collections",
        ]}
      />
    </main>
  );
}