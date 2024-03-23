import { Star } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function CardProductHome({ i }: { i: number }) {
  return (
    <div className="flex h-56 w-auto items-center gap-2 rounded-lg border lg:min-h-96 lg:w-56 lg:flex-col">
      <img
        className="aspect-square overflow-hidden rounded-bl-lg rounded-tl-lg lg:h-full lg:w-full lg:rounded-bl-none lg:rounded-tr-lg"
        src="https://source.unsplash.com/featured/224x224.png"
        alt=""
      />
      <div className="flex h-full w-full flex-1 flex-col items-start justify-between gap-1 p-2 lg:gap-4">
        <div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-sm">
            Product-{i + 1}
          </h4>
          <div className="flex gap-1">
            <Star className="h-4 w-4 text-amber-400" />
            <Star className="h-4 w-4 text-amber-400" />
            <Star className="h-4 w-4 text-amber-400" />
            <Star className="h-4 w-4 text-amber-400" />
            <Star className="h-4 w-4 text-amber-400" />
          </div>
        </div>

        <p className="font-mono text-lg">
          <strong className="text-2xl lg:text-lg">R$</strong>
          <span className="text-4xl font-semibold lg:text-2xl">
            {(Math.random() * (i + 100)).toFixed(0)}
          </span>
          .90
        </p>

        <Button size="lg" className="w-full">
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  )
}
