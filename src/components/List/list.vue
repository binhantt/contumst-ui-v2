<template>
  <div class="cui-list" :class="listClasses">
    <div 
      v-for="(item, index) in items" 
      :key="item.id || index"
      class="cui-list-item"
    >
      <slot name="item" :item="item" :index="index">
        <div class="cui-list-item-content">
          <div v-if="item.icon || item.avatar" class="cui-list-item-prefix">
            <img v-if="item.avatar" :src="item.avatar" class="cui-list-avatar" />
            <span v-else-if="item.icon" class="cui-list-icon">{{ item.icon }}</span>
          </div>
          
          <div class="cui-list-item-main">
            <div class="cui-list-item-title">{{ item.title }}</div>
            <div v-if="item.description" class="cui-list-item-description">
              {{ item.description }}
            </div>
          </div>
          
          <div v-if="item.meta" class="cui-list-item-meta">
            {{ item.meta }}
          </div>
        </div>
      </slot>
    </div>
    
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ListProps } from './types'
import { defaultListProps } from './types'

const props = withDefaults(defineProps<ListProps>(), defaultListProps)

const listClasses = computed(() => ({
  'cui-list-bordered': props.bordered,
  'cui-list-hoverable': props.hoverable,
  'cui-list-split': props.split,
  [`cui-list-${props.size}`]: props.size
}))
</script>

<style scoped>
.cui-list {
  width: 100%;
  background: white;
}

.cui-list-item {
  padding: 16px;
  transition: background-color 0.2s;
}

.cui-list-item-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cui-list-item-prefix {
  flex-shrink: 0;
}

.cui-list-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.cui-list-icon {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cui-list-item-main {
  flex: 1;
  min-width: 0;
}

.cui-list-item-title {
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 4px;
}

.cui-list-item-description {
  font-size: 14px;
  color: #6c757d;
}

.cui-list-item-meta {
  flex-shrink: 0;
  color: #6c757d;
  font-size: 14px;
}

/* Split */
.cui-list-split .cui-list-item {
  border-bottom: 1px solid #dee2e6;
}

.cui-list-split .cui-list-item:last-child {
  border-bottom: none;
}

/* Bordered */
.cui-list-bordered {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
}

/* Hoverable */
.cui-list-hoverable .cui-list-item:hover {
  background: #f8f9fa;
  cursor: pointer;
}

/* Sizes */
.cui-list-small .cui-list-item {
  padding: 12px;
}

.cui-list-small .cui-list-item-title {
  font-size: 14px;
}

.cui-list-small .cui-list-item-description {
  font-size: 13px;
}

.cui-list-medium .cui-list-item {
  padding: 16px;
}

.cui-list-large .cui-list-item {
  padding: 20px;
}

.cui-list-large .cui-list-item-title {
  font-size: 18px;
}
</style>
