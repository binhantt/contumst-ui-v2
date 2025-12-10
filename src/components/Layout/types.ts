export interface LayoutProps {
  hasSidebar?: boolean
  sidebarCollapsed?: boolean
}

export const defaultLayoutProps: Partial<LayoutProps> = {
  hasSidebar: false,
  sidebarCollapsed: false
}

export interface LayoutHeaderProps {
  height?: string
  bgColor?: string
}

export const defaultLayoutHeaderProps: Partial<LayoutHeaderProps> = {}

export interface LayoutSidebarProps {
  width?: string
  collapsed?: boolean
  bgColor?: string
}

export const defaultLayoutSidebarProps: Partial<LayoutSidebarProps> = {
  width: '250px',
  collapsed: false
}

export interface LayoutContentProps {
  bgColor?: string
}

export const defaultLayoutContentProps: Partial<LayoutContentProps> = {}

export interface LayoutFooterProps {
  height?: string
  bgColor?: string
}

export const defaultLayoutFooterProps: Partial<LayoutFooterProps> = {}
