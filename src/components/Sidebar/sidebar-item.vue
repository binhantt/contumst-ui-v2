<template>
  <a 
    class="cui-sidebar-item" 
    :class="{ active: active, disabled: disabled, collapsed: collapsed }"
    :href="href"
    @click="handleClick"
  >
    <span v-if="$slots.icon" class="cui-sidebar-item-icon">
      <slot name="icon" />
    </span>
    <span v-if="!collapsed" class="cui-sidebar-item-text">
      <slot />
    </span>
    <span v-if="badge && !collapsed" class="cui-sidebar-item-badge">
      {{ badge }}
    </span>
  </a>
</template>

<script setup lang="ts">
import type { SidebarItemProps } from './types'
import { defaultSidebarItemProps } from './types'

const props = withDefaults(defineProps<SidebarItemProps>(), defaultSidebarItemProps)
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<style scoped>
.cui-sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
}

.cui-sidebar-item:hover {
  color: #1f2937;
  background: #f3f4f6;
}

.cui-sidebar-item.active {
  color: #3b82f6;
  background: #eff6ff;
}

.cui-sidebar-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background: #3b82f6;
  border-radius: 0 3px 3px 0;
}

.cui-sidebar-item.disabled {
  color: #d1d5db;
  cursor: not-allowed;
  pointer-events: none;
}

.cui-sidebar-item.collapsed {
  justify-content: center;
  padding: 0.75rem;
}

.cui-sidebar-item-icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.cui-sidebar-item-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

.cui-sidebar-item-text {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cui-sidebar-item-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.375rem;
  background: #ef4444;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.625rem;
}
</style>
