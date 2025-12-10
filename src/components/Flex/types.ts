export interface FlexProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  wrap?: boolean | 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: string
  inline?: boolean
  hideOn?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showOn?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export const defaultFlexProps: Partial<FlexProps> = {
  direction: 'row',
  justify: 'flex-start',
  align: 'stretch',
  wrap: false,
  inline: false
}
