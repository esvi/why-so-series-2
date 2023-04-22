<!-- Listing view for shows -->
<template>
  <div class="home show-listing">
    <section v-show="genres" v-for="(genre, index) in genres" :key="index">
      <div v-if="genre.shows">
        <h2 class="show-listing__heading" v-text="genre.genre"></h2>
        <CarouselShows v-if="genre.shows" :shows="genre.shows" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSeriesStore } from "../store";
import CarouselShows from "@/components/CarouselShows.vue";

const store = useSeriesStore();
const { genres } = storeToRefs(store);
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";

.show-listing {
  &__heading {
    @include marginBottom(0.5);
    @include paddingBottom(0.25);
    border-bottom: 1px dashed $gold-highlight;
  }
}
</style>
