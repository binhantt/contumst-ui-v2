<template>
  <div class="cui-avatar" :class="avatarClasses" :style="avatarStyle">
    <img v-if="src" :src="src" :alt="alt" class="cui-avatar-img" />
    <span v-else-if="icon" class="cui-avatar-icon">{{ icon }}</span>
    <span v-else-if="text" class="cui-avatar-text">{{ displayText }}</span>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { AvatarProps } from './types'
import { defaultAvatarProps } from './types'

const props = withDefaults(defineProps<AvatarProps>(), defaultAvatarProps)

const sizeMap = {
  small: 32,
  medium: 40,
  large: 56,
  xlarge: 80
}

const avatarSize = computed(() => {
  if (typeof props.size === 'number') return props.size
  return sizeMap[props.size as keyof typeof sizeMap]
})

const displayText = computed(() => {
  if (!props.text) return ''
  return props.text.slice(0, 2).toUpperCase()
})

const avatarClasses = computed(() => ({
  [`cui-avatar-${props.shape}`]: props.shape
}))

const avatarStyle = computed(() => ({
  width: `${avatarSize.value}px`,
  height: `${avatarSize.value}px`,
  fontSize: `${avatarSize.value * 0.4}px`,
  color: props.color,
  background: props.bgColor || '#667eea'
}))
</script>

<style scoped>
.cui-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  user-select: none;
  color: white;
  font-weight: 500;
}

.cui-avatar-circle {
  border-radius: 50%;
}

.cui-avatar-square {
  border-radius: 8px;
}

.cui-avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cui-avatar-icon,
.cui-avatar-text {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
