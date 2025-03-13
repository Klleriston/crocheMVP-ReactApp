import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[80vh]">
        <Image
          src="/images/CrocheCircular.jpeg"
          alt="Peça de crochê artesanal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">Fada Crocheteira</h1>
          <p className="text-lg md:text-xl max-w-xl mb-8 text-white">
            Peças artesanais únicas criadas com amor e dedicação para trazer beleza e conforto ao seu lar.
          </p>
          <Link href="https://wa.me/5511986959157" target="_blank" rel="noopener noreferrer">
            <Button className="flex items-center gap-2 bg-roseTea/75 hover:bg-roseTea text-white">
              <WhatsappIcon className="h-5 w-5" />
              Faça seu Pedido
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-6">Sobre Meu Trabalho</h2>
        <div className="w-20 h-1 bg-neutral-200 mx-auto mb-8" />
        <p className="text-neutral-700 mb-6">
          Bem-vindo ao ateliê da Fada Crocheteira, onde cada peça é cuidadosamente elaborada à mão, combinando técnicas
          tradicionais com design contemporâneo.
        </p>
        <p className="text-neutral-700">
          Utilizamos apenas fios de alta qualidade, sustentáveis e duráveis, para criar peças que não apenas embelezam
          seu espaço, mas contam uma história de artesanato e dedicação.
        </p>
      </section>

      <section className="py-12 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">Meus Trabalhos</h2>
          <div className="w-20 h-1 bg-neutral-200 mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/galeria" className="group">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/CentroDeMesaElegante.jpeg"
                  alt="Centro de mesa preto"
                  width={600}
                  height={600}
                  className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-light">Centro de Mesa Elegante</h3>
              <p className="text-neutral-600 mt-1">Categoria: Decoração</p>
            </Link>
            <Link href="/galeria" className="group">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/BolsasMinimalista.jpeg"
                  alt="Bolsa minimalista"
                  width={600}
                  height={600}
                  className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-light">Bolsas Minimalistas</h3>
              <p className="text-neutral-600 mt-1">Categoria: Acessórios</p>
            </Link>
            <Link href="/galeria" className="group">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/CentroDeMesaFloral.jpeg"
                  alt="Centro de mesa vermelho"
                  width={600}
                  height={600}
                  className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-xl font-light">Centro de Mesa Floral</h3>
              <p className="text-neutral-600 mt-1">Categoria: Decoração</p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/galeria">
              <Button variant="outline" className="border-neutral-300">
                Ver Todos os Trabalhos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-6">O Que Dizem Meus Clientes</h2>
        <div className="w-20 h-1 bg-neutral-200 mx-auto mb-12" />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="italic text-neutral-700 mb-4">
              "As peças são lindíssimas e de excelente qualidade. Cada detalhe é perfeito e trouxe um charme especial
              para minha sala."
            </p>
            <p className="font-medium">Maria S.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="italic text-neutral-700 mb-4">
              "Encomendei uma bolsa personalizada e o resultado superou todas as expectativas. Atendimento impecável do
              início ao fim."
            </p>
            <p className="font-medium">João P.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-neutral-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-6">Encomende Sua Peça Única</h2>
          <p className="text-neutral-700 mb-8 max-w-xl mx-auto">
            Interessado em uma peça personalizada? Entre em contato via WhatsApp para discutirmos seu projeto especial.
          </p>
          <Link href="https://wa.me/5511986959157" target="_blank" rel="noopener noreferrer" className="flex justify-center">
            <Button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700">
              <WhatsappIcon className="h-5 w-5" />
              Conversar no WhatsApp
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

