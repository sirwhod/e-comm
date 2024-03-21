import { Button } from './components/ui/button'
import { Toaster } from './components/ui/sonner'
import { ThemeProvider } from './components/ui/theme-provider'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="e-comm@token-theme">
      <div>
        <Button>Teste</Button>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
