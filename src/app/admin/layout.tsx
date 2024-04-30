
import { Metadata } from "next";

import {AuthProvider} from '../../hooks/auth'

export const metadata: Metadata = {
    title: "Registro de usuario",
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
              {children}
            </AuthProvider>
        </body>
      </html>
    );
  }