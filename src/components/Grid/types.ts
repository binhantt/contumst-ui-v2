export interface GridProps {
  cols?: number | string
  rows?: number | string
  gap?: string
  rowGap?: string
  colGap?: string
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense'
}

export const defaultGridProps: Partial<GridProps> = {}
