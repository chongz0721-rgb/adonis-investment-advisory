import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://adonis-investment-advisory.com"),
  title: "Adonis Investment & Advisory | Conviction Beyond Consensus",
  description:
    "A fictional global investment and advisory firm concept — private capital, strategic intelligence and operating judgment across nine global cities.",
  openGraph: {
    title: "Adonis Investment & Advisory",
    description: "Conviction beyond consensus. A fictional global investment and advisory firm concept.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "Adonis Investment & Advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adonis Investment & Advisory",
    description: "Conviction beyond consensus. A fictional global investment and advisory firm concept.",
    images: ["/og.png"],
  },
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
