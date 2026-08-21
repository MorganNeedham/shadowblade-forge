import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Shop Leather", href: "/shop/leather" },
  { label: "Shop Dice", href: "/shop/dice" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const customerCareLinks = [
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <section className="site-footer__section">
          <h2>Quick Links</h2>

          <ul className="site-footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="site-footer__section">
          <h2>Customer Care</h2>

          <ul className="site-footer__links">
            {customerCareLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="site-footer__section">
          <h2>Our Mission</h2>

          <p>
            We create fantasy-inspired accessories that blend
            old-world character, handmade craftsmanship, and
            modern-day utility.
          </p>

          <p className="site-footer__tagline">
            Old-world craft for modern-day adventurers.
          </p>
        </section>

        <section className="site-footer__section">
          <h2>Follow the Forge</h2>

          <p>
            Follow product development, launch updates, and
            behind-the-scenes work from the bench.
          </p>

          <div className="site-footer__socials">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>

            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            <a href="#" aria-label="TikTok">
              TikTok
            </a>
          </div>
        </section>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Shadowblade Forge.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}