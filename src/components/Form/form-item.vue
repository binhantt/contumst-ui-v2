<template>
  <div class="cui-form-item" :class="formItemClasses">
    <label v-if="label" class="cui-form-label" :style="labelStyle">
      <span v-if="required" class="cui-form-required">*</span>
      {{ label }}
    </label>
    <div class="cui-form-control">
      <slot />
      <div v-if="error" class="cui-form-error">{{ error }}</div>
      <div v-else-if="help" class="cui-form-help">{{ help }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { FormItemProps } from './types'
import { defaultFormItemProps } from './types'

defineOptions({ name: 'FormItemVNUI' })

const props = withDefaults(defineProps<FormItemProps>(), defaultFormItemProps)

const formLayout = inject<string>('formLayout', 'vertical')
const formLabelWidth = inject<string | undefined>('formLabelWidth')

const formItemClasses = computed(() => ({
  error: !!props.error,
  horizontal: formLayout === 'horizontal'
}))

const labelStyle = computed(() => {
  if (formLayout === 'horizontal' && formLabelWidth) {
    return { width: formLabelWidth }
  }
  return {}
})
</script>

<style scoped>
.cui-form-item {
  margin-bottom: 1.5rem;
}

.cui-form-item.horizontal {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.cui-form-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.cui-form-item.horizontal .cui-form-label {
  margin-bottom: 0;
  padding-top: 0.75rem;
  flex-shrink: 0;
}

.cui-form-required {
  color: #ef4444;
  margin-right: 0.25rem;
}

.cui-form-control {
  flex: 1;
}

.cui-form-error {
  margin-top: 0.5rem;
  font-size: 13px;
  color: #ef4444;
}

.cui-form-help {
  margin-top: 0.5rem;
  font-size: 13px;
  color: #6b7280;
}

.cui-form-item.error .cui-form-label {
  color: #ef4444;
}
</style>
