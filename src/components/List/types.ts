export interface ListItem {
  id?: string | number
  title: string
  description?: string
  icon?: string
  avatar?: string
  meta?: string
}

export interface ListProps {
  items?: ListItem[]
  bordered?: boolean
  hoverable?: boolean
  size?: 'small' | 'medium' | 'large'
  split?: boolean
}

export const defaultListProps = {
  bordered: false,
  hoverable: true,
  size: 'medium' as const,
  split: true
}
