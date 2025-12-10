export interface BadgeProps {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
  size?: 'small' | 'medium' | 'large'
  dot?: boolean
  count?: number
  max?: number
  showZero?: boolean
}

export const defaultBadgeProps: Partial<BadgeProps> = {
  variant: 'primary',
  size: 'medium',
  dot: false,
  max: 99,
  showZero: false
}
