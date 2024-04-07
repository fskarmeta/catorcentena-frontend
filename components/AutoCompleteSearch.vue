<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const searchQuery = ref('')
const data = ref([])
const filteredData = ref([])

const fetchData = async (query) => {
  const simulatedData = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grape',
    'Strawberry',
  ]
  data.value = simulatedData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  )
  filteredData.value = data.value
}

const debouncedFetchData = fetchData

watch(searchQuery, (newValue) => {
  if (!newValue) {
    filteredData.value = []
  } else {
    debouncedFetchData(newValue)
  }
})

const selectItem = (item) => {
  searchQuery.value = item
  filteredData.value = []
}
</script>

<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      type="text"
      class="form-input px-4 py-2 border rounded-md"
      placeholder="Type to search..."
    />
    <div
      v-if="filteredData.length && searchQuery"
      class="absolute left-0 right-0 mt-1 max-h-60 overflow-auto border border-gray-200 rounded-md bg-dark"
    >
      <div
        v-for="(item, index) in filteredData"
        :key="index"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        @click="selectItem(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style>
.form-input {
  width: 100%;
}
</style>
