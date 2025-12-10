<template>
  <component 
    :is="href ? 'a' : 'div'" 
    :href="href"
    class="cui-nav-item" 
    :class="navItemClasses"
    @click="handleClick"
  >
    <span class="cui-nav-link">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavItemProps } from './types'
import { defaultNavItemProps } from './types'

const props = withDefaults(defineProps<NavItemProps>(), defaultNavItemProps)
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const navItemClasses = computed(() => ({
  'cui-nav-item-active': props.active,
  'cui-nav-item-disabled': props.disabled
}))

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault()
    return
  }
  emit('click', event)
}
</script>

<style scoped>
.cui-nav-item {
  padding: 8px 12px;
  transition: background 0.2s;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.cui-nav-item:hover:not(.cui-nav-item-disabled) {
  background: rgba(255, 255, 255, 0.1);
}

.cui-nav-item-active {
  background: rgba(255, 255, 255, 0.15);
}

.cui-nav-item-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cui-nav-link {
  color: white;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 768px) {
  .cui-nav-item {
    padding: 6px 10px;
  }

  .cui-nav-link {
    font-size: 14px;
  }
}
</style>
