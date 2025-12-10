export interface FormProps {
  layout?: 'vertical' | 'horizontal' | 'inline'
  labelWidth?: string
  size?: 'small' | 'medium' | 'large'
}

export const defaultFormProps: Partial<FormProps> = {
  layout: 'vertical',
  size: 'medium'
}

export interface FormItemProps {
  label?: string
  required?: boolean
  error?: string
  help?: string
}

export const defaultFormItemProps: Partial<FormItemProps> = {
  required: false
}
