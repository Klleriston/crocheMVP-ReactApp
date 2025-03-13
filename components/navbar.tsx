"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b border-neutral-100 rounded-xs bg-almond/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-light text-softTerracotta hover:text-roseTea transition-colors">
          Fada Crocheteira
        </Link>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-5 w-5 " /> : <Menu className="h-5 w-5" />}
        </Button>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-softTerracotta hover:text-roseTea transition-colors">
            Início
          </Link>
          <Link href="/galeria" className="text-softTerracotta hover:text-roseTea transition-colors">
            Galeria
          </Link>
          <Link href="/contato" className="text-softTerracotta hover:text-roseTea transition-colors">
            Contato
          </Link>
        </nav>
      </div>

      <div
        className={`md:hidden border-neutral-100 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col py-4">
          <Link href="/" className="px-4 py-2 text-softTerracotta hover:text-roseTea transition-colors" onClick={toggleMenu}>
            Início
          </Link>
          <Link href="/galeria" className="px-4 py-2 text-softTerracotta hover:text-roseTea transition-colors" onClick={toggleMenu}>
            Galeria
          </Link>
          <Link href="/contato" className="px-4 py-2 text-softTerracotta hover:text-roseTea transition-colors" onClick={toggleMenu}>
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}