<template>
  <div class="cui-divider" :class="dividerClasses" :style="dividerStyle">
    <span v-if="$slots.default" class="cui-divider-content" :class="contentClasses">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DividerProps } from './types'
import { defaultDividerProps } from './types'

const props = withDefaults(defineProps<DividerProps>(), defaultDividerProps)

const dividerClasses = computed(() => ({
  [`cui-divider-${props.orientation}`]: props.orientation,
  'cui-divider-dashed': props.dashed,
  'cui-divider-with-text': !!props.align
}))

const contentClasses = computed(() => ({
  [`cui-divider-content-${props.align}`]: props.align
}))

const dividerStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.color) style.borderColor = props.color
  if (props.thickness) style.borderWidth = props.thickness
  if (props.margin) style.margin = props.margin
  return style
})
</script>

<style scoped>
.cui-divider {
  border: 0;
  border-top: 1px solid #dee2e6;
  margin: 24px 0;
}

.cui-divider-horizontal {
  width: 100%;
}

.cui-divider-vertical {
  display: inline-block;
  width: 1px;
  height: 1em;
  margin: 0 8px;
  vertical-align: middle;
  border-top: 0;
  border-left: 1px solid #dee2e6;
}

.cui-divider-dashed {
  border-style: dashed;
}

.cui-divider-with-text {
  display: flex;
  align-items: center;
  color: #6c757d;
  font-size: 14px;
  white-space: nowrap;
}

.cui-divider-with-text::before,
.cui-divider-with-text::after {
  content: '';
  flex: 1;
  border-top: 1px solid #dee2e6;
}

.cui-divider-dashed.cui-divider-with-text::before,
.cui-divider-dashed.cui-divider-with-text::after {
  border-style: dashed;
}

.cui-divider-content {
  padding: 0 16px;
}

.cui-divider-content-left {
  padding-left: 0;
}

.cui-divider-content-left::before {
  max-width: 5%;
}

.cui-divider-content-right {
  padding-right: 0;
}

.cui-divider-content-right::after {
  max-width: 5%;
}
</style>
