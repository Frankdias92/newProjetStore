import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import localFont from 'next/font/local'
import './globals.css'
import { ProviderStore } from "./providers";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300"], variable: '--font-roboto' })
const draco = localFont({
  src: '../fonts/Draco.otf',
  variable: '--font-draco'
})
const decking = localFont({
  src: '../fonts/Decking.otf',
  variable: '--font-decking'
})
const galantic = localFont({
  src: '../fonts/GalanticItalic.otf',
  variable: '--font-galantic'
})


export const metadata: Metadata = {
  title: "Adriel Machado 999",
  description: "Area do adm",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className='dark'>
      <body className={`${inter.className} ${draco.variable} ${decking.variable} ${galantic.variable} ${roboto.variable} 
      flex min-w-[780px] max-w-[1900px] sm:w-full min-h-full flex-col justify-between bg-store-primary`}>
        <ProviderStore>
          {children}
        </ProviderStore>
      </body>
    </html>
  );
}
