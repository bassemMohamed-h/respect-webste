import Link from "next/link";
import { SloganMark } from "@/components/brand/RespectWordmark" // change to your real svg component name
import { RespectBrand } from "@/components/brand/RespectBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-third">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 pb-6">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="space-y-6 col-span-2">
            <div className="w-3/4">
             <RespectBrand/>
            </div>

            <div className="w-[75%]">
              <SloganMark />
            </div>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <p className="text-lg font-bold">Contacts</p>

            <div className="space-y-3 text-sm text-primary-foreground/90">
              <div>
                <p className="font-bold">Landline</p>
                <p className="text-primary-foreground/80">+20237913266</p>
              </div>

              <div>
                <p className="font-bold">Mobile</p>
                <p className="text-primary-foreground/80">+20 111 106 7066</p>
                <p className="text-primary-foreground/80">+20 111 106 7066</p>
                <p className="text-primary-foreground/80">+966 54 155 0380</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <p className="text-lg font-bold">Links </p>

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
            <p className="text-lg font-bold">Social media</p>

            <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <a  href="https://www.facebook.com/share/1DDmj1Rqw3/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2">
                <span className="inline-block h-5 w-5 rounded bg-primary-foreground/15" >
                  <div className="relative h-full">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </div>
                </span>
                Facebook
              </a>
              <a  href="https://www.instagram.com/respect.agency.eg"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2">
                <span className="inline-block h-5 w-5 rounded bg-primary-foreground/15">
                  <div className="relative h-full">
                  <FontAwesomeIcon icon={faInstagram} />
                  </div>
                </span>
                Instagram
              </a>
              <a  href="https://www.linkedin.com/company/respect-marketing-agency/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2">
                <span className="inline-block h-5 w-5 rounded bg-primary-foreground/15">
                  <div className="relative h-full">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-5 border-t pt-5 text-center text-lg text-third font-bold">
          Copy right Respect sorespectl 2026
        </div>
      </div>
    </footer>
  );
}
