<script setup lang="ts">
const counter: Ref<number> = ref(0);
</script>

<template>
  <CompHeader />
  <CompContent>
    <el-button @click="counter++">count is: {{ counter }}</el-button>
  </CompContent>
  <CompFooter />
</template>
