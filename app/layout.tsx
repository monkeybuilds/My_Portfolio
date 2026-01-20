import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atharv Pathak - Python Developer, Data Scientist & Creative Technologist",
  description: "Multi-disciplinary creator specializing in Python development, AI, data science, and creative content production. Explore my portfolio of projects, certifications, and design work.",
  keywords: [
    "Atharv Pathak",
    "Python Developer",
    "Data Scientist",
    "AI & Machine Learning",
    "Content Creator",
    "Video Editor",
    "After Effects",
    "Adobe Premiere Pro",
    "Portfolio",
  ],
  authors: [{ name: "Atharv Pathak" }],
  creator: "Atharv Pathak",
  publisher: "Atharv Pathak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atharvpathak.com",
    title: "Atharv Pathak - Python Developer & Creative Technologist",
    description: "Multi-disciplinary creator specializing in Python, AI, data science, and creative content.",
    siteName: "Atharv Pathak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharv Pathak - Python Developer & Creative Technologist",
    description: "Multi-disciplinary creator specializing in Python, AI, data science, and creative content.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://atharvpathak.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
