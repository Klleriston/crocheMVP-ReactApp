"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PhoneIcon as WhatsappIcon, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoPedido: "",
    mensagem: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tipoPedido: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      tipoPedido: "",
      mensagem: "",
    })
  }

  return (
    <div className="pt-16 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center py-12">
          <h1 className="text-4xl font-light mb-4">Entre em Contato</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Tem interesse em alguma peça ou deseja fazer um pedido personalizado? Entre
            em contato diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-light mb-6">Informações de Contato</h2>

            <div className="grid gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-neutral-100 p-3 rounded-full">
                  <WhatsappIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <Link
                    href="https://wa.me/5511986959157"
                    className="text-neutral-600 hover:text-emerald-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +55 11 98695-9157
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-neutral-100 p-3 rounded-full">
                  <Instagram className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <Link
                    href="https://instagram.com/artesanatxdare"
                    className="text-neutral-600 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @artesanatxdare
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-lg">
              <Image
                src="/images/FadaCrocheteira.jpeg"
                alt="Fada Crocheteira com suas criações"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

