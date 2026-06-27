import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FantaPick WC26 — Drafta la tua squadra del Mondiale",
  description: "Il fantasy game del Mondiale 2026 basato sul Draft. Gratis.",
  metadataBase: new URL("https://fantapick.it"),
  openGraph: {
    title: "FantaPick WC26 — Drafta la tua squadra del Mondiale",
    description: "Il fantasy game del Mondiale 2026 basato sul Draft. Gratis.",
    url: "https://fantapick.it",
    siteName: "FantaPick",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FantaPick WC26 — Drafta la tua squadra del Mondiale",
    description: "Il fantasy game del Mondiale 2026 basato sul Draft. Gratis.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
