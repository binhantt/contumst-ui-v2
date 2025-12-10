<template>
  <div class="cui-image" :style="containerStyle">
    <img
      v-if="!error"
      :src="src"
      :alt="alt"
      :loading="lazy ? 'lazy' : 'eager'"
      :style="imageStyle"
      class="cui-image-inner"
      @load="handleLoad"
      @error="handleError"
      @click="handleClick"
    />
    <div v-else class="cui-image-error">
      <slot name="error">
        <span>❌</span>
        <span>Failed to load</span>
      </slot>
    </div>
    <div v-if="loading" class="cui-image-loading">
      <slot name="loading">
        <span class="cui-image-spinner">⟳</span>
      </slot>
    </div>
    
    <!-- Preview Modal -->
    <Teleport to="body" v-if="showPreview">
      <div class="cui-image-preview" @click="showPreview = false">
        <img :src="src" :alt="alt" class="cui-image-preview-img" />
        <button class="cui-image-preview-close" @click="showPreview = false">×</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ImageProps } from './types'
import { defaultImageProps } from './types'

const props = withDefaults(defineProps<ImageProps>(), defaultImageProps)
const emit = defineEmits<{
  load: []
  error: []
  click: []
}>()

const loading = ref(true)
const error = ref(false)
const showPreview = ref(false)

const containerStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  borderRadius: props.radius
}))

const imageStyle = computed(() => ({
  objectFit: props.fit,
  cursor: props.preview ? 'pointer' : 'default'
}))

const handleLoad = () => {
  loading.value = false
  emit('load')
}

const handleError = () => {
  loading.value = false
  error.value = true
  emit('error')
}

const handleClick = () => {
  if (props.preview) {
    showPreview.value = true
  }
  emit('click')
}
</script>

<style scoped>
.cui-image {
  position: relative;
  display: inline-block;
  overflow: hidden;
  background: #f5f5f5;
}

.cui-image-inner {
  width: 100%;
  height: 100%;
  display: block;
}

.cui-image-loading,
.cui-image-error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  color: #999;
  font-size: 14px;
}

.cui-image-spinner {
  font-size: 24px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.cui-image-error span:first-child {
  font-size: 32px;
  margin-bottom: 8px;
}

/* Preview Modal */
.cui-image-preview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  cursor: zoom-out;
}

.cui-image-preview-img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.cui-image-preview-close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 32px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.cui-image-preview-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .cui-image-preview-img {
    max-width: 95%;
    max-height: 95%;
  }
}
</style>
