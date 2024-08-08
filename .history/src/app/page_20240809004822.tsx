import Graces from "@/components/Graces";
import styles from "./page.module.css";
import { Metadata } from "next";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div
        style={{
          background: "#455729",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
          }}
        >
          <Graces />
          <div
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              padding: "8px",
              textShadow: "0px 15px 48px #45a62a",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/favicon.png"
              width={420}
              height={420}
              alt="logo artofhorusnft website"
              style={{
                marginBottom: "48px",
                width: "220px",
                height: "220px",
                borderRadius: "16px",
              }}
            />
            <h1
              className="h1"
              style={{
                fontStyle: "italic",
                textAlign: "center",
                zIndex: 2,
                color: "#fff",
              }}
            >
              ARTOFHORUSNFT.COM
            </h1>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "48px",
              }}
            >
              <div
                style={{
                  borderRadius: "8px",
                  color: "black",
                  padding: "8px",
                  background: "white",
                  width: "max-content",
                  margin: "0 auto",
                  textShadow: "0px 15px 48px #45a62a",
                }}
              >
                COMMING SOON
              </div>
            </div>
          </div>
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
