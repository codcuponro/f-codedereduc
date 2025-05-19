import Header from "@/components/header";
import "./globals.css";
import { Manrope } from 'next/font/google'
import Footer from "@/components/footer";
import ToastProvider from "@/context/ToastProvider"
// Slider imports 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Head from "next/head";

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: "Codes promo, coupons et offres : tout est ici - CodedeReduc",
  description: "Descopera reduceri fabuloase! Echipa codedereduc verifica coduri de reducere de la 1000+ magazine din Romania pentru a te ajuta sa economisesti.",
  openGraph: {
    images: [
      {
        url: "https://codedereduc.nyc3.digitaloceanspaces.com/f98c281be600e40254e4b5755891c682.webp" || "../../public/og-image.webp",
        width: 1200,
        height: 630
      },
    ],
  },
  alternates: {
    canonical: `https://www.codedereduc.fr`
  },
};

export default async function RootLayout({
  children,
  params
}) {

  return (
    <html lang="fr">
      <body
        className={`${manrope.className} antialiased`}
      >
        <ToastProvider>
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
