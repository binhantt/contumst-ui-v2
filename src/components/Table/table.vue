<template>
  <div class="cui-table-wrapper">
    <table class="cui-table" :class="tableClasses">
      <thead>
        <tr>
          <th 
            v-for="column in columns" 
            :key="column.key"
            :style="{ width: column.width, textAlign: column.align || 'left' }"
            :class="{ sortable: column.sortable }"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody v-if="!loading">
        <tr v-for="(row, index) in data" :key="index">
          <td 
            v-for="column in columns" 
            :key="column.key"
            :style="{ textAlign: column.align || 'left' }"
          >
            <slot :name="`cell-${column.key}`" :row="row" :value="row[column.key]">
              {{ row[column.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td :colspan="columns.length" style="text-align: center; padding: 40px;">
            Loading...
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TableProps } from './types'
import { defaultTableProps } from './types'

const props = withDefaults(defineProps<TableProps>(), defaultTableProps)

const tableClasses = computed(() => ({
  'cui-table-striped': props.striped,
  'cui-table-bordered': props.bordered,
  'cui-table-hoverable': props.hoverable,
  [`cui-table-${props.size}`]: props.size
}))
</script>

<style scoped>
.cui-table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.cui-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.cui-table thead {
  background: #f8f9fa;
}

.cui-table th {
  padding: 12px 16px;
  font-weight: 600;
  color: #2c3e50;
  border-bottom: 2px solid #dee2e6;
  white-space: nowrap;
}

.cui-table th.sortable {
  cursor: pointer;
  user-select: none;
}

.cui-table th.sortable:hover {
  background: #e9ecef;
}

.cui-table td {
  padding: 12px 16px;
  color: #495057;
  border-bottom: 1px solid #dee2e6;
}

.cui-table tbody tr:last-child td {
  border-bottom: none;
}

/* Striped */
.cui-table-striped tbody tr:nth-child(even) {
  background: #f8f9fa;
}

/* Bordered */
.cui-table-bordered th,
.cui-table-bordered td {
  border: 1px solid #dee2e6;
}

/* Hoverable */
.cui-table-hoverable tbody tr {
  transition: background-color 0.2s;
}

.cui-table-hoverable tbody tr:hover {
  background: #f1f3f5;
}

/* Sizes */
.cui-table-small th,
.cui-table-small td {
  padding: 8px 12px;
  font-size: 14px;
}

.cui-table-medium th,
.cui-table-medium td {
  padding: 12px 16px;
  font-size: 15px;
}

.cui-table-large th,
.cui-table-large td {
  padding: 16px 20px;
  font-size: 16px;
}
</style>

/* Responsive Table */
@media (max-width: 1024px) {
  .cui-table {
    font-size: 14px;
  }

  .cui-table th,
  .cui-table td {
    padding: 10px 12px;
  }
}

@media (max-width: 768px) {
  .cui-table-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .cui-table {
    min-width: 600px;
    font-size: 13px;
  }

  .cui-table th,
  .cui-table td {
    padding: 8px 10px;
    white-space: nowrap;
  }
}

@media (max-width: 480px) {
  .cui-table {
    font-size: 12px;
  }

  .cui-table th,
  .cui-table td {
    padding: 6px 8px;
  }
}
