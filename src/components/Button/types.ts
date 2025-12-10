export interface ButtonProps {
  variant?: 'primary' | 'edit' | 'delete' | 'outline' | 'none'
  size?: 'large' | 'normal' | 'small' | 'tiny'
  bgColor?: string
  textColor?: string
  borderColor?: string
  borderRadius?: string
  borderWidth?: string
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none'
  hoverBgColor?: string
  hoverTextColor?: string
  hoverBorderColor?: string
}

export const defaultProps: Partial<ButtonProps> = {
  variant: 'primary',
  size: 'normal',
  borderStyle: 'solid'
}
