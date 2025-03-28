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
  description: "Descopera reduceri fabuloase! Echipa CodCupon verifica coduri de reducere de la 1000+ magazine din Romania pentru a te ajuta sa economisești.",
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
        <noscript>
          <style>{`
            .js { display: none !important; }
            .no-js { display: block !important; }
            .no-js .interactive { display: none !important; }
            .no-js .static-content { display: block !important; }
            .no-js .toast-provider { display: none !important; }
            .js .no-js { display: none !important; }
            .js .interactive { display: block !important; }
            .js .static-content { display: block !important; }
            .js .toast-provider { display: block !important; }
          `}</style>
        </noscript>
        <Script id="js-detection" strategy="beforeInteractive">
          {`
            document.documentElement.classList.add('js');
            document.documentElement.classList.remove('no-js');
          `}
        </Script>
      </head>
      <body className={`${inter.className} no-js`}>
        <div className="static-content">
          <Header/>
          <main>
            {children}
          </main>
          <Footer/>
        </div>
        <div className="toast-provider">
          <Suspense fallback={null}>
            <ToastProvider />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
