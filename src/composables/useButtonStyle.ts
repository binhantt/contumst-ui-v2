import { computed } from 'vue'
import type { ButtonProps } from '../components/Button/types'

export function useButtonStyle(props: ButtonProps) {
  const customStyle = computed(() => {
    const style: Record<string, string> = {}
    if (props.bgColor) style.background = props.bgColor
    if (props.textColor) style.color = props.textColor
    if (props.borderColor) style.borderColor = props.borderColor
    if (props.borderRadius) style.borderRadius = props.borderRadius
    if (props.borderWidth) style.borderWidth = props.borderWidth
    if (props.borderStyle) style.borderStyle = props.borderStyle
    
    // CSS variables for hover states
    if (props.hoverBgColor) style['--hover-bg'] = props.hoverBgColor
    if (props.hoverTextColor) style['--hover-text'] = props.hoverTextColor
    if (props.hoverBorderColor) style['--hover-border'] = props.hoverBorderColor
    
    return style
  })

  return { customStyle }
}
