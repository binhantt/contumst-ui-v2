import { computed } from 'vue'
import type { TextProps } from '../components/Text/types'

export function useTextStyle(props: TextProps) {
  const customStyle = computed(() => {
    const style: Record<string, string> = {}
    if (props.color) style.color = props.color
    return style
  })

  return { customStyle }
}
