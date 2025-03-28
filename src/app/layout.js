import Header from "@/components/header";
import "./globals.css";
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
import ToastProvider from "@/context/ToastProvider"
// Slider imports 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense } from "react";
import React from "react";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "CodCupon - Coduri reducere, Vouchere si Oferte",
  description: "Descopera reduceri fabuloase! Echipa CodCupon verifica coduri de reducere de la 1000+ magazine din Romania pentru a te ajuta sa economisesti.",
  openGraph: {
    images: [
      {
        url: "https://codcupon.nyc3.digitaloceanspaces.com/f98c281be600e40254e4b5755891c682.webp" || "../../public/og-image.webp",
        width: 1200,
        height: 630
      },
    ],
  },
  alternates: {
    canonical: `https://www.codcupon.ro`
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="js-detection" strategy="beforeInteractive">
          {`
            document.documentElement.classList.add('js');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <ToastProvider>
            <Header/>
            {children}
            <Footer/>
          </ToastProvider>
        </Suspense>
      </body>
    </html>
  )
}
