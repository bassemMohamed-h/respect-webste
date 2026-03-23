import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import GsapProvider from "@/components/gsap/GsapProvider";
import ScrollManager from "@/components/providers/ScrollManager";
import { NavbarController } from "@/components/navbar/NavbarController";
import AppLoaderProvider from "@/components/loader/AppLoaderProvider";


config.autoAddCss = false;

const roobertPro = localFont({
  src: [
    { path: "./fonts/roobert/RoobertPRO-Light.woff2", weight: "400", style: "normal" },
    { path: "./fonts/roobert/RoobertPRO-Regular.woff2", weight: "500", style: "normal" },
    { path: "./fonts/roobert/RoobertPRO-Medium.woff2", weight: "600", style: "normal" },
    { path: "./fonts/roobert/RoobertPRO-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-roobert-pro",
  display: "swap",
});
const roobertTrial = localFont({
  src: [
    { path: "./fonts/RoobertTrial/RoobertTRIAL-Light.otf", weight: "400", style: "normal" },
    { path: "./fonts/RoobertTrial/RoobertTRIAL-Regular.otf", weight: "500", style: "normal" },
    { path: "./fonts/RoobertTrial/RoobertTRIAL-Medium.otf", weight: "600", style: "normal" },
    { path: "./fonts/RoobertTrial/RoobertTRIAL-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-roobert-trial",
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Respect Digital Marketing",
  description: "Digital Marketing and solutions Agency That Provide Services Like Branding, ADS, Websites and Mediabure",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body className={`${roobertPro.variable} ${roobertTrial.variable} ${geistMono.variable} antialiased ` }>
        <ScrollManager />
        <NavbarController/>
         <AppLoaderProvider>
          <GsapProvider>{children}</GsapProvider>
         </AppLoaderProvider>
         
        <Footer/>
      </body>
    </html>
  );
}
