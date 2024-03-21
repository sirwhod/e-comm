import { Cog, LogOut } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ModeToggle } from '@/components/ui/toggle-theme'

import { NavLink } from './nav-link'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://github.com/sirwhod.png" />
          <AvatarFallback>RB</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex justify-between">
          <div className="flex flex-col">
            <span>Rodrigo Brandão</span>
            <span className="text-xs font-normal text-muted-foreground">
              FullStack-Developer | ReactJS | NodeJS
            </span>
          </div>
          <ModeToggle />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <NavLink
            to="/settings/account"
            className="flex flex-row items-start gap-1 p-0"
          >
            <Cog className="mr-2 h-4 w-4" />
            <span>Minha conta</span>
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
