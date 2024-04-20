import { HeaderAdm } from "@/components/detailsAdmin/headerAdmin";
import { Metadata } from "next";

import {AuthProvider} from '../../hooks/auth'

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
            <AuthProvider >
              <HeaderAdm />
              {children}
            </AuthProvider>
        </body>
      </html>
    );
  }