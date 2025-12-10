<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="modelValue" class="cui-modal-mask" @click="handleMaskClick">
        <Transition name="modal-slide">
          <div v-if="modelValue" class="cui-modal-wrapper" :class="size">
            <div class="cui-modal" @click.stop>
              <!-- Header -->
              <div v-if="title || closable || $slots.header" class="cui-modal-header">
                <slot name="header">
                  <h3 class="cui-modal-title">{{ title }}</h3>
                </slot>
                <button v-if="closable" class="cui-modal-close" @click="handleClose">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Body -->
              <div class="cui-modal-body">
                <slot />
              </div>

              <!-- Footer -->
              <div v-if="showFooter && $slots.footer" class="cui-modal-footer">
                <slot name="footer" />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { ModalProps } from './types'
import { defaultModalProps } from './types'

const props = withDefaults(defineProps<ModalProps>(), defaultModalProps)
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
}>()

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleMaskClick = () => {
  if (props.maskClosable) {
    handleClose()
  }
}
</script>

<style scoped>
.cui-modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.cui-modal-wrapper {
  width: 100%;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cui-modal-wrapper.small {
  max-width: 400px;
}

.cui-modal-wrapper.medium {
  max-width: 600px;
}

.cui-modal-wrapper.large {
  max-width: 900px;
}

.cui-modal-wrapper.full {
  max-width: 95vw;
  max-height: 95vh;
}

.cui-modal {
  background: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cui-modal-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.cui-modal-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.cui-modal-close {
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.cui-modal-close:hover {
  background: #f3f4f6;
  color: #1f2937;
}

.cui-modal-close svg {
  width: 1.25rem;
  height: 1.25rem;
}

.cui-modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  flex: 1;
}

.cui-modal-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  flex-shrink: 0;
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-slide-enter-active,
.modal-slide-leave-active {
  transition: all 0.3s ease;
}

.modal-slide-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
}

.modal-slide-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
