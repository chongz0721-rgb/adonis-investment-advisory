import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const publicSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://adonis-investment-advisory.com";

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteUrl),
  title: "Adonis Investment & Advisory | Conviction Beyond Consensus",
  description:
    "Adonis Investment & Advisory brings private capital, strategic intelligence and operating judgment together across nine global cities.",
  openGraph: {
    title: "Adonis Investment & Advisory",
    description: "Conviction beyond consensus. Global investment intelligence and senior advisory.",
    images: [{ url: `${publicSiteUrl}/og.png`, width: 1734, height: 907, alt: "Adonis Investment & Advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adonis Investment & Advisory",
    description: "Conviction beyond consensus. Global investment intelligence and senior advisory.",
    images: [`${publicSiteUrl}/og.png`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
