"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          href="/"
          className="site-brand"
          aria-label="Shadowblade Forge home"
          onClick={closeMenu}
        >
          <span
            className="site-brand__mark"
            aria-hidden="true"
          >
            ◆
          </span>

          <span className="site-brand__name">
            <span>Shadowblade</span>
            <span>Forge</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="site-nav site-nav--desktop"
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
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className={`site-nav-toggle ${
            menuOpen ? "site-nav-toggle--open" : ""
          }`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${
          menuOpen ? "mobile-nav--open" : ""
        }`}
        aria-label="Mobile navigation"
      >
        <div className="container">
          <ul className="mobile-nav__list">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={closeMenu}
              >
                About
              </Link>
            </li>

            <li className="mobile-nav__shop">
              <span className="mobile-nav__section-title">
                Shop
              </span>

              <ul className="mobile-nav__submenu">
                <li>
                  <Link
                    href="/shop"
                    onClick={closeMenu}
                  >
                    All Collections
                  </Link>
                </li>

                <li>
                  <Link
                    href="/shop/leather"
                    onClick={closeMenu}
                  >
                    Leather Goods
                  </Link>
                </li>

                <li>
                  <Link
                    href="/shop/dice"
                    onClick={closeMenu}
                  >
                    Artisan Dice
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/blog"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}