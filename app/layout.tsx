import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterSection from "./components/FooterSection";
import HeaderHero from "./components/HeaderHero";
import { FloatingNav } from "./components/HeaderNav";
import { navItems } from "./lib/constData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ram-gham",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]`}
      >
        <FloatingNav navItems={navItems} />
        <div className="flex flex-col min-h-[100dvh] pt-14">
          <HeaderHero />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
