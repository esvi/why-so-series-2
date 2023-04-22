<template>
  <div class="error-message error">
    <h1>Oh no :(</h1>
    <h3>
      That show doesn't seem to be available yet... or something went horribly
      wrong!
    </h3>
    <FormSearch :type="'error'" />
  </div>
</template>

<script setup lang="ts">
// Imports
import FormSearch from "./FormSearch.vue";
</script>

<style scoped lang="scss">
@import "../assets/scss/global.scss";
</style>
