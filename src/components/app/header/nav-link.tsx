import { Link, LinkProps, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export interface NavLinkProps extends LinkProps {
  disabled?: boolean
  start?: string
  checked?: boolean
  alert?: boolean
  rejected?: boolean
}

export function NavLink({
  disabled,
  start,
  checked,
  alert,
  rejected,
  ...props
}: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Button
      disabled={disabled}
      type="button"
      variant="ghost"
      className="w-full justify-start p-0 pb-0 disabled:cursor-not-allowed"
    >
      <Link
        data-checked={checked}
        data-alert={alert}
        data-rejected={rejected}
        data-current={
          start ? pathname.startsWith(start) : pathname === props.to
        }
        className="data-[alert=true]:text-alert data-[checked=true]:text-success data-[current=true]:data-[alert=true]:text-alert data-[current=true]:data-[checked=true]:text-success data-[alert=true]:focus:text-alert data-[checked=true]:focus:text-success group inline-flex h-9 w-full items-center justify-start gap-2 rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[current=true]:data-[rejected=true]:text-destructive data-[current=true]:text-foreground data-[rejected=true]:text-destructive data-[rejected=true]:focus:text-destructive"
        {...props}
      />
    </Button>
  )
}
