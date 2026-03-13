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
    <nav className=" container-80 h-[var(--nav-h)] flex items-center ">
      <div className="flex items-center justify-between w-full relative bg-[#5da047] rounded-br-[128px] rounded-tr-[8px] rounded-l-[8px]
                      lg:bg-transparent"
      >
        {/* Left */}
         <div className="flex-1 hidden 
                          lg:flex items-center justify-center gap-30 py-3 rounded-bl-[128px] bg-[#5da047] text-third "
         >
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

        {/* Center Logo */}
        <div className="p-4 
                        lg:absolute bottom-[-3px] left-1/2 z-1 lg:-translate-x-1/2 lg:bg-third lg:rounded-[50%]"
        >
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
        <div className="flex-1 hidden 
                        lg:flex items-center justify-center gap-30 py-3 rounded-br-[128px] bg-[#5da047] text-third"
        >
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

        {/*Tab Bottun */}
        <div className="lg:hidden text-third mr-10">
          Menu
        </div>
      </div>
    </nav>
  );
}
