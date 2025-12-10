export interface ToastProps {
  type?: 'success' | 'info' | 'warning' | 'error' | 'loading'
  message: string
  duration?: number
  position?: 'top' | 'center' | 'bottom'
}

export const defaultToastProps: Partial<ToastProps> = {
  type: 'info',
  duration: 3000,
  position: 'center'
}
