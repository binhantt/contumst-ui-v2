export interface AlertProps {
  type?: 'success' | 'info' | 'warning' | 'error'
  title?: string
  closable?: boolean
  showIcon?: boolean
  bordered?: boolean
}

export const defaultAlertProps: Partial<AlertProps> = {
  type: 'info',
  closable: false,
  showIcon: true,
  bordered: false
}
