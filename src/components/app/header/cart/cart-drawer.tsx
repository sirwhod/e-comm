import { ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { ScrollArea } from '@/components/ui/scroll-area'

import { CardProductCart } from '../../products/card-product-cart'
import { CartFooter } from './cart-footer'

export function CartDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="lg:hidden" variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Carrinho</DrawerTitle>
          <DrawerDescription>
            Visualize os itens dentro do seu carrinho.
          </DrawerDescription>
          <ScrollArea className="max-h-[50vh] w-full">
            <div className="flex w-full flex-col gap-4 px-2">
              {Array.from({ length: 5 }, (_, i) => (
                <CardProductCart i={i} key={i} />
              ))}
            </div>
          </ScrollArea>
          <CartFooter />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
