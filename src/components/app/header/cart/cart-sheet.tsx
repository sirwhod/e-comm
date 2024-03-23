import { ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { CardProductCart } from '../../products/card-product-cart'
import { CartFooter } from './cart-footer'

export function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="hidden lg:flex" variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
          <SheetDescription>
            Visualize os itens dentro do seu carrinho.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="max-h-[calc(100vh-1.5rem-3.5rem-1.5rem)] w-full">
          <div className="flex max-h-[calc(100vh-1.5rem-3.5rem-1.5rem-10rem)] w-full flex-col gap-4">
            {Array.from({ length: 5 }, (_, i) => (
              <CardProductCart i={i} key={i} />
            ))}
          </div>
        </ScrollArea>
        <CartFooter />
      </SheetContent>
    </Sheet>
  )
}
