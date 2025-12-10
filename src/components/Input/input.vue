<template>
  <div class="cui-input-wrapper" :class="wrapperClasses" @click="handleWrapperClick">
    <span v-if="slots.prefix" class="cui-input-prefix">
      <slot name="prefix" />
    </span>
    <input
      ref="inputRef"
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      class="cui-input"
      :class="inputClasses"
      :style="customStyle"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span v-if="slots.suffix" class="cui-input-suffix">
      <slot name="suffix" />
    </span>
    <span class="cui-input-ripple" :class="{ active: isRippleActive }"></span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'
import type { InputProps } from './types'
import { defaultInputProps } from './types'
import { useInputStyle } from '../../composables/useInputStyle'

defineOptions({ name: 'InputVNUI' })

const props = withDefaults(defineProps<InputProps>(), defaultInputProps)
const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const slots = useSlots()
const { customStyle } = useInputStyle(props)

const inputRef = ref<HTMLInputElement>()
const isRippleActive = ref(false)

const wrapperClasses = computed(() => [
  props.size,
  props.variant,
  {
    'has-prefix': !!slots.prefix,
    'has-suffix': !!slots.suffix,
    disabled: props.disabled,
    error: props.error,
    success: props.success
  }
])

const inputClasses = computed(() => [props.size, props.variant])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
}

const handleFocus = (event: FocusEvent) => {
  isRippleActive.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isRippleActive.value = false
  emit('blur', event)
}

const handleWrapperClick = () => {
  if (!props.disabled && inputRef.value) {
    inputRef.value.focus()
  }
}
</script>

<style scoped>
.cui-input-wrapper {
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;
  background: #ffffff;
  border-radius: 0.5rem;
  transition: all 0.25s ease;
  overflow: visible;
}

.cui-input-wrapper:hover {
  transform: translateY(-1px);
}

.cui-input {
  width: 100%;
  border: none;
  background: transparent;
  color: #1f2937;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-weight: 400;
  transition: all 0.2s ease;
  outline: none;
}

.cui-input:disabled {
  background: transparent;
  color: #9ca3af;
  cursor: not-allowed;
}

.cui-input::placeholder {
  color: #9ca3af;
  font-weight: 400;
}

/* Sizes */
.cui-input.large {
  padding: 0.875rem 1rem;
  font-size: 16px;
}

.cui-input.normal {
  padding: 0.75rem 1rem;
  font-size: 15px;
}

.cui-input.small {
  padding: 0.625rem 0.875rem;
  font-size: 14px;
}

/* Variants */
.cui-input-wrapper.default {
  border: 1.5px solid #e5e7eb;
}

.cui-input-wrapper.default:hover {
  border-color: #d1d5db;
}

.cui-input-wrapper.default:has(.cui-input:focus) {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.cui-input-wrapper.outline {
  border: 1.5px solid #3b82f6;
}

.cui-input-wrapper.outline:has(.cui-input:focus) {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.cui-input-wrapper.filled {
  background: #f9fafb;
  border: 1.5px solid transparent;
}

.cui-input-wrapper.filled:hover {
  background: #f3f4f6;
}

.cui-input-wrapper.filled:has(.cui-input:focus) {
  background: #ffffff;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.cui-input-wrapper.none {
  border: none;
  background: transparent;
}

.cui-input-wrapper.none:hover {
  background: #f9fafb;
}

.cui-input-wrapper.none:has(.cui-input:focus) {
  background: #f9fafb;
  transform: none;
}

/* States */
.cui-input-wrapper.error {
  border: 1.5px solid #ef4444;
}

.cui-input-wrapper.error:has(.cui-input:focus) {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.cui-input-wrapper.success {
  border: 1.5px solid #10b981;
}

.cui-input-wrapper.success:has(.cui-input:focus) {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.cui-input-wrapper.disabled {
  background: #f9fafb;
  border-color: #e5e7eb;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Prefix/Suffix */
.cui-input-prefix,
.cui-input-suffix {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8c8c8c;
  padding: 0 0.5rem;
}

.cui-input-prefix svg,
.cui-input-suffix svg {
  width: 1.2em;
  height: 1.2em;
}

.cui-input-wrapper.has-prefix .cui-input {
  padding-left: 0.5rem;
}

.cui-input-wrapper.has-suffix .cui-input {
  padding-right: 0.5rem;
}

/* Ripple effect */
.cui-input-ripple {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: #3b82f6;
  transition: width 0.3s ease;
  pointer-events: none;
}

.cui-input-ripple.active {
  width: 100%;
}

.cui-input-wrapper.error .cui-input-ripple {
  background: #ef4444;
}

.cui-input-wrapper.success .cui-input-ripple {
  background: #10b981;
}
</style>

/* Responsive Input */
@media (max-width: 768px) {
  .cui-input-wrapper {
    width: 100%;
  }

  .cui-input {
    width: 100%;
    font-size: 16px; /* Prevent zoom on iOS */
  }

  .cui-input.large {
    padding: 0.75rem 0.875rem;
    font-size: 16px;
  }

  .cui-input.normal {
    padding: 0.625rem 0.875rem;
    font-size: 15px;
  }

  .cui-input.small {
    padding: 0.5rem 0.75rem;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .cui-input-prefix,
  .cui-input-suffix {
    font-size: 14px;
  }
}
