import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GaleriaPage() {
  const categorias = [
    { id: "todos", nome: "Todos" },
    { id: "decoracao", nome: "Decoração" },
    { id: "acessorios", nome: "Acessórios" },
    { id: "vestuario", nome: "Vestuário" },
  ]
  const produtos = [
    {
      id: 1,
      nome: "Conjunto Tapetes pretos",
      categoria: "decoracao",
      preco: "R$ 120,00",
      imagem:
        "/images/CentroDeMesaElegante.jpeg",
    },
    {
      id: 2,
      nome: "Bolsa Marine",
      categoria: "acessorios",
      preco: "R$ 180,00",
      imagem:
        "/images/BolsaAzul.jpeg",
    },
    {
      id: 3,
      nome: "Centro de Mesa Vermelho",
      categoria: "decoracao",
      preco: "R$ 140,00",
      imagem:
        "/images/CentroDeMesaFloral.jpeg",
    },
    {
      id: 4,
      nome: "Jogo de Tapete com decoração floral",
      categoria: "decoracao",
      preco: "R$ 130,00",
      imagem:
        "/images/JogoDeTapeteFlor.jpeg",
    },
    {
      id: 5,
      nome: "Bolsa Branca",
      categoria: "acessorios",
      preco: "R$ 190,00",
      imagem:
        "/images/BolsaBranca.jpeg",
    },
    {
      id: 6,
      nome: "Tapete Turco",
      categoria: "decoracao",
      preco: "R$ 160,00",
      imagem:
        "/images/TapeteTurco.jpeg",
    },
    {
      id: 8,
      nome: "Bolsa Violeta",
      categoria: "acessorios",
      preco: "R$ 170,00",
      imagem:
        "/images/BolsaVioleta.jpeg",
    },
    {
      id: 9,
      nome: "Bolsa Oceane",
      categoria: "acessorios",
      preco: "R$ 200,00",
      imagem:
        "/images/BolsaOceane.jpeg",
    },
    {
      id: 10,
      nome: "Coleção Arco-Íris",
      categoria: "vestuario",
      preco: "R$ 100,00",
      imagem: "/images/ColecaoArcoIris.jpeg",
    },
    {
      id: 11,
      nome: "Cropped alça única",
      categoria: "vestuario",
      preco: "R$ 100,00",
      imagem: "/images/CroppedAlcaUnica.jpeg",
    }
  ]

  return (
    <div className="pt-16 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center py-12">
          <h1 className="text-4xl font-light mb-1">Galeria de Trabalhos</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore a coleção de peças artesanais de crochê, cada uma confeccionada  à mão com cuidado e atenção aos
            detalhes.
          </p>
        </div>

        <Tabs defaultValue="todos" className="mb-12">
          <div className="flex justify-center m-1 mb-8">
            <TabsList>
              {categorias.map((categoria) => (
                <TabsTrigger key={categoria.id} value={categoria.id} className="m-0.5">
                  {categoria.nome}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="todos">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {produtos.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} />
              ))}
            </div>
          </TabsContent>

          {categorias.slice(1).map((categoria) => (
            <TabsContent key={categoria.id} value={categoria.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {produtos
                  .filter((produto) => produto.categoria === categoria.id)
                  .map((produto) => (
                    <ProdutoCard key={produto.id} produto={produto} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

      </div>
    </div>
  )
}

function ProdutoCard({ produto }: { produto: any }) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg mb-4">
        <Image
          src={produto.imagem || "/placeholder.svg"}
          alt={produto.nome}
          width={600}
          height={600}
          className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-light">{produto.nome}</h3>
      <p className="text-neutral-600 mb-2">{produto.preco}</p>
      <Link href={`https://wa.me/5511986959157?text=Olá! Tenho interesse no produto: ${produto.nome}`} target="_blank">
        <Button variant="outline" className="w-full mt-2 border-neutral-150">
          Encomendar
        </Button>
      </Link>
    </div>
  )
}

