export interface ResponsiveProps {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
  hideOn?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  showOn?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export const defaultResponsiveProps: Partial<ResponsiveProps> = {}
