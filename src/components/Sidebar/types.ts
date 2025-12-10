export interface SidebarProps {
  variant?: 'light' | 'dark'
  width?: string
  collapsed?: boolean
  bgColor?: string
}

export const defaultSidebarProps: Partial<SidebarProps> = {
  variant: 'light',
  width: '250px',
  collapsed: false
}

export interface SidebarItemProps {
  href?: string
  active?: boolean
  disabled?: boolean
  collapsed?: boolean
  badge?: string | number
}

export const defaultSidebarItemProps: Partial<SidebarItemProps> = {
  active: false,
  disabled: false,
  collapsed: false
}
