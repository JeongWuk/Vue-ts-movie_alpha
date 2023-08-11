<template>
  <RouterView name="welcome" />
  <RouterView
    name="search1"
    v-if="load" />
  <RouterView name="search2" />
  <RouterView
    name="swiper"
    v-if="load" />
  <RouterView name="movies" />
  <RouterView name="detail" />
  <RouterView
    name="loading"
    v-if="indexStore.loading" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIndexStore } from './store/index'

const load = ref(false)
const indexStore = useIndexStore()

onMounted(() => {
  setTimeout(() => {
    load.value = !load.value
  }, 4000)
})
</script>
