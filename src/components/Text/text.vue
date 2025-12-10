<template>
  <component :is="tag" class="cui-text" :class="textClasses" :style="customStyle">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TextProps } from './types'
import { defaultTextProps } from './types'
import { useTextStyle } from '../../composables/useTextStyle'

const props = withDefaults(defineProps<TextProps>(), defaultTextProps)
const { customStyle } = useTextStyle(props)

const textClasses = computed(() => [
  props.size,
  props.weight,
  props.variant,
  {
    italic: props.italic,
    underline: props.underline,
    'line-through': props.lineThrough
  }
])
</script>

<style scoped>
.cui-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
  transition: all 0.2s ease;
}

/* Sizes */
.cui-text.small {
  font-size: 14px;
}

.cui-text.medium {
  font-size: 16px;
}

.cui-text.large {
  font-size: 18px;
}

/* Weight */
.cui-text.light {
  font-weight: 300;
}

.cui-text.normal {
  font-weight: 400;
}

.cui-text.medium-weight {
  font-weight: 500;
}

.cui-text.semibold {
  font-weight: 600;
}

.cui-text.bold {
  font-weight: 700;
}

/* Variants */
.cui-text.primary {
  color: #1f2937;
}

.cui-text.secondary {
  color: #6b7280;
}

.cui-text.success {
  color: #10b981;
}

.cui-text.warning {
  color: #f59e0b;
}

.cui-text.error {
  color: #ef4444;
}

.cui-text.info {
  color: #3b82f6;
}

.cui-text.muted {
  color: #9ca3af;
}

/* Styles */
.cui-text.italic {
  font-style: italic;
}

.cui-text.underline {
  text-decoration: underline;
}

.cui-text.line-through {
  text-decoration: line-through;
}
</style>
