import { Outlet } from 'react-router-dom'

import { Header } from '@/components/app/header'
import { ScrollArea } from '@/components/ui/scroll-area'

export function DefaultLayout() {
  return (
    <div className="max-w-screen flex h-screen flex-col items-center gap-2">
      <Header />
      <ScrollArea className="flex h-full w-full max-w-6xl flex-col items-center">
        <Outlet />
      </ScrollArea>
    </div>
  )
}
