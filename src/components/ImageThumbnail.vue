<template>
  <picture v-if="image" class="image-thumbnail">
    <img :src="props.image" />
  </picture>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

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
