import { Outlet, useLocation } from 'react-router-dom'

import { Header } from '@/components/app/header'
import { ScrollArea } from '@/components/ui/scroll-area'

export function DefaultLayout() {
  const { pathname } = useLocation()
  return (
    <div className="max-w-screen flex h-screen flex-col items-start">
      <Header />
      <main className="flex h-full w-full flex-row">
        <section className="flex flex-1 flex-col p-4">
          <ScrollArea
            data-full={
              pathname.startsWith('/dashboard') ||
              pathname.startsWith('/history')
            }
            className="max-h-[calc(100vh-5.5rem)] max-w-[calc(100vw-18rem)] p-4 data-[full=true]:max-w-full"
          >
            <Outlet />
          </ScrollArea>
        </section>
      </main>
    </div>
  )
}
