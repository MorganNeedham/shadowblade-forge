import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Eagle_Lake,
  Marcellus_SC,
} from "next/font/google";

import "./globals.css";

const eagleLake = Eagle_Lake({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const marcellusSC = Marcellus_SC({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Shadowblade Forge",
    template: "%s | Shadowblade Forge",
  },
  description:
    "Fantasy-inspired leather goods and artisan dice, handcrafted with old-world character and modern-day utility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${eagleLake.variable} ${marcellusSC.variable} ${cormorantGaramond.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}