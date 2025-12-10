<template>
  <nav class="cui-navbar" :class="navbarClasses" :style="customStyle">
    <div class="cui-navbar-brand">
      <slot name="brand" />
    </div>
    
    <div class="cui-navbar-menu">
      <slot />
    </div>
    
    <div class="cui-navbar-actions">
      <slot name="actions" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NavbarProps } from './types'
import { defaultNavbarProps } from './types'

const props = withDefaults(defineProps<NavbarProps>(), defaultNavbarProps)

const navbarClasses = computed(() => [props.variant])

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.bgColor) style.backgroundColor = props.bgColor
  if (props.height) style.height = props.height
  return style
})
</script>

<style scoped>
.cui-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.cui-navbar.dark {
  background: #1f2937;
  border-bottom-color: #374151;
  color: #ffffff;
}

.cui-navbar.transparent {
  background: transparent;
  border-bottom: none;
  box-shadow: none;
}

.cui-navbar-brand {
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  gap: 0.75rem;
}

.cui-navbar-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  justify-content: center;
}

.cui-navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
</style>
