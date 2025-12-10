export interface ContainerProps {
  fluid?: boolean
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string
  padding?: string
  centered?: boolean
}

export const defaultContainerProps: Partial<ContainerProps> = {
  fluid: false,
  maxWidth: 'lg',
  centered: true
}

export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}
