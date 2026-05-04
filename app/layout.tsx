import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M&M Auto Detailing | Premium Automotive Care",
  description:
    "Premium automotive detailing, ceramic coating, paint correction and mobile detailing services.",
  icons: {
    icon: "/FullLogo.jpg",
    apple: "/FullLogo.jpg",
  },
  openGraph: {
    title: "M&M Auto Detailing | Premium Automotive Care",
    description:
      "Premium automotive detailing, ceramic coating, paint correction and mobile detailing services.",
    images: [
      {
        url: "/FullLogo.jpg",
        width: 512,
        height: 512,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "M&M Auto Detailing | Premium Automotive Care",
    description:
      "Premium automotive detailing, ceramic coating, paint correction and mobile detailing services.",
    images: ["/FullLogo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
