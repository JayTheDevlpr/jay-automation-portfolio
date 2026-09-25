import type { Metadata } from "next";
import {
  Bebas_Neue,
  Bricolage_Grotesque,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  // opsz + wdth axes let the display style run narrow and heavy.
  axes: ["opsz", "wdth"],
});

// Used only for a case study's callout stat, which needs to read as its own
// voice rather than as a louder version of the labels around it. Condensed,
// so a long line stays dominant without running away down the column.
const stat = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stat",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jay Marin — AI Automation Specialist",
  description:
    "Integrate AI into your workflows and connect your tools: workflow automation, CRM & pipeline automation, voice agents and RAG knowledge agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${stat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
