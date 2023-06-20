<template>
  <section class="show-cast">
    <!-- Cast -->
    <section class="show-cast__actors">
      <h3 v-if="props.show.cast" class="show-cast__heading">Cast</h3>

      <CastCarousel v-if="props.show.cast" :cast="props.show.cast" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import CastCarousel from "./CastCarousel.vue";

const props = defineProps<{
  show: any;
}>();
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show-cast {
  &__actors {
    position: relative;
    @include margin-top(0.5);
  }

  &__heading {
    @include margin-bottom(0.5);
    text-transform: uppercase;
  }
}
</style>
