import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NdujaLovers - Authentic Calabrian 'Nduja",
  description: "Experience the authentic taste of Calabrian 'nduja from Filiera Madeo. Premium quality, traditional recipes, imported directly from San Demetrio Corone, Calabria to America.",
  keywords: "nduja, ndujalovers, calabrian food, italian salumi, spicy spread, imported italian food, filiera madeo",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
