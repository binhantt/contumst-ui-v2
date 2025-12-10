<template>
  <aside class="cui-layout-sidebar" :class="sidebarClasses" :style="customStyle">
    <slot />
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutSidebarProps } from './types'
import { defaultLayoutSidebarProps } from './types'

const props = withDefaults(defineProps<LayoutSidebarProps>(), defaultLayoutSidebarProps)

const sidebarClasses = computed(() => ({
  collapsed: props.collapsed
}))

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.width && !props.collapsed) style.width = props.width
  if (props.bgColor) style.backgroundColor = props.bgColor
  return style
})
</script>

<style scoped>
.cui-layout-sidebar {
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  padding: 1rem;
  overflow-y: auto;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.cui-layout-sidebar.collapsed {
  width: 80px;
}
</style>
