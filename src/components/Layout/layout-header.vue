<template>
  <header class="cui-layout-header" :style="customStyle">
    <slot />
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutHeaderProps } from './types'
import { defaultLayoutHeaderProps } from './types'

const props = withDefaults(defineProps<LayoutHeaderProps>(), defaultLayoutHeaderProps)

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.height) style.height = props.height
  if (props.bgColor) style.backgroundColor = props.bgColor
  return style
})
</script>

<style scoped>
.cui-layout-header {
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  height: 64px;
  flex-shrink: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
</style>
