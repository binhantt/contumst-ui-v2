<template>
  <div class="cui-flex" :class="flexClasses" :style="flexStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { FlexProps } from './types'
import { defaultFlexProps } from './types'

const props = withDefaults(defineProps<FlexProps>(), defaultFlexProps)

const flexClasses = computed(() => {
  const classes: string[] = []
  if (props.hideOn) classes.push(`cui-flex-hide-${props.hideOn}`)
  if (props.showOn) classes.push(`cui-flex-show-${props.showOn}`)
  return classes
})

const flexStyle = computed(() => {
  const style: Record<string, string> = {
    display: 'flex',
    flexDirection: props.direction || 'row',
    justifyContent: props.justify || 'flex-start',
    alignItems: props.align || 'stretch',
    flexWrap: typeof props.wrap === 'string' ? props.wrap : (props.wrap ? 'wrap' : 'nowrap')
  }
  
  if (props.gap) style.gap = props.gap
  if (props.inline) style.display = 'inline-flex'
  
  return style
})
</script>

<style scoped>
.cui-flex {
  width: 100%;
}

/* Hide on breakpoints */
@media (max-width: 480px) {
  .cui-flex-hide-xs {
    display: none !important;
  }
}

@media (max-width: 640px) {
  .cui-flex-hide-sm {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .cui-flex-hide-md {
    display: none !important;
  }
}

@media (max-width: 1024px) {
  .cui-flex-hide-lg {
    display: none !important;
  }
}

@media (max-width: 1280px) {
  .cui-flex-hide-xl {
    display: none !important;
  }
}

/* Show only on breakpoints */
.cui-flex-show-xs {
  display: none !important;
}

@media (max-width: 480px) {
  .cui-flex-show-xs {
    display: flex !important;
  }
}

.cui-flex-show-sm {
  display: none !important;
}

@media (min-width: 481px) and (max-width: 640px) {
  .cui-flex-show-sm {
    display: flex !important;
  }
}

.cui-flex-show-md {
  display: none !important;
}

@media (min-width: 641px) and (max-width: 768px) {
  .cui-flex-show-md {
    display: flex !important;
  }
}

.cui-flex-show-lg {
  display: none !important;
}

@media (min-width: 769px) and (max-width: 1024px) {
  .cui-flex-show-lg {
    display: flex !important;
  }
}

.cui-flex-show-xl {
  display: none !important;
}

@media (min-width: 1025px) {
  .cui-flex-show-xl {
    display: flex !important;
  }
}
</style>
