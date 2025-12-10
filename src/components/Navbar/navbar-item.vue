<template>
  <a 
    class="cui-navbar-item" 
    :class="{ active: active, disabled: disabled }"
    :href="href"
    @click="handleClick"
  >
    <span v-if="$slots.icon" class="cui-navbar-item-icon">
      <slot name="icon" />
    </span>
    <slot />
  </a>
</template>

<script setup lang="ts">
import type { NavbarItemProps } from './types'
import { defaultNavbarItemProps } from './types'

const props = withDefaults(defineProps<NavbarItemProps>(), defaultNavbarItemProps)
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
.cui-navbar-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  color: #6b7280;
  text-decoration: none;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
}

.cui-navbar-item:hover {
  color: #1f2937;
  background: #f3f4f6;
}

.cui-navbar-item.active {
  color: #3b82f6;
  background: #eff6ff;
}

.cui-navbar-item.disabled {
  color: #d1d5db;
  cursor: not-allowed;
  pointer-events: none;
}

.cui-navbar-item-icon {
  display: inline-flex;
  align-items: center;
}

.cui-navbar-item-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}
</style>
