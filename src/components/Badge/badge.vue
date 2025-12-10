<template>
  <span class="cui-badge" :class="badgeClasses">
    <slot />
    <span v-if="showBadge" class="cui-badge-content" :class="contentClasses">
      <span v-if="!dot">{{ displayCount }}</span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeProps } from './types'
import { defaultBadgeProps } from './types'

const props = withDefaults(defineProps<BadgeProps>(), defaultBadgeProps)

const showBadge = computed(() => {
  if (props.dot) return true
  if (props.count === undefined) return false
  return props.showZero || props.count > 0
})

const displayCount = computed(() => {
  if (props.count === undefined) return ''
  if (props.max && props.count > props.max) return `${props.max}+`
  return props.count
})

const badgeClasses = computed(() => ({
  [`cui-badge-${props.size}`]: props.size
}))

const contentClasses = computed(() => ({
  [`cui-badge-${props.variant}`]: props.variant,
  'cui-badge-dot': props.dot
}))
</script>

<style scoped>
.cui-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.cui-badge-content {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  color: white;
  background: #e74c3c;
  border-radius: 10px;
  white-space: nowrap;
  border: 2px solid white;
}

.cui-badge-dot {
  min-width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50%;
}

/* Variants */
.cui-badge-primary {
  background: #667eea;
}

.cui-badge-success {
  background: #27ae60;
}

.cui-badge-warning {
  background: #f39c12;
}

.cui-badge-danger {
  background: #e74c3c;
}

.cui-badge-info {
  background: #3498db;
}

.cui-badge-default {
  background: #95a5a6;
}

/* Sizes */
.cui-badge-small .cui-badge-content {
  min-width: 16px;
  height: 16px;
  font-size: 10px;
  padding: 0 4px;
}

.cui-badge-large .cui-badge-content {
  min-width: 24px;
  height: 24px;
  font-size: 14px;
  padding: 0 8px;
}
</style>
