<template>
  <NavBar />
  <router-view />
</template>

<script setup lang="ts">
// Imports: Store
import { useSeriesStore } from "./store";

// Imports: Components
import NavBar from "./components/NavBar.vue";

// Props: Store
const store = useSeriesStore();

// Pre-fetch shows
store.getAllShows();
</script>

<style lang="scss">
@import "./assets/scss/global.scss";

#app {
  background: black;
  color: white;
  width: 100%;
  min-height: 100vh;
  @include padding(4, 1, 1, 1);

  @include media-breakpoint-up(sm) {
    @include padding(4, 1, 1, 1);
  }

  @include media-breakpoint-up(md) {
    @include padding(3.5, 1, 1, 1);
  }

  @include media-breakpoint-up(lg) {
    @include padding(2.5, 1, 1, 1);
  }

  @include media-breakpoint-up(xl) {
    @include padding(2, 1, 1, 1);
  }
}

#content {
  @include paddingTop(1);
  @include paddingBottom(1);
}
</style>
