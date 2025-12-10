export interface TableColumn {
  key: string
  label: string
  width?: string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
}

export interface TableProps {
  columns: TableColumn[]
  data: any[]
  striped?: boolean
  bordered?: boolean
  hoverable?: boolean
  size?: 'small' | 'medium' | 'large'
  loading?: boolean
}

export const defaultTableProps: Partial<TableProps> = {
  striped: false,
  bordered: true,
  hoverable: true,
  size: 'medium',
  loading: false
}
