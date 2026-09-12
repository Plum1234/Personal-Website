import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
    images: ["/images/PictureOfMe.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
