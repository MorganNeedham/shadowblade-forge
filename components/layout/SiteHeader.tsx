import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          href="/"
          className="site-brand"
          aria-label="Shadowblade Forge home"
        >
          <span
            className="site-brand__mark"
            aria-hidden="true"
          >
            <Image
              src="/images/logo/shadowblade-forge-mark-light.png"
              alt=""
              width={64}
              height={64}
              className="site-brand__logo"
            />
          </span>

          <span className="site-brand__name">
            <span>Shadowblade</span>
            <span>Forge</span>
          </span>
        </Link>

        <nav
          className="site-nav"
          aria-label="Main navigation"
        >
          <ul className="site-nav__list">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>

            <li className="site-nav__dropdown">
              <Link href="/shop">
                Shop

                <span
                  className="site-nav__arrow"
                  aria-hidden="true"
                >
                  ▾
                </span>
              </Link>

              <ul className="site-nav__submenu">
                <li>
                  <Link href="/shop/leather">
                    Leather
                  </Link>
                </li>

                <li>
                  <Link href="/shop/dice">
                    Dice
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/blog">Blog</Link>
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}