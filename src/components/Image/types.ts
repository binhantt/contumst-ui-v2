export interface ImageProps {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
  lazy?: boolean
  preview?: boolean
  radius?: string
  fallback?: string
}

export const defaultImageProps: Partial<ImageProps> = {
  alt: 'image',
  fit: 'cover',
  lazy: true,
  preview: false,
  radius: '0'
}
