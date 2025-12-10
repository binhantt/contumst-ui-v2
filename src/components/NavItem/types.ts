export interface NavItemProps {
  label: string
  active?: boolean
  disabled?: boolean
  href?: string
}

export const defaultNavItemProps: Partial<NavItemProps> = {
  active: false,
  disabled: false
}
