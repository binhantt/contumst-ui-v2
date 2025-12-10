<template>
  <div v-if="visible" class="cui-alert" :class="alertClasses">
    <div v-if="showIcon" class="cui-alert-icon">{{ iconMap[type] }}</div>
    <div class="cui-alert-content">
      <div v-if="title" class="cui-alert-title">{{ title }}</div>
      <div class="cui-alert-message">
        <slot />
      </div>
    </div>
    <button v-if="closable" class="cui-alert-close" @click="handleClose">×</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'
import type { AlertProps } from './types'
import { defaultAlertProps } from './types'

const props = withDefaults(defineProps<AlertProps>(), defaultAlertProps)
const emit = defineEmits<{
  close: []
}>()

const visible = ref(true)

const iconMap = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '✕'
}

const alertClasses = computed(() => ({
  [`cui-alert-${props.type}`]: props.type,
  'cui-alert-bordered': props.bordered,
  'cui-alert-with-icon': props.showIcon
}))

const handleClose = () => {
  visible.value = false
  emit('close')
}
</script>

<style scoped>
.cui-alert {
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
}

.cui-alert-icon {
  font-size: 20px;
  margin-right: 12px;
  flex-shrink: 0;
  line-height: 1.5;
}

.cui-alert-content {
  flex: 1;
}

.cui-alert-title {
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 15px;
}

.cui-alert-message {
  font-size: 14px;
  line-height: 1.6;
}

.cui-alert-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
  opacity: 0.6;
  transition: opacity 0.2s;
  line-height: 1;
}

.cui-alert-close:hover {
  opacity: 1;
}

/* Types */
.cui-alert-success {
  background: #d5f4e6;
  color: #27ae60;
}

.cui-alert-info {
  background: #d6eaf8;
  color: #3498db;
}

.cui-alert-warning {
  background: #fef5e7;
  color: #f39c12;
}

.cui-alert-error {
  background: #fadbd8;
  color: #e74c3c;
}

/* Bordered */
.cui-alert-bordered {
  border: 1px solid currentColor;
}

/* Responsive */
@media (max-width: 768px) {
  .cui-alert {
    padding: 10px 12px;
  }

  .cui-alert-icon {
    font-size: 18px;
    margin-right: 10px;
  }

  .cui-alert-title {
    font-size: 14px;
  }

  .cui-alert-message {
    font-size: 13px;
  }
}
</style>
