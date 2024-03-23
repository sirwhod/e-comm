import { Heart, Watch } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import { Separator } from '../../ui/separator'
import { AccountMenu } from './account-menu'
import { CartDrawer } from './cart/cart-drawer'
import { CartSheet } from './cart/cart-sheet'
import { SearchCommandDialog } from './search-command'

export function Header() {
  return (
    <header className="flex h-16 w-full flex-row items-center justify-center border-b px-4 py-2">
      <div className="flex h-9 w-full max-w-6xl flex-row items-center justify-between gap-2">
        <div className="flex h-9 flex-row items-center gap-2">
          <Link
            to="/dashboard"
            className="flex w-9 flex-col items-center hover:text-primary/80"
          >
            <Watch className="h-5 w-5" />
            <span className="text-xs font-semibold">RBF</span>
          </Link>
          <Separator orientation="vertical" />
        </div>

        <div className="flex flex-1 lg:items-center lg:justify-center">
          <SearchCommandDialog />
        </div>

        <div className="flex flex-row items-center gap-2">
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <CartSheet />
          <CartDrawer />
          <AccountMenu />
        </div>
      </div>
    </header>
  )
}
