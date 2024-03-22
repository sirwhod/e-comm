import { RouterProvider } from 'react-router-dom'

import { Toaster } from './components/ui/sonner'
import { ThemeProvider } from './components/ui/theme-provider'
import { router } from './Router'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="e-comm@token-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  )
}
