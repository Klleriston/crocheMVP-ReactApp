import Link from "next/link"
import { Instagram, Video, PhoneIcon as WhatsappIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-neutral-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Fada Crocheteira</h3>
            <p className="text-neutral-600 mb-4">
              Peças artesanais únicas criadas com amor e dedicação para trazer beleza e conforto ao seu lar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-neutral-600">
                <WhatsappIcon className="h-4 w-4" />
                <Link href="https://wa.me/5511986959157" className="hover:text-neutral-900 transition-colors">
                  +55 11 98695-9157
                </Link>
              </li>
              <li className="flex items-center gap-2 text-neutral-600">
                <Instagram className="h-4 w-4" />
                <Link
                  href="https://instagram.com/artesanatxdare"
                  target="_blank"
                  className="hover:text-neutral-900 transition-colors"
                >
                  @artesanatxdare
                </Link>
              </li>
              <li className="flex items-center gap-2 text-neutral-600">
                <Video className="h-4 w-4" />
                <Link
                  href="https://www.tiktok.com/@regianedesouzadias?_t=ZM-8udhNb6Y2Pn&_r=1"
                  target="_blank"
                  className="hover:text-neutral-900 transition-colors"
                >
                  regianedesouzadias
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Fada Crocheteira. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
