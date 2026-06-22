import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://joshualum.vercel.app"),
  title: "Joshua Lum",
  description:
    "CS + Business @ USC. Interested in Product, BizOps & Engineering. AI/ML research, full-stack development, and building products that ship.",
  openGraph: {
    title: "Joshua Lum",
    description:
      "CS + Business @ USC. Interested in Product, BizOps & Engineering.",
    type: "website",
    images: ["/images/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-zinc-950 font-sans text-zinc-300 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
