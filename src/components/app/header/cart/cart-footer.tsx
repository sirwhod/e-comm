import { Button } from '@/components/ui/button'

export function CartFooter() {
  return (
    <footer className="py-4">
      <table className="w-full">
        <thead>
          <tr className="m-0 p-0 even:bg-muted">
            <th className="px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Quantidade
            </th>
            <th className="px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              5
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 p-0 even:bg-muted">
            <td className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Total
            </td>
            <td className="px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              R$ 100,00
            </td>
          </tr>
        </tbody>
      </table>

      <Button size="lg" variant="secondary" className="w-full">
        Finalizar compra
      </Button>
    </footer>
  )
}
