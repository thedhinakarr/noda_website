import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter/web/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter/web/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NODA",
  description: "AI-driven energy management solutions for smart heating and cooling. Unmatched precision and control for district heating, building clusters, and industrial applications.",
  keywords: ["thermal energy", "AI", "district heating", "energy management", "smart heating", "cooling systems", "NODA", "CoPilot"],
  authors: [{ name: "NODA Intelligent Systems" }],
  icons: {
    icon: [
      { url: "/NoBg.svg", type: "image/svg+xml" },
    ],
    apple: "/NoBg.svg",
  },
  openGraph: {
    title: "NODA",
    description: "AI-driven energy management solutions for smart heating and cooling.",
    url: "https://noda.se",
    siteName: "NODA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NODA",
    description: "AI-driven energy management solutions for smart heating and cooling.",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
