import type { Metadata } from "next";
import { Geist_Mono, Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const headingFont = Source_Serif_4({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kolade Gureje | Mobile Developer",
  description:
    "Portfolio for Kolade Gureje — mobile developer focused on React Native, AI-assisted product building, and real-world digital workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
