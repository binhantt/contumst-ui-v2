<template>
  <button 
    ref="buttonRef"
    class="cui-button" 
    :class="buttonClasses" 
    :style="customStyle"
    @click="handleClick"
  >
    <span v-if="slots.icon" class="cui-button-icon">
      <slot name="icon" />
    </span>
    <slot />
    <span class="cui-button-ripple"></span>
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots, ref } from 'vue'
import type { ButtonProps } from './types'
import { defaultProps } from './types'
import { useButtonStyle } from '../../composables/useButtonStyle'

const props = withDefaults(defineProps<ButtonProps>(), defaultProps)
const { customStyle } = useButtonStyle(props)

const slots = useSlots()
const buttonRef = ref<HTMLButtonElement>()

const buttonClasses = computed(() => [
  props.variant,
  props.size,
  { 'has-icon': !!slots.icon }
])

const handleClick = (event: MouseEvent) => {
  if (!buttonRef.value) return

  const button = buttonRef.value
  const ripple = button.querySelector('.cui-button-ripple') as HTMLElement
  if (!ripple) return

  // Remove existing ripple animation
  ripple.classList.remove('active')

  // Get button position and size
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  // Set ripple position and size
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`

  // Trigger animation
  ripple.classList.add('active')
}
</script>

<style scoped>
.cui-button {
  background: #1677ff;
  color: #fff;
  border: 2px solid transparent;
  cursor: pointer;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: all 0.2s ease;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Sizes */
.cui-button.large {
  padding: 0.75rem 2.25rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}

.cui-button.normal {
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
}

.cui-button.small {
  padding: 0.5rem 1.5rem;
  font-size: 0.75rem;
  border-radius: 0.5rem;
}

.cui-button.tiny {
  padding: 0.4rem 0.8rem;
  font-size: 12px;
  border-radius: 0.25rem;
  border-width: 1px;
  font-weight: 500;
  text-shadow: none;
}

/* Variants */
.cui-button.primary {
  background: #1677ff;
  border-color: transparent;
}

.cui-button.primary:hover {
  background: var(--hover-bg, #3d8aff);
  color: var(--hover-text);
  border-color: var(--hover-border);
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.3);
}

.cui-button.edit {
  background: #1677ff;
  border-color: transparent;
}

.cui-button.edit:hover {
  background: #3d8aff;
  box-shadow:  0 2px 8px rgba(22, 119, 255, 0.3);
}

.cui-button.delete {
  background: #ff4d4f;
  border-color: transparent;
}

.cui-button.delete:hover {
  background: #ff7875;
  box-shadow: 0 2px 8px rgba(255, 77, 79, 0.3);
}

.cui-button.outline {
  background: transparent;
  color: #1677ff;
  border-color: #1677ff;
  text-shadow: none;
}

.cui-button.outline:hover {
  background: var(--hover-bg, #1677ff);
  color: var(--hover-text, #fff);
  border-color: var(--hover-border, #1677ff);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.cui-button.none {
  background: transparent;
  color: inherit;
  text-shadow: none;
  box-shadow: none;
}

.cui-button.none:hover {
  background: rgba(0, 0, 0, 0.05);
}

.cui-button:active {
  transform: scale(0.98);
}

.cui-button:focus-visible {
  outline: 2px solid #1677ff;
  outline-offset: 2px;
}

/* Icon styles */
.cui-button.has-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.cui-button-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.cui-button-icon svg {
  width: 1.2em;
  height: 1.2em;
  stroke-width: 2.5;
}

.cui-button.large .cui-button-icon svg {
  width: 1.25em;
  height: 1.25em;
}

.cui-button.tiny .cui-button-icon svg {
  width: 0.875em;
  height: 0.875em;
}
</style>
/* Res
ponsive Button */
@media (max-width: 768px) {
  .cui-button.large {
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }

  .cui-button.normal {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .cui-button.small {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .cui-button {
    width: 100%;
    justify-content: center;
  }

  .cui-button.large,
  .cui-button.normal {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }
}
