export interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  align?: 'left' | 'center' | 'right'
  dashed?: boolean
  color?: string
  thickness?: string
  margin?: string
}

export const defaultDividerProps: Partial<DividerProps> = {
  orientation: 'horizontal',
  align: 'center',
  dashed: false,
  thickness: '1px'
}
