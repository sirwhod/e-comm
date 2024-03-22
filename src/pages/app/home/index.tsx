import { ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { CarouselHome } from './carousel'

export function Home() {
  return (
    <main className="flex w-full max-w-6xl flex-col items-center">
      <CarouselHome />
      <section className="mt-6 flex w-full flex-col items-start gap-6">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Produtos em destaque
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 10 }, (_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Product {i + 1}</CardTitle>
                <CardContent>
                  <img
                    src="https://source.unsplash.com/featured/300x300.png"
                    alt="product"
                    className="h-48 w-48 rounded-md object-cover"
                  />
                </CardContent>
                <CardFooter className="justify-between">
                  <span className="text-lg font-semibold">R$ 49.90</span>
                  <Button variant="outline" size="sm">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Comprar
                  </Button>
                </CardFooter>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
