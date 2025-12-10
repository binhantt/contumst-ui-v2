export interface TextProps {
  tag?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label'
  size?: 'small' | 'medium' | 'large'
  weight?: 'light' | 'normal' | 'medium-weight' | 'semibold' | 'bold'
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'muted'
  color?: string
  italic?: boolean
  underline?: boolean
  lineThrough?: boolean
}

export const defaultTextProps: Partial<TextProps> = {
  tag: 'span',
  size: 'medium',
  weight: 'normal',
  variant: 'primary',
  italic: false,
  underline: false,
  lineThrough: false
}
