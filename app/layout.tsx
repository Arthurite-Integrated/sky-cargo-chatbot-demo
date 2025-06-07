import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import LexChatbot from "@/components/lex-chatbot"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sky Cargo Ltd - Global Logistics Solutions",
  description: "Professional cargo and logistics services worldwide",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <LexChatbot />
      </body>
    </html>
  )
}
