export interface NavbarProps {
  variant?: 'light' | 'dark' | 'transparent'
  bgColor?: string
  height?: string
}

export const defaultNavbarProps: Partial<NavbarProps> = {
  variant: 'light'
}

export interface NavbarItemProps {
  href?: string
  active?: boolean
  disabled?: boolean
}

export const defaultNavbarItemProps: Partial<NavbarItemProps> = {
  active: false,
  disabled: false
}
