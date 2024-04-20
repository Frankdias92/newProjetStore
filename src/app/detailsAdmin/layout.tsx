import { HeaderAdm } from "@/components/detailsAdmin/headerAdmin";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cadastro de produtos",
    description: "Area do adm",
  };
  

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="pt-BR" className='dark'>
        <body >
            <main>
                <HeaderAdm />
                {children}
            </main>
        </body>
      </html>
    );
  }