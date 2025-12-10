<template>
  <form class="cui-form" :class="[layout, size]" @submit.prevent="handleSubmit">
    <slot />
  </form>
</template>

<script setup lang="ts">
import type { FormProps } from './types'
import { defaultFormProps } from './types'
import { provide } from 'vue'

const props = withDefaults(defineProps<FormProps>(), defaultFormProps)
const emit = defineEmits<{
  submit: []
}>()

provide('formLayout', props.layout)
provide('formLabelWidth', props.labelWidth)
provide('formSize', props.size)

const handleSubmit = () => {
  emit('submit')
}
</script>

<style scoped>
.cui-form {
  width: 100%;
}

.cui-form.inline {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
}
</style>
