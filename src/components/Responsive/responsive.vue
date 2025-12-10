<template>
  <div class="cui-responsive" :class="responsiveClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ResponsiveProps } from './types'
import { defaultResponsiveProps } from './types'

const props = withDefaults(defineProps<ResponsiveProps>(), defaultResponsiveProps)

const responsiveClasses = computed(() => {
  const classes: string[] = []
  
  if (props.xs) classes.push('cui-show-xs')
  if (props.sm) classes.push('cui-show-sm')
  if (props.md) classes.push('cui-show-md')
  if (props.lg) classes.push('cui-show-lg')
  if (props.xl) classes.push('cui-show-xl')
  if (props.xxl) classes.push('cui-show-xxl')
  
  if (props.hideOn) classes.push(`cui-hide-${props.hideOn}`)
  if (props.showOn) classes.push(`cui-show-only-${props.showOn}`)
  
  return classes
})
</script>

<style scoped>
.cui-responsive {
  display: block;
}

/* Hide on specific breakpoints */
.cui-hide-xs {
  display: none;
}

@media (min-width: 640px) {
  .cui-hide-xs {
    display: block;
  }
  .cui-hide-sm {
    display: none;
  }
}

@media (min-width: 768px) {
  .cui-hide-sm {
    display: block;
  }
  .cui-hide-md {
    display: none;
  }
}

@media (min-width: 1024px) {
  .cui-hide-md {
    display: block;
  }
  .cui-hide-lg {
    display: none;
  }
}

@media (min-width: 1280px) {
  .cui-hide-lg {
    display: block;
  }
  .cui-hide-xl {
    display: none;
  }
}

@media (min-width: 1536px) {
  .cui-hide-xl {
    display: block;
  }
  .cui-hide-xxl {
    display: none;
  }
}

/* Show only on specific breakpoints */
.cui-show-only-xs {
  display: block;
}

@media (min-width: 640px) {
  .cui-show-only-xs {
    display: none;
  }
  .cui-show-only-sm {
    display: block;
  }
}

@media (min-width: 768px) {
  .cui-show-only-sm {
    display: none;
  }
  .cui-show-only-md {
    display: block;
  }
}

@media (min-width: 1024px) {
  .cui-show-only-md {
    display: none;
  }
  .cui-show-only-lg {
    display: block;
  }
}

@media (min-width: 1280px) {
  .cui-show-only-lg {
    display: none;
  }
  .cui-show-only-xl {
    display: block;
  }
}

@media (min-width: 1536px) {
  .cui-show-only-xl {
    display: none;
  }
  .cui-show-only-xxl {
    display: block;
  }
}
</style>
