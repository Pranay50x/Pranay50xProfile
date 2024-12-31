import React from 'react'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Analytics } from "@vercel/analytics/react"

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pranay - Portfolio 2025',
  description: 'Pranay50X Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* <Background3D /> */}
          <div className="flex flex-col min-h-screen relative z-10">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  )
}

