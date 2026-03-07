// src/components/navbar/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

type NavLink = { href: string; label: string; prefetch?: boolean; };

const leftLinks: NavLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services"},
];

const rightLinks: NavLink[] = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact", prefetch: false},
];

export default function Navbar() {
  return (
    <nav className=" container-80 h-[var(--nav-h)] flex items-center justify-center group ">
      <div className="flex items-center justify-between w-full relative gap-8">
        {/* Left */}
        <div className="flex-1 overflow-hidden">
            <div className="  md:flex items-center justify-center gap-30 py-3 rounded-bl-[128px] bg-[#5da047] text-third ">
              {leftLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-primary-foreground font-semibold tracking-wide hover:opacity-80 transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          {/* </div> */}
        </div>
        

        {/* Center Logo */}
        <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 bg-third rounded-[50%] p-4 z-1">
          <Link href="/" aria-label="Home">
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
        <div className="flex-1 overflow-hidden ">
          {/* <div className="translate-x-[0%]
                          transition-transform
                          duration-1000
                          delay-200
                          ease-out
                          group-hover:translate-x-0
                          md:translate-x-[-100%]"> */}
            <div className="r md:flex items-center justify-center gap-30 py-3 rounded-br-[128px] bg-[#5da047] text-third">{/** border-y-4 border-r-4 border-secondary  py-6 */}
              {rightLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  prefetch={l.prefetch}
                  className="text-primary-foreground font-semibold tracking-wide hover:opacity-80 transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          {/* </div> */}
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
