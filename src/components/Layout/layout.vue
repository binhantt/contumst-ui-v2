<template>
  <div class="cui-layout" :class="layoutClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { LayoutProps } from './types'
import { defaultLayoutProps } from './types'

const props = withDefaults(defineProps<LayoutProps>(), defaultLayoutProps)

const layoutClasses = computed(() => ({
  'has-sidebar': props.hasSidebar,
  'sidebar-collapsed': props.sidebarCollapsed
}))
</script>

<style scoped>
.cui-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.cui-layout.has-sidebar {
  flex-direction: row;
}
</style>
