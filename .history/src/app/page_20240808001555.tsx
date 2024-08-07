import Graces from "@/components/Graces";
import styles from "./page.module.css";
import { Metadata } from "next";
export default function Home() {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: -1,
          top: 0,
          left: 0,
          background: "#111111",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "fixed", top: 0, left: 0 }}>
          <Graces />
        </div>
      </div>

      <div style={{ height: "500vh", width: "100vw" }}></div>
    </div>
  );
}
export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
  themeColor: "red",
  publisher: "wesiu.dev",
  manifest: "/manifest.json",
  verification: {
    google: "google85185d3abec28326.html",
  },
  icons: [
    {
      url: "/favicons/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/favicons/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/favicons/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  title:
    "ArtofHorusNFT - Twój klucz do świata ekskluzywnych dzieł sztuki na blockchainie",
  description:
    "Innowacyjny projekt łączący pasję do sztuki z możliwościami technologii blockchain. Nasza misja to democratize dostęp do najznakomitszych dzieł sztuki z całego świata, umożliwiając ich posiadanie i kolekcjonowanie w formie unikalnych tokenów NFT. Dzięki współpracy z renomowanymi artystami, organizujemy również ekskluzywne wystawy fizyczne, które przenoszą cyfrową sztukę do rzeczywistego świata.",
  openGraph: {
    type: "website",
    url: "https://artofhorusnft.com",
    title:
      "ArtofHorusNFT - Twój klucz do świata ekskluzywnych dzieł sztuki na blockchainie",
    description:
      "Innowacyjny projekt łączący pasję do sztuki z możliwościami technologii blockchain. Nasza misja to democratize dostęp do najznakomitszych dzieł sztuki z całego świata, umożliwiając ich posiadanie i kolekcjonowanie w formie unikalnych tokenów NFT. Dzięki współpracy z renomowanymi artystami, organizujemy również ekskluzywne wystawy fizyczne, które przenoszą cyfrową sztukę do rzeczywistego świata.",
    siteName: "Art Of Horus",
  },
};
