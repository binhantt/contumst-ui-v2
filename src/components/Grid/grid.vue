<template>
  <div class="cui-grid" :style="gridStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { GridProps } from './types'
import { defaultGridProps } from './types'

const props = withDefaults(defineProps<GridProps>(), defaultGridProps)

const gridStyle = computed(() => {
  const style: Record<string, string> = {
    display: 'grid'
  }
  
  if (props.cols) {
    if (typeof props.cols === 'number') {
      style.gridTemplateColumns = `repeat(${props.cols}, 1fr)`
    } else {
      style.gridTemplateColumns = props.cols
    }
  }
  
  if (props.rows) {
    if (typeof props.rows === 'number') {
      style.gridTemplateRows = `repeat(${props.rows}, 1fr)`
    } else {
      style.gridTemplateRows = props.rows
    }
  }
  
  if (props.gap) style.gap = props.gap
  if (props.rowGap) style.rowGap = props.rowGap
  if (props.colGap) style.columnGap = props.colGap
  if (props.autoFlow) style.gridAutoFlow = props.autoFlow
  
  return style
})
</script>

<style scoped>
.cui-grid {
  width: 100%;
}

/* Responsive Grid */
@media (max-width: 1024px) {
  .cui-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
  }
}

@media (max-width: 768px) {
  .cui-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
  }
}

@media (max-width: 480px) {
  .cui-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
