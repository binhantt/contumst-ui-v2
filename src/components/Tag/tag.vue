<template>
  <span class="cui-tag" :class="tagClasses" :style="tagStyle">
    <slot />
    <span v-if="closable" class="cui-tag-close" @click="handleClose">×</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TagProps } from './types'
import { defaultTagProps } from './types'

const props = withDefaults(defineProps<TagProps>(), defaultTagProps)
const emit = defineEmits<{
  close: []
}>()

const handleClose = () => {
  emit('close')
}

const tagClasses = computed(() => ({
  [`cui-tag-${props.variant}`]: props.variant,
  [`cui-tag-${props.size}`]: props.size,
  'cui-tag-bordered': props.bordered
}))

const tagStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) style.color = props.color
  if (props.bgColor) style.background = props.bgColor
  return style
})
</script>

<style scoped>
.cui-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 4px;
  white-space: nowrap;
  transition: all 0.2s;
}

.cui-tag-close {
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.cui-tag-close:hover {
  opacity: 1;
}

/* Variants */
.cui-tag-primary {
  color: #667eea;
  background: #e8ebfc;
}

.cui-tag-success {
  color: #27ae60;
  background: #d5f4e6;
}

.cui-tag-warning {
  color: #f39c12;
  background: #fef5e7;
}

.cui-tag-danger {
  color: #e74c3c;
  background: #fadbd8;
}

.cui-tag-info {
  color: #3498db;
  background: #d6eaf8;
}

.cui-tag-default {
  color: #495057;
  background: #f8f9fa;
}

/* Bordered */
.cui-tag-bordered {
  border: 1px solid currentColor;
}

/* Sizes */
.cui-tag-small {
  padding: 2px 8px;
  font-size: 12px;
}

.cui-tag-large {
  padding: 6px 16px;
  font-size: 16px;
}
</style>
