<template>
  <footer class="cui-layout-footer" :style="customStyle">
    <slot />
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutFooterProps } from './types'
import { defaultLayoutFooterProps } from './types'

const props = withDefaults(defineProps<LayoutFooterProps>(), defaultLayoutFooterProps)

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.height) style.height = props.height
  if (props.bgColor) style.backgroundColor = props.bgColor
  return style
})
</script>

<style scoped>
.cui-layout-footer {
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  padding: 1.5rem;
  text-align: center;
  flex-shrink: 0;
}
</style>
