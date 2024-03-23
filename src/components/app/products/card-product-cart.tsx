import { Star } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function CardProductCart({ i }: { i: number }) {
  return (
    <div className="flex h-56 w-auto items-center gap-2 rounded-lg border">
      <img
        className="aspect-square max-h-56 max-w-56 overflow-hidden rounded-bl-lg rounded-tl-lg object-cover lg:h-full lg:max-w-20"
        src="https://source.unsplash.com/featured/224x224.png"
        alt=""
      />
      <div className="flex h-full w-full flex-1 flex-col items-start justify-between gap-1 p-2">
        <div>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
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
          <strong className="text-2xl">R$</strong>
          <span className="text-4xl font-semibold">
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
