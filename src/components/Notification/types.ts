export interface NotificationProps {
  type?: 'success' | 'info' | 'warning' | 'error'
  title: string
  message?: string
  duration?: number
  closable?: boolean
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

export const defaultNotificationProps: Partial<NotificationProps> = {
  type: 'info',
  duration: 4500,
  closable: true,
  position: 'top-right'
}
