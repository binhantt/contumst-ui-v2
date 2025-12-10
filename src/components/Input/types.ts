export interface InputProps {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  size?: 'large' | 'normal' | 'small'
  variant?: 'default' | 'outline' | 'filled' | 'none'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  success?: boolean
  bgColor?: string
  textColor?: string
  borderColor?: string
  borderRadius?: string
  borderWidth?: string
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none'
}

export const defaultInputProps: Partial<InputProps> = {
  type: 'text',
  size: 'normal',
  variant: 'default',
  disabled: false,
  readonly: false,
  error: false,
  success: false
}
