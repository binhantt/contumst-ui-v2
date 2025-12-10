export interface AvatarProps {
  src?: string
  alt?: string
  size?: 'small' | 'medium' | 'large' | 'xlarge' | number
  shape?: 'circle' | 'square'
  icon?: string
  text?: string
  color?: string
  bgColor?: string
}

export const defaultAvatarProps: Partial<AvatarProps> = {
  size: 'medium',
  shape: 'circle',
  alt: 'avatar'
}
