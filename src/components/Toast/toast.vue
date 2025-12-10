<template>
  <Transition name="toast">
    <div v-if="visible" class="cui-toast" :class="toastClasses">
      <div class="cui-toast-icon">{{ iconMap[type] }}</div>
      <div class="cui-toast-message">{{ message }}</div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import type { ToastProps } from './types'
import { defaultToastProps } from './types'

const props = withDefaults(defineProps<ToastProps>(), defaultToastProps)
const emit = defineEmits<{
  close: []
}>()

const visible = ref(false)

const iconMap = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '✕',
  loading: '⟳'
}

const toastClasses = computed(() => ({
  [`cui-toast-${props.type}`]: props.type,
  [`cui-toast-${props.position}`]: props.position
}))

onMounted(() => {
  // Small delay to ensure transition works
  setTimeout(() => {
    visible.value = true
  }, 10)
  
  if (props.duration && props.duration > 0 && props.type !== 'loading') {
    setTimeout(() => {
      visible.value = false
      setTimeout(() => {
        emit('close')
      }, 300) // Wait for transition to complete
    }, props.duration)
  }
})
</script>

<style scoped>
.cui-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  border-radius: 8px;
  font-size: 14px;
  z-index: 10000;
  pointer-events: none;
  max-width: 90vw;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.cui-toast-top {
  top: 24px;
}

.cui-toast-center {
  top: 50%;
  transform: translate(-50%, -50%);
}

.cui-toast-bottom {
  bottom: 24px;
}

.cui-toast-icon {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cui-toast-message {
  line-height: 1.5;
}

/* Types */
.cui-toast-success {
  background: #27ae60;
}

.cui-toast-info {
  background: #3498db;
}

.cui-toast-warning {
  background: #f39c12;
}

.cui-toast-error {
  background: #e74c3c;
}

.cui-toast-loading .cui-toast-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}

.cui-toast-center.toast-enter-from,
.cui-toast-center.toast-leave-to {
  transform: translate(-50%, -50%) scale(0.8);
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .cui-toast {
    padding: 10px 16px;
    font-size: 13px;
    max-width: calc(100vw - 32px);
  }

  .cui-toast-icon {
    font-size: 16px;
  }
}
</style>
