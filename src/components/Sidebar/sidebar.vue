<template>
  <aside class="cui-sidebar" :class="sidebarClasses" :style="customStyle">
    <div v-if="$slots.header" class="cui-sidebar-header">
      <slot name="header" />
    </div>
    
    <div class="cui-sidebar-menu">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="cui-sidebar-footer">
      <slot name="footer" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SidebarProps } from './types'
import { defaultSidebarProps } from './types'

const props = withDefaults(defineProps<SidebarProps>(), defaultSidebarProps)

const sidebarClasses = computed(() => [
  props.variant,
  { collapsed: props.collapsed }
])

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.width && !props.collapsed) style.width = props.width
  if (props.bgColor) style.backgroundColor = props.bgColor
  return style
})
</script>

<style scoped>
.cui-sidebar {
  width: 250px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.cui-sidebar.collapsed {
  width: 80px;
}

.cui-sidebar.dark {
  background: #1f2937;
  border-right-color: #374151;
  color: #ffffff;
}

.cui-sidebar-header {
  padding: 1.5rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  font-size: 1.125rem;
}

.cui-sidebar.dark .cui-sidebar-header {
  border-bottom-color: #374151;
}

.cui-sidebar-menu {
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.cui-sidebar-footer {
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
}

.cui-sidebar.dark .cui-sidebar-footer {
  border-top-color: #374151;
}

.cui-sidebar.collapsed .cui-sidebar-header,
.cui-sidebar.collapsed .cui-sidebar-footer {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
