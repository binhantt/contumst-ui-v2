export interface ModalProps {
  modelValue: boolean
  title?: string
  size?: 'small' | 'medium' | 'large' | 'full'
  closable?: boolean
  maskClosable?: boolean
  showFooter?: boolean
}

export const defaultModalProps: Partial<ModalProps> = {
  size: 'medium',
  closable: true,
  maskClosable: true,
  showFooter: true
}
