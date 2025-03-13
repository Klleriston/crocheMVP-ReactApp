import type React from "react"
import type { Metadata } from "next"
import { DM_Serif_Text } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = DM_Serif_Text({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  title: "Fada Crocheteira | Peças Artesanais Únicas",
  description: "Ateliê de crochê artesanal com peças únicas para decoração e uso pessoal.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

