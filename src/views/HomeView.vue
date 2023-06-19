<!-- Listing view for shows -->
<template>
  <div class="home show-listing">
    <section v-show="genres" v-for="(genre, index) in genres" :key="index">
      <div v-if="genre.shows">
        <h2 class="show-listing__heading" v-text="genre.genre"></h2>

        <!-- Show reel -->
        <ShowCarousel v-if="genre.shows" :shows="genre.shows" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSeriesStore } from "../store";
import ShowCarousel from "@/components/ShowCarousel.vue";

const store = useSeriesStore();
const { genres } = storeToRefs(store);
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show-listing {
  &__heading {
    @include marginBottom(0.5);
    @include padding(0, 0.75, 0.25, 0.75);
    border-bottom: 1px dashed $gold-highlight;
  }
}
</style>
