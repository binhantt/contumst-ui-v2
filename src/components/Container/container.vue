<template>
  <div class="cui-container" :class="containerClasses" :style="containerStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ContainerProps } from './types'
import { defaultContainerProps, breakpoints } from './types'

const props = withDefaults(defineProps<ContainerProps>(), defaultContainerProps)

const containerClasses = computed(() => ({
  'cui-container-fluid': props.fluid,
  'cui-container-centered': props.centered
}))

const containerStyle = computed(() => {
  const style: Record<string, string> = {}
  
  if (!props.fluid && props.maxWidth) {
    if (props.maxWidth in breakpoints) {
      style.maxWidth = breakpoints[props.maxWidth as keyof typeof breakpoints]
    } else {
      style.maxWidth = props.maxWidth
    }
  }
  
  if (props.padding) {
    style.padding = props.padding
  }
  
  return style
})
</script>

<style scoped>
.cui-container {
  width: 100%;
  padding: 0 16px;
}

.cui-container-centered {
  margin-left: auto;
  margin-right: auto;
}

.cui-container-fluid {
  max-width: 100% !important;
}

@media (min-width: 640px) {
  .cui-container {
    padding: 0 24px;
  }
}

@media (min-width: 1024px) {
  .cui-container {
    padding: 0 32px;
  }
}
</style>
