<template>
  <Transition name="notification">
    <div v-if="visible" class="cui-notification" :class="notificationClasses">
      <div class="cui-notification-icon">{{ iconMap[type] }}</div>
      <div class="cui-notification-content">
        <div class="cui-notification-title">{{ title }}</div>
        <div v-if="message" class="cui-notification-message">{{ message }}</div>
      </div>
      <button v-if="closable" class="cui-notification-close" @click="handleClose">×</button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import type { NotificationProps } from './types'
import { defaultNotificationProps } from './types'

const props = withDefaults(defineProps<NotificationProps>(), defaultNotificationProps)
const emit = defineEmits<{
  close: []
}>()

const visible = ref(false)

const iconMap = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '✕'
}

const notificationClasses = computed(() => ({
  [`cui-notification-${props.type}`]: props.type,
  [`cui-notification-${props.position}`]: props.position
}))

const handleClose = () => {
  visible.value = false
  setTimeout(() => {
    emit('close')
  }, 300) // Wait for transition to complete
}

onMounted(() => {
  // Small delay to ensure transition works
  setTimeout(() => {
    visible.value = true
  }, 10)
  
  if (props.duration && props.duration > 0) {
    setTimeout(() => {
      handleClose()
    }, props.duration)
  }
})
</script>

<style scoped>
.cui-notification {
  position: fixed;
  display: flex;
  align-items: flex-start;
  min-width: 320px;
  max-width: 400px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  pointer-events: auto;
}

.cui-notification-top-right {
  top: 24px;
  right: 24px;
}

.cui-notification-top-left {
  top: 24px;
  left: 24px;
}

.cui-notification-bottom-right {
  bottom: 24px;
  right: 24px;
}

.cui-notification-bottom-left {
  bottom: 24px;
  left: 24px;
}

.cui-notification-icon {
  font-size: 24px;
  margin-right: 12px;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cui-notification-content {
  flex: 1;
}

.cui-notification-title {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
  color: #2c3e50;
}

.cui-notification-message {
  font-size: 14px;
  color: #6c757d;
  line-height: 1.5;
}

.cui-notification-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
  opacity: 0.4;
  transition: opacity 0.2s;
  line-height: 1;
  color: #2c3e50;
}

.cui-notification-close:hover {
  opacity: 0.8;
}

/* Types */
.cui-notification-success .cui-notification-icon {
  color: #27ae60;
}

.cui-notification-info .cui-notification-icon {
  color: #3498db;
}

.cui-notification-warning .cui-notification-icon {
  color: #f39c12;
}

.cui-notification-error .cui-notification-icon {
  color: #e74c3c;
}

/* Transitions */
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* Responsive */
@media (max-width: 768px) {
  .cui-notification {
    min-width: 280px;
    max-width: calc(100vw - 32px);
    left: 16px !important;
    right: 16px !important;
  }

  .cui-notification-top-right,
  .cui-notification-top-left {
    top: 16px;
  }

  .cui-notification-bottom-right,
  .cui-notification-bottom-left {
    bottom: 16px;
  }
}
</style>
