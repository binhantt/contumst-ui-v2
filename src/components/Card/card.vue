<template>
  <div class="cui-card" :class="cardClasses" :style="customStyle">
    <div v-if="$slots.header || title" class="cui-card-header">
      <slot name="header">
        <h3 class="cui-card-title">{{ title }}</h3>
      </slot>
    </div>
    
    <div class="cui-card-body" :class="{ 'no-padding': noPadding }">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="cui-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from './types'
import { defaultCardProps } from './types'

const props = withDefaults(defineProps<CardProps>(), defaultCardProps)

const cardClasses = computed(() => [
  props.variant,
  { 
    hoverable: props.hoverable,
    shadow: props.shadow
  }
])

const customStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.bgColor) style.backgroundColor = props.bgColor
  if (props.borderColor) style.borderColor = props.borderColor
  return style
})
</script>

<style scoped>
.cui-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.cui-card.shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
}

.cui-card.hoverable:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
  cursor: pointer;
}

.cui-card.bordered {
  border-width: 2px;
}

.cui-card.elevated {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.cui-card-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
}

.cui-card-title {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
}

.cui-card-body {
  padding: 1.5rem;
}

.cui-card-body.no-padding {
  padding: 0;
}

.cui-card-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
}

/* Responsive Card */
@media (max-width: 768px) {
  .cui-card-header,
  .cui-card-body,
  .cui-card-footer {
    padding: 1rem;
  }

  .cui-card-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .cui-card-header,
  .cui-card-body,
  .cui-card-footer {
    padding: 0.75rem;
  }

  .cui-card-title {
    font-size: 0.875rem;
  }
}
</style>
