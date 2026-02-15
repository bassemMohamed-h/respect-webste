// src/components/navbar/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

type NavLink = { href: string; label: string };

const leftLinks: NavLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
];

const rightLinks: NavLink[] = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="container-80 h-[var(--nav-h)] flex items-center justify-center fixed top-0 left-0 right-0 z-50 ">
      <div className="flex items-center justify-between gap-8 w-full backdrop-blur-md bg-white/60  ">
        {/* Left */}
        <div className="flex-1 ">
          <div className="relative hidden md:flex items-center justify-center gap-14 border-y-2 border-l-2 border-secondary  py-6 px-10 overflow-hidden rounded-bl-[128px] ">
            {leftLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-primary font-semibold tracking-wide hover:opacity-80 transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Center Logo */}
        <div className="shrink-0">
          <Link href="/" aria-label="Home" className="inline-flex items-center">
            <Image
              src="/images/Vector.png"
              alt="Respect"
              width={56}
              height={56}
              priority
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />
          </Link>
        </div>

        {/* Right */}
        <div className="flex-1">
          <div className="relative hidden md:flex items-center justify-center gap-14 border-y-2 border-r-2 border-secondary  py-6 px-10 overflow-hidden  rounded-br-[128px]">
            {rightLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-primary font-semibold tracking-wide hover:opacity-80 transition"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile (simple) */}
        <div className="md:hidden">
          <Link
            href="/contact"
            className="border-2 border-secondary text-primary font-semibold px-4 py-2 rounded-full"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
