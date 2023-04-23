<template>
  <picture class="image-thumbnail">
    <img :src="props.image" />
  </picture>
</template>

<script setup lang="ts">
// Imports
import { defineProps } from "vue";

// Props
const props = defineProps<{
  image: string;
}>();
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.image-thumbnail {
  position: relative;
  display: block;

  & img {
    position: relative;
    width: 100%;
    max-width: 100%;
  }
}
</style>
