'use client'


import { AuthProvider } from '@/hooks/auth'
import {NextUIProvider} from '@nextui-org/react'

export function ProviderAdm({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </NextUIProvider>
  )
}