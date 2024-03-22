import { Outlet } from 'react-router-dom'

import { Header } from '@/components/app/header'
import { ScrollArea } from '@/components/ui/scroll-area'

export function DefaultLayout() {
  return (
    <div className="max-w-screen flex h-screen flex-col items-center justify-center gap-2">
      <Header />
      <ScrollArea className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-full items-center justify-center">
          <Outlet />
        </div>
      </ScrollArea>
    </div>
  )
}
