import type { Metadata } from "next";
import Providers from "@/providers";
import Header from "@/components/header";
import { Albert_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export const metadata: Metadata = {
  title: "Pandooin Technical Test",
  description: "Pandooin Technical Test",
};

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-unbounded",
  weight: ["400", "700"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.variable} ${unbounded.variable}`}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
