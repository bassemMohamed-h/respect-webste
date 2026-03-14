"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
  prefetch?: boolean;
};

const leftLinks: NavLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
];

const rightLinks: NavLink[] = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/connect", label: "Contact", prefetch: false },
];

const mobileLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="container-80 h-[var(--nav-h)] flex items-center">
      <div className="relative w-full">
        <div
          className="
            relative flex w-full items-center justify-between
            rounded-l-[8px] rounded-tr-[8px] rounded-br-[80px]
            bg-[#5da047] px-4 py-3
            lg:bg-transparent lg:px-0 lg:py-0
          "
        >
          {/* Left desktop */}
          <div
            className="
              hidden flex-1 items-center justify-center gap-20
              rounded-bl-[128px] bg-[#5da047] py-3 text-third
              lg:flex
            "
          >
            {leftLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-semibold tracking-wide text-primary-foreground transition hover:opacity-80"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div
            className="
              z-10
              lg:absolute lg:bottom-[-3px] lg:left-1/2 lg:-translate-x-1/2
              lg:rounded-full lg:bg-third lg:p-4
            "
          >
            <Link href="/" aria-label="Home" onClick={closeMenu}>
              <Image
                src="/images/Vector.png"
                alt="Respect"
                width={56}
                height={56}
                priority
                className="h-10 w-10 object-contain md:h-12 md:w-12"
              />
            </Link>
          </div>

          {/* Right desktop */}
          <div
            className="
              hidden flex-1 items-center justify-center gap-20
              rounded-br-[128px] bg-[#5da047] py-3 text-third
              lg:flex
            "
          >
            {rightLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={l.prefetch}
                className="font-semibold tracking-wide text-primary-foreground transition hover:opacity-80"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="ml-auto flex items-center gap-3 text-third lg:hidden mr-10 cursor-pointer"
          >
            <span className="flex flex-col gap-1">
              <span
                className={`block h-[2px] w-5 bg-third transition ${
                  isOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-third transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-third transition ${
                  isOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile menu panel */}
        <div
          className={`
            absolute right-0  z-50 mt-3 overflow-hidden
            rounded-[16px] bg-[#5da047] transition-all duration-300 lg:hidden
            ${isOpen ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
          `}
        >
          <div className="flex flex-col">
            {mobileLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={l.prefetch}
                onClick={closeMenu}
                className="px-5 py-3 font-semibold text-third transition hover:opacity-80"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}