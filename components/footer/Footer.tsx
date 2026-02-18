import Link from "next/link";
import { SloganMark } from "@/components/brand/RespectWordmark" // change to your real svg component name

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <p className="text-lg font-semibold leading-tight">
              Respect the past
              <br />
              Shape the future....
            </p>

            <div className="w-[90%]">
              <SloganMark />
            </div>

            <p className="max-w-xs text-sm text-primary-foreground/80">
              Asperiores numquam quae. Blanditiis corrupti quisquam cumque qui
              totam qui vel sit
            </p>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <p className="text-lg font-semibold">Contacts</p>

            <div className="space-y-3 text-sm text-primary-foreground/90">
              <div>
                <p className="font-semibold">Landline</p>
                <p className="text-primary-foreground/80">+20237913266</p>
              </div>

              <div>
                <p className="font-semibold">Mobile</p>
                <p className="text-primary-foreground/80">+20 111 106 7066</p>
                <p className="text-primary-foreground/80">+20 111 106 7066</p>
                <p className="text-primary-foreground/80">+966 54 155 0380</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-lg font-semibold">Contacts</p>

            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <p className="text-lg font-semibold">Social media</p>

            <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <a href="#" className="flex items-center gap-2">
                <span className="inline-block h-5 w-5 rounded bg-primary-foreground/15" />
                Facebook
              </a>
              <a href="#" className="flex items-center gap-2">
                <span className="inline-block h-5 w-5 rounded bg-primary-foreground/15" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2">
                <span className="inline-block h-5 w-5 rounded bg-primary-foreground/15" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-14 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/80">
          Copy right Respect sorespectl 2026
        </div>
      </div>
    </footer>
  );
}
