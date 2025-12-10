<template>
  <div class="cui-comment">
    <div class="cui-comment-avatar">
      <slot name="avatar">
        <img v-if="avatar" :src="avatar" :alt="author" class="cui-comment-avatar-img" />
        <div v-else class="cui-comment-avatar-placeholder">
          {{ author.charAt(0).toUpperCase() }}
        </div>
      </slot>
    </div>
    
    <div class="cui-comment-content">
      <div class="cui-comment-header">
        <span class="cui-comment-author">{{ author }}</span>
        <span v-if="datetime" class="cui-comment-datetime">{{ datetime }}</span>
      </div>
      
      <div class="cui-comment-text">
        <slot>{{ content }}</slot>
      </div>
      
      <div v-if="$slots.actions || actions?.length" class="cui-comment-actions">
        <slot name="actions">
          <span
            v-for="(action, index) in actions"
            :key="index"
            class="cui-comment-action"
            @click="handleAction(action)"
          >
            {{ action }}
          </span>
        </slot>
      </div>
      
      <!-- Nested comments -->
      <div v-if="$slots.nested" class="cui-comment-nested">
        <slot name="nested" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CommentProps } from './types'
import { defaultCommentProps } from './types'

const props = withDefaults(defineProps<CommentProps>(), defaultCommentProps)
const emit = defineEmits<{
  action: [action: string]
}>()

const handleAction = (action: string) => {
  emit('action', action)
}
</script>

<style scoped>
.cui-comment {
  display: flex;
  gap: 16px;
  padding: 16px 0;
}

.cui-comment-avatar {
  flex-shrink: 0;
}

.cui-comment-avatar-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.cui-comment-avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 16px;
}

.cui-comment-content {
  flex: 1;
  min-width: 0;
}

.cui-comment-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.cui-comment-author {
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.cui-comment-datetime {
  color: #999;
  font-size: 12px;
}

.cui-comment-text {
  color: #495057;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 8px;
  word-wrap: break-word;
}

.cui-comment-actions {
  display: flex;
  gap: 16px;
}

.cui-comment-action {
  color: #6c757d;
  font-size: 13px;
  cursor: pointer;
  transition: color 0.2s;
}

.cui-comment-action:hover {
  color: #667eea;
}

.cui-comment-nested {
  margin-top: 16px;
  padding-left: 16px;
  border-left: 2px solid #e9ecef;
}

/* Responsive */
@media (max-width: 768px) {
  .cui-comment {
    gap: 12px;
    padding: 12px 0;
  }

  .cui-comment-avatar-img,
  .cui-comment-avatar-placeholder {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  .cui-comment-text {
    font-size: 13px;
  }

  .cui-comment-nested {
    padding-left: 12px;
  }
}
</style>
