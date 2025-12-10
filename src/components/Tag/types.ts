export interface TagProps {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  size?: 'small' | 'medium' | 'large'
  closable?: boolean
  color?: string
  bgColor?: string
  bordered?: boolean
}

export const defaultTagProps: Partial<TagProps> = {
  variant: 'default',
  size: 'medium',
  closable: false,
  bordered: false
}
