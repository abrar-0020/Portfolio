import type { Metadata } from "next";
import "./globals.css";
import SoundPlayer from "@/components/ui/SoundPlayer";

export const metadata: Metadata = {
  title: "Abrar Pasha — AI-Assisted Developer & Blockchain Engineer",
  description: "AI-assisted developer focused on building AI-powered and blockchain-enabled applications that solve real-world problems with speed, accessibility, and innovation.",
  keywords: ["AI Developer", "Blockchain", "Portfolio", "Full Stack Developer", "Abrar Pasha"],
  authors: [{ name: "Abrar Pasha" }],
  openGraph: {
    title: "Abrar Pasha — AI-Assisted Developer",
    description: "Building AI-powered and blockchain-enabled applications.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className="font-sans">
        <SoundPlayer />
        {children}
      </body>
    </html>
  );
}
