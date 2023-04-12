<script setup lang="ts">
const counter: Ref<number> = ref(0);
</script>

<template>
  <CompHeader />
  <CompContent>
    <button @click="counter++">count is: {{ counter }}</button>
  </CompContent>
  <CompFooter />
</template>
