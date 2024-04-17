import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] })
const draco = localFont({
  src: './fonts/Draco.otf',
  variable: '--font-draco'
})
const decking = localFont({
  src: './fonts/Decking.otf',
  variable: '--font-decking'
})
const galantic = localFont({
  src: './fonts/GalanticItalic.otf',
  variable: '--font-galantic'
})


export const metadata: Metadata = {
  title: "Adriel Machado 999",
  description: "Sua loja virtual",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className='dark'>
      <body className={`${inter.className} ${draco.variable} ${decking.variable} ${galantic.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
