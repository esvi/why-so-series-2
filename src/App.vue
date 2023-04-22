<template>
  <nav>
    <NavBar />
  </nav>
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
  @include paddingTop(0.5);
}

#content {
  @include paddingTop(1);
  @include paddingBottom(1);
}
</style>
