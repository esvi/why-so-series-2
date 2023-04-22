<!-- Listing view for shows -->
<template>
  <div class="home">
    <section v-show="genres" v-for="(genre, index) in genres" :key="index">
      <div v-if="genre.shows">
        <h2 v-text="genre.genre"></h2>
        <CarouselShows v-if="genre.shows" :shows="genre.shows" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import { useSeriesStore } from "../store";
import CarouselShows from "@/components/CarouselShows.vue";

const store = useSeriesStore();
const { shows, genres } = storeToRefs(store);

watch(shows, () => {
  console.log("WATCH shows", shows);
});

watch(genres, () => {
  console.log("WATCH genres", genres);
});

onMounted(() => {
  console.log("MOUNTED shows", shows);
  console.log("MOUNTED genres", genres);
});
</script>
