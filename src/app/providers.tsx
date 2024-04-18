'use client'

import { Footer } from '@/components/home/footer'
import { Header } from '@/components/home/header'
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Header />
      {children}
      <Footer />
    </NextUIProvider>
  )
}