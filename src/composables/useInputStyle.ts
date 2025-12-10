import { computed } from 'vue'
import type { InputProps } from '../components/Input/types'

export function useInputStyle(props: InputProps) {
  const customStyle = computed(() => {
    const style: Record<string, string> = {}
    if (props.bgColor) style.background = props.bgColor
    if (props.textColor) style.color = props.textColor
    if (props.borderColor) style.borderColor = props.borderColor
    if (props.borderRadius) style.borderRadius = props.borderRadius
    if (props.borderWidth) style.borderWidth = props.borderWidth
    if (props.borderStyle) style.borderStyle = props.borderStyle
    return style
  })

  return { customStyle }
}
