import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "ArtofHorusNFT - Twój klucz do świata ekskluzywnych dzieł sztuki na blockchainie",
  description:
    "Innowacyjny projekt łączący pasję do sztuki z możliwościami technologii blockchain. Nasza misja to democratize dostęp do najznakomitszych dzieł sztuki z całego świata, umożliwiając ich posiadanie i kolekcjonowanie w formie unikalnych tokenów NFT. Dzięki współpracy z renomowanymi artystami, organizujemy również ekskluzywne wystawy fizyczne, które przenoszą cyfrową sztukę do rzeczywistego świata.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
