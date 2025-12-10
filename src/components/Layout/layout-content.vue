<template>
  <main class="cui-layout-content" :style="customStyle">
    <slot />
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutContentProps } from './types'
import { defaultLayoutContentProps } from './types'

const props = withDefaults(defineProps<LayoutContentProps>(), defaultLayoutContentProps)

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.bgColor) style.backgroundColor = props.bgColor
  return style
})
</script>

<style scoped>
.cui-layout-content {
  flex: 1;
  padding: 1.5rem;
  background: #f9fafb;
  overflow-y: auto;
}
</style>
