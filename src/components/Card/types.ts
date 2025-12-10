export interface CardProps {
  title?: string
  variant?: 'default' | 'bordered' | 'elevated'
  hoverable?: boolean
  shadow?: boolean
  noPadding?: boolean
  bgColor?: string
  borderColor?: string
}

export const defaultCardProps: Partial<CardProps> = {
  variant: 'default',
  hoverable: false,
  shadow: false,
  noPadding: false
}
