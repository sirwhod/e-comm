import { Watch } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Separator } from '../../ui/separator'
import { AccountMenu } from './account-menu'

export function Header() {
  return (
    <header className="flex h-16 w-full flex-row items-center justify-between border-b px-4 py-2">
      <div className="flex h-8 flex-row items-center gap-2">
        <Link to="/dashboard">
          <Watch className="h-6 w-6" />
        </Link>
        <Separator orientation="vertical" />
      </div>

      <AccountMenu />
    </header>
  )
}
