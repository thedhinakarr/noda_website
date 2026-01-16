import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "leaflet/dist/leaflet.css";

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
  title: "NODA | Intelligent Thermal Energy Systems",
  description: "AI-driven energy management solutions for smart heating and cooling. Unmatched precision and control for district heating, building clusters, and industrial applications.",
  keywords: ["thermal energy", "AI", "district heating", "energy management", "smart heating", "cooling systems", "NODA", "CoPilot"],
  authors: [{ name: "NODA Intelligent Systems" }],
  icons: {
    icon: [
      { url: "/NODA.png", sizes: "32x32", type: "image/png" },
      { url: "/noda-icon.svg", type: "image/svg+xml" },
    ],
    apple: "/NODA.png",
  },
  openGraph: {
    title: "NODA | Intelligent Thermal Energy Systems",
    description: "AI-driven energy management solutions for smart heating and cooling.",
    url: "https://noda.se",
    siteName: "NODA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NODA | Intelligent Thermal Energy Systems",
    description: "AI-driven energy management solutions for smart heating and cooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
