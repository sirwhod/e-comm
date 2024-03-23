import { CardProductHome } from '@/components/app/products/card-product-home'

import { CarouselHome } from './carousel'

export function Home() {
  return (
    <main className="flex w-full max-w-6xl flex-col items-center">
      <CarouselHome />
      <section className="mt-6 flex w-full flex-col items-start gap-6">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Produtos em destaque
        </h3>
        <div className="grid w-full grid-cols-1 gap-4 px-2 lg:grid-cols-5 lg:px-0">
          {Array.from({ length: 5 }, (_, i) => (
            <CardProductHome i={i} key={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
